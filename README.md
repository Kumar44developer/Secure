# Secure Authentication

A secure user authentication system built with Node.js, Express, PostgreSQL, and EJS. Implements bcrypt password hashing for secure credential storage. Users can register with an email and password, log in with their credentials, and access a protected secrets page.

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** PostgreSQL
- **Templating Engine:** EJS
- **Password Hashing:** bcrypt
- **Frontend:** Bootstrap 4, Font Awesome 5

## Prerequisites

- [Node.js](https://nodejs.org/) v16 or higher
- [PostgreSQL](https://www.postgresql.org/) v12 or higher
- npm (comes with Node.js)

## Project Structure

```
Secure/
├── public/
│   └── styles.css
├── views/
│   ├── partials/
│   │   ├── header.ejs
│   │   └── footer.ejs
│   ├── home.ejs
│   ├── login.ejs
│   ├── register.ejs
│   └── secrets.ejs
├── .env
├── .env.example
├── .gitignore
├── index.js
├── package.json
├── queries.sql
└── README.md
```

## Database Setup

1. Open your PostgreSQL shell or pgAdmin.

2. Create the database:

```sql
CREATE DATABASE secrets;
```

3. Connect to the database and create the users table:

```sql
\c secrets

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(100)
);
```

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Kumar44developer/Secure.git
cd Secure
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

4. Open `.env` and update the values with your PostgreSQL credentials:

```
DB_USER=postgres
DB_HOST=localhost
DB_NAME=secrets
DB_PASSWORD=your_password_here
DB_PORT=5432
PORT=3000
```

## Running the App

Start the server:

```bash
npm start
```

Start the server in development mode with auto-reload:

```bash
npm run dev
```

The app will be running at `http://localhost:3000`.

## Usage

1. Open `http://localhost:3000` in your browser.
2. Click **Register** to create a new account with your email and password.
3. Your password is hashed with bcrypt before being stored in the database.
4. After registering, you will be redirected to the secrets page.
5. Click **Login** to sign in with your registered email and password.
6. bcrypt compares your input against the stored hash to verify your identity.
7. Successful login redirects you to the secrets page.

## API Routes

| Method | Route       | Description                                      |
|--------|-------------|--------------------------------------------------|
| GET    | `/`         | Home page with Register and Login links           |
| GET    | `/login`    | Login form                                       |
| GET    | `/register` | Registration form                                |
| POST   | `/login`    | Authenticates user with bcrypt hash comparison   |
| POST   | `/register` | Creates a new user with bcrypt hashed password   |

## Environment Variables

| Variable      | Description                | Default     |
|---------------|----------------------------|-------------|
| `DB_USER`     | PostgreSQL username        | `postgres`  |
| `DB_HOST`     | PostgreSQL host            | `localhost` |
| `DB_NAME`     | PostgreSQL database name   | `secrets`   |
| `DB_PASSWORD` | PostgreSQL password        | -           |
| `DB_PORT`     | PostgreSQL port            | `5432`      |
| `PORT`        | Express server port        | `3000`      |

## Security Features

- **bcrypt Password Hashing** — Passwords are hashed with 10 salt rounds before storage
- **Parameterized Queries** — All SQL queries use parameterized inputs to prevent SQL injection
- **Environment Variables** — Database credentials are stored in `.env` and excluded from version control
- **No Plain Text Passwords** — Passwords are never stored or logged in plain text

## How It Differs from Basic Authentication

This project is an upgraded version of a basic authentication system. The key difference is the use of bcrypt for password hashing. Instead of storing raw passwords in the database, this app hashes every password during registration and uses `bcrypt.compare()` during login to verify credentials against the stored hash.

## License

ISC
