import express, { Request, Response } from "express";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";

const app = express();
const port = process.env.PORT || 8000;

// ====== MIDDLEWARE ======

// Set secure HTTP headers
app.use(
  helmet({
    contentSecurityPolicy: false, // Set to `true` and configure CSP in production
  })
);

// Enable CORS (customize origins in production)
app.use(
  cors({
    origin: "https://localhost:3000", // <-- Replace with actual domain
    optionsSuccessStatus: 200,
  })
);

// Rate limiting: prevent brute force attacks
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later.",
});
app.use(limiter);

// Body parser
app.use(express.json());

// Prevent XSS attacks
// app.use(xssClean());

// Prevent HTTP parameter pollution
// app.use(hpp());

// ==================================

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript Express!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
