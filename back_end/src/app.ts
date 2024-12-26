import express, { Request, Response, NextFunction } from "express";
import userRoutes from "./routes/userRoutes";

const app = express();

app.use(express.json()); 


app.use("/api", userRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: "Algo deu errado!", error: err.message });
});

export default app;
