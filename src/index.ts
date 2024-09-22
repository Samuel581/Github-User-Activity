import * as https from 'https';

function getGithubUsername(): string | null {
    const args = process.argv.slice(2);
    if(args.length === 0){
        console.log("Plase provide a Github username");
        return null;
    }
    return args[0];
}

async function fetchGithubUserActivity(username: string): Promise<void> {
    const url: string = `https://api.github.com/users/${username}/events`
    const options = {
        headers: {
            'User-Agent': 'node.js',
        }
    };

   try{
    const response = await fetch(url, options);

    if(!response.ok){
        throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const events = await response.json();

    if(events.length===0){
        console.log('No recent activity found');
        return;
    }

    events.forEach((event: any) => {
        const {type, repo} = event;
        switch(type){
            case 'PushEvent':
                console.log(`pushed ${event.payload.commits.length} commit(s) to ${repo.name}`);
                break;
            case 'CreateEvent':
                if(event.payload.ref_type==='repository'){
                    console.log(`created a new repository as ${repo.name}`);
                }
                else{
                    console.log(`created a new ${event.payload.ref_type} at ${repo.name}`);
                }
                break;
            case 'DeleteEvent':
                console.log(`deleted a ${event.payload.ref_name} at ${repo.name}`);
                break;
            case 'ForkEvent':
                console.log(`forked at ${repo.name}`);
                break;
            case 'WatchEvent':
                console.log(`starred ${repo.name} `);
                break;
            case 'PullRequestEvent':
                console.log(`${event.payload.action} a pull request at ${repo.name}`);
            case 'PullRequestReviewEvent':
                console.log(`${event.payload.action} a pull request review at ${repo.name}`);
                break;
            case 'IssueCommentEvent':
                console.log(`${event.payload.action} an issue comment at ${repo.name}`);
                break;
            case 'PullRequestReviewCommentEvent':
                console.log(`${event.payload.action} a pull request review comment at ${repo.name}`);
                break;
            case 'IssuesEvent':
                console.log(`${event.payload.action} an issue at ${repo.name}`);
                break;
            default:
                console.log(`performed ${type} in ${repo.name}`);
        }
    });
   }
   catch(error){
    console.error('Error fetching the data', error);
   }
}

async function getGithubUsernameActivity(){
    const username = getGithubUsername();
    if(!username){
        return;
    }
    
    await fetchGithubUserActivity(username);
}

getGithubUsernameActivity();
