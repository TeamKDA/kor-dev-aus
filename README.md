

## Local development

#### Pre-requisites
- nvm
- yarn
- Run below commands

```
nvm install (v16.5.0)
nvm use (Just in case you are using many different versions of node)
npm install -g gatsby-cli yarn
yarn install
yarn develop
```

Open [http://localhost:8000](http://localhost:8000) for UI
Open [http://localhost:8000/___graphql](http://localhost:8000/___graphql) for Grqphql client

## Development
Gatsby enables to generate static html from md files.
In order to add new KDA Meetup page,
- go to `src/content` folder.
- clone the latest `meetup_##.md` file with incresed number.
- update the contents for new meetup
- build and test in local 

```
gatsby develop
```
- local test : http://localhost:8000/

## Build
Build changed contents in local and upload all static files into server.

```
gatsby build
```
- gatsby generates static website files into `/public` folder.
- upload all files in public into server side.

## Publish into AWS
In order to upload files into AWS, you need below accounts.
If you don't have, please contact KDA admins.
- AWS Account : kodevau@gmail.com
- S3 : https://s3.console.aws.amazon.com/s3/buckets?region=us-east-1
- Clound Front : https://us-east-1.console.aws.amazon.com/cloudfront/v3/home?region=us-east-1#/distributions/E358EBUK84431U
- Domain : kodev.com.au

1. login into AWS console
2. go to S3 bucket named `kodev.com.au`
3. delete all existing files.
4. upload all local `/public/*` files 
   - make sure all files and subfolders WITHIN `/public` folder (not included `/public` folder)
5. go to Cloud Front : `E358EBUK84431U`
6. go to tab `Invalidations`
7. `Create Invalidation` with `/*` object path
8. wait 1~2 minutes until cdn cache refreshed.
9. open webbrowser to validate the page : https:kodev.com.au
   SHIFT + refresh button clould clear local cache in the browser if not changed the contents
   or view as Incognito window

## Tech stack
- React
- Gatsby
- SASS

## How to create new post

Open `src/components` folder and create a new mark down file by copying existing one


## Contribution
1. Find what to add/fix/update in the [Project dashboard](https://github.com/TeamKDA/KorDevAus/projects/2)
  - High priorities
    - User signup using Firebase Auth SDK
    - Make a RSVP
    - Show meetup history
    - Provides nice previews when sharing on social medias

![](./src/images/project_dashboard.png)

2. Fork the repo you want to contribute
3. Send a beautiful PR
  - Please just make a PR small so that easy to review it

## System architecture
[System architecture](./architecture.md)






