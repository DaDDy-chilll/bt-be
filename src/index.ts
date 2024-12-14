import express, { Request, Response, Router } from "express";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./routes/router";

const app = express();
const apiRouter = Router();
app.use(helmet());
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow specific origins only
      const allowedOrigins = [
        "http://localhost:3000", // Local development
        "https://dev.bettainventory.com", // Production domain
      ];
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
require("dotenv").config();
app.use(express.json({ limit: "300mb" }));
app.use(express.urlencoded({ limit: "300mb", extended: true }));
app.use(cookieParser());

apiRouter.get("/", (req: Request, res: Response) => {
  res.send({ message: "Betta APIs up and running updated!!!" });
});
apiRouter.use("/api", router);
app.use("/v1", apiRouter);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
