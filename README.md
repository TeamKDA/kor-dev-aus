

## Local development

#### Pre-requisites
- nvm
- yarn
- Run below commands

```
nvm install (Only first time if node v10.16.0 is not installed)
nvm use (Just in case you are using many different versions of node)
yarn install
yarn develop
```

Open [http://localhost:8000](http://localhost:8000) for UI
Open [http://localhost:8000/___graphql](http://localhost:8000/___graphql) for Grqphql client

## Deployment

We deploy and host our web site in Netlify.
Merging into the master branch is all you need to deploy to Production.

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






