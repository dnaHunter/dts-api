# DTS API

This is the backend repository for my DTS interview test by Daniel Aston. This is paired with the frontend repository which can be found [here](https://github.com/dnaHunter/dts-frontend).

## Requirements

- Mysql - Can be downloaded [here](https://dev.mysql.com/downloads/installer/)
- javascript

## Installation

- Clone both [this](https://github.com/dnaHunter/dts-api) and the [frontend repository](https://github.com/dnaHunter/dts-frontend) onto your own systems. Follow the instruction on the read me there to run it.

- Run `npm i` to install dependencies and node modules.

- Create a mysql2 database for this project.

- Create a .env from the sample. Add the database details, change any of the host setting you need to and create a secret for jwt.

- Run `npm run migrate` to create the tables in the database.

- If you want mock data to display run `npm run seed` to create mock data in the database;

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

## Endpoints

- Get "/tasks" retrives the title, description, status and due date for all tasks. Returns and array of task objects.

- Get "/tasks/:id" retrives the title, description, status and due date for the id specified. Returns a task object.

- Post ".tasks" inserts a new task into the database. This needs a object with a title, status, due_date and optionally a description properties attached as the body. It returns the task object with an id.

- Patch "/status/:id" updates the status field of the task with the specified id. This needs a status object in the body.

- Delete "/id" this deletes task with the corresponding id.
