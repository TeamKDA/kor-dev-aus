## Local development

```
nvm use (if node v10.16.0 is not installed)
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

Fork -> Send a PR

## High leve architecture
#### UI
- Web interface for https://koreandevelopersaustralia.org
- Before
  - Repo: [KorDevAus](https://github.com/TeamKDA/KorDevAus)
  - ASP.NET CORE2, jQuery
  - Traditional Server rendering web site
  - Azure Web App 

- After
  - Repo: [kor-dev-aus](https://github.com/TeamKDA/kor-dev-aus)
  - React, Gatsby, GraphQL
  - Static web site running on Netlify

##### Announcement API
- What it does? 채워주세요
- Repo: [KorDevAus-Announcement-API](https://github.com/TeamKDA/KorDevAus-Announcement-API)
- Java
- 변경 사항이 있으면 채워주세요

#### User API
- What it does? 채워주세요
- Repo: [KorDevAus-User-API](https://github.com/TeamKDA/KorDevAus-User-API)
- 변경 사항이 있으면 채워주세요

#### Database management
- What it does? 채워주세요
- Repo: [KorDevAus-Database](https://github.com/TeamKDA/KorDevAus-Database)
- Entity Framework Code First
- 변경 사항이 있으면 채워주세요

#### RSVP API
- What it does? 채워주세요
- Repo: [KorDevAus-RSVP-API](https://github.com/TeamKDA/KorDevAus-RSVP-API)
- 변경 사항이 있으면 채워주세요









