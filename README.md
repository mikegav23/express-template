# 🚀 Express + TypeScript Boilerplate

A production-ready Node.js starter template featuring:

- ⚡ **Express** with TypeScript
- 🗄️ **Drizzle ORM + PostgreSQL**
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

## ⚙️ Environment Variables

Rename .env.examples to .env and set all required environment variables

## 🗄️ Database Setup (Drizzle + Postgres)

```bash
pnpm exec drizzle-kit generate
pnpm exec drizzle-kit migrate
```

## ▶️ Running the App

- **Development**

```bash
pnpm dev
```

- **Production**

```bash
pnpm build
pnpm start
```
