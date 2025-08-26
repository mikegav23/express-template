import pino from "pino";

const logger = pino({
  transport:
    process.env.NODE_ENV === "production"
      ? undefined // raw JSON logs in prod
      : {
          target: "pino-pretty",
          options: { colorize: true, translateTime: "HH:MM:ss" },
        },
  level: process.env.NODE_ENV === "production" ? "info" : "debug",
});

export { logger };
