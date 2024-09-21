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
                console.log(`Pushed ${event.payload.commits.length} commit(s) to ${repo.name}`);
                break;
            case 'CreateEvent':
                if(event.payload.ref_type==='repository'){
                    console.log(`Created a new repository as ${repo.name}`);
                }
                else{
                    console.log(`Created a new ${event.payload.ref_type} at ${repo.name}`);
                }
                break;
            case 'DeleteEvent':
                console.log(`Deleted a ${event.payload.ref_name} at ${repo.name}`);
                break;
            case 'WatchEvent':
                console.log(`Starred ${repo.name} `);
                break;
            default:
                console.log(`Performed ${type} in ${repo.name}`);
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
