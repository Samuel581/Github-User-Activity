# GitHub User Activity CLI

This is a command-line interface (CLI) application that fetches and displays recent GitHub user activity using the GitHub API. The application is written in TypeScript and uses the native `fetch` API available in Node.js 18 and above.
This is the solution to the [Github User Activity](https://roadmap.sh/projects/github-user-activity) challenge from [roadmap.sh](https://roadmap.sh/backend/projects).

## Features

- Fetch recent GitHub activity for a specified user.
- Display activities like pushes, repository creations, stars, and deletions.
- Handles creations of tags, branches, comments, reviews and so on.

## Requirements

- **Node.js** version 18 or higher.
- **Typescript** version 4.x or higher.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/github-user-activity-cli.git
    ```

2. Navigate to the project directory:

    ```bash
    cd Github-User-Activity
    ```

3. Install dependencies:

    ```bash
    cd Github-User-Activity
    ```

## Usage

In order to run it in the terminal:

```bash
npx ts-node src/index.ts <github-usernmame>
```

Replace`<github-username>` with the desired username you want to fetch the activity.

### Example

```bash
npx ts-node src/index.ts samuel581
```

### Output

The CLI will display the recent activity from the specified user, for example:

```bash
pushed 1 commit(s) to Samuel581/Github-User-Activity
starred mouredev/one-day-one-language 
pushed 1 commit(s) to Samuel581/Github-User-Activity
created a new branch at Samuel581/Github-User-Activity
created a new repository as Samuel581/Github-User-Activity
pushed 1 commit(s) to Samuel581/task-tracker-cli
pushed 1 commit(s) to Samuel581/task-tracker-cli
pushed 1 commit(s) to Samuel581/task-tracker-cli
pushed 1 commit(s) to Samuel581/task-tracker-cli
pushed 1 commit(s) to Samuel581/task-tracker-cli
pushed 1 commit(s) to Samuel581/task-tracker-cli
starred kamranahmedse/developer-roadmap 
pushed 1 commit(s) to Samuel581/task-tracker-cli
pushed 1 commit(s) to Samuel581/task-tracker-cli
created a new repository as Samuel581/image-converter
starred Vendicated/Vencord 
```
