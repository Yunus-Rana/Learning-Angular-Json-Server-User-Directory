# Learning Angular: JSON Server User Directory

A small Angular project for learning how to retrieve user records from a local REST API powered by JSON Server.

## Built with

- Angular 22
- TypeScript
- JSON Server

## Getting started

### Requirements

- Node.js and npm

### Install dependencies

From the project directory, run:

```bash
npm install
```

JSON Server is already listed as a project dependency.

### Start the mock API

In one terminal, start JSON Server from the project root:

```bash
npx json-server db.json
```

The users endpoint is available at <http://localhost:3000/users>.

### Start Angular

In a second terminal, start the Angular development server:

```bash
npm start
```

Open <http://localhost:4200/> in your browser.

Keep both servers running while using the application.

## Data

The mock database is [`db.json`](./db.json). Its `users` collection contains records with these fields:

| Field | Description |
| --- | --- |
| `id` | User identifier |
| `name` | Display name |
| `username` | Username |
| `email` | Email address |
| `role` | `admin`, `lead`, or `member` |
| `status` | `active` or `inactive` |
| `field` | Area of expertise |
| `createdAt` | Creation timestamp |

The Angular user service requests the collection from `http://localhost:3000/users`.

## Other commands

Build the project:

```bash
npm run build
```

Run unit tests:

```bash
npm test
```

## Git ignore

The existing [`.gitignore`](./.gitignore) excludes dependencies, Angular build output, caches, and editor/system files. `db.json` is intentionally not ignored so the sample API data is available when the repository is cloned.
