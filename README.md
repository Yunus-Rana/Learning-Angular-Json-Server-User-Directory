# Learning Angular: JSON Server User Directory

A practical Angular learning project that demonstrates how to build a small team directory app with a local REST API. It shows how to fetch data from JSON Server, display it in the UI, and submit new user records using Angular forms and HTTP requests.

## About

This project is a simple user directory app for managing team members. The frontend is built with Angular, while the backend data is served locally through JSON Server. It is designed to help learn Angular fundamentals such as component structure, services, routing, reactive forms, and HTTP communication.

## Features

- View a list of users in a team directory layout
- Fetch user data from a local JSON Server API
- Add a new user with a validated Angular form
- Display user details such as role, status, email, and expertise area
- Learn Angular + REST API integration in a minimal project setup

## Tech stack

- Angular 22
- TypeScript
- RxJS
- JSON Server
- HTML + CSS

## Project structure

- `src/app` — Angular app components, routing, and services
- `src/app/components/user-list` — user directory interface
- `src/app/components/add-user` — form for adding a new user
- `src/app/services` — HTTP service for API calls
- `db.json` — mock data source for JSON Server

## Requirements

- Node.js
- npm

## Getting started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the mock API

From the project root, run:

```bash
npx json-server db.json
```

The mock API will be available at:

- `http://localhost:3000/users`

### 3. Start the Angular app

Open a second terminal and run:

```bash
npm start
```

Then open:

- `http://localhost:4200/`

Keep both servers running while using the app.

## Data model

The mock database in [`db.json`](./db.json) contains a `users` collection with the following fields:

| Field | Description |
| --- | --- |
| `id` | Unique user ID |
| `name` | Full name |
| `username` | Username |
| `email` | Email address |
| `role` | User role such as `admin`, `lead`, or `member` |
| `status` | User status such as `active` or `inactive` |
| `field` | Area of expertise |
| `createdAt` | Creation timestamp |

## Useful commands

Build the project:

```bash
npm run build
```

Run unit tests:

```bash
npm test
```

## License

This project is intended for educational purposes.

## Git ignore

The existing [`.gitignore`](./.gitignore) excludes dependencies, build output, editor settings, and cache files so the project stays clean and easy to clone.
