# 🚀 Express + TypeScript Boilerplate

A production-ready Node.js starter template featuring:

- ⚡ **Express** with TypeScript
- 🗄️ **Drizzle ORM + PostgreSQL**
- ✅ **Zod** request validation
- 📝 **Pino** structured logging
- 🎨 **Prettier** for consistent formatting
- 🛡️ Security with **Helmet**, **CORS**, and **express-rate-limit**

---

## 📦 Installation

```bash
git clone https://github.com/mikegav23/express-template.git
cd express-template
pnpm i
```

## ⚙️ Environment variables

Rename .env.examples to .env and set all required environment variables

```bash
DATABASE_URL=postgres://user:password@localhost:5432/mydb
PORT=8000
NODE_ENV=development
```

## 🗄️ Database setup (Drizzle + node-postgres)

Configure your schema (src/db/schema.ts) and use `generate` to generate migration files and `migrate` to execute the migration, like the example below:

```bash
pnpm exec drizzle-kit generate
pnpm exec drizzle-kit migrate
```

Drizzle comes equipped with **Drizzle Studio** a web based UI interface to visualize your database. To use it run:

```bash
pnpm exec drizzle-kit studio
```

## ▶️ Running the server

- **Development**

```bash
pnpm dev
```

- **Production**

```bash
pnpm build
pnpm start
```

## 🔒 Security

- **Helmet** → secure HTTP headers
- **CORS** → cross-origin resource sharing config
- **express-rate-limit** → rate limiting

## ✅ Validation with Zod

This project uses **Zod** for request validation. Schemas will be found in src/zod

## 📝 Logging

- **Pino** for structured, JSON-friendly logs
- Pretty printing in dev with **pino-pretty**
- Request-level logging with **pino-http**

## 🎨 Consistent code styling

- **Prettier** for consistent formatting
- Configured via .prettierrc
- Run formatting:

```bash
pnpm format
```

## Future plans (coming soon)

- 🐳 **Dockerize** the app for containerized deployment
- ✉️ **Email magic link authentication** (passwordless login)
- 🔑 **Google OAuth** authentication with Passport.js
