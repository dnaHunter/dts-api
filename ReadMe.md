# DTS API

## Installation

- Clone both [this](https://github.com/dnaHunter/dts-api) and the [frontend repository]() onto your own systems. Follow the instruction on the read me there to run it.

- Run `npm i` to install dependencies and node modules.

- Create a mysql2 database for this project.

- Create a .env from the sample. Add the database details, change any of the host setting you need to and create a secret for jwt.

- Run `npm run migrate` to create the tables in the database.

- Run `npm run seed` to create mock data in the database;

- Finally run `npm start` to start the server.

## Tech stack

- JavaScript
- MySQL
- Express
- Server libraries:
  - knex
  - express
  - dayjs
  - dotenv
