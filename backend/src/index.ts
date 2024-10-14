// import express, { Request, Response } from 'express';

// const app = express();
// const port = 3000;

// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello, Express with TypeScript!');
// });

// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });
import express, { Request, Response } from "express";
import { pollEvents } from "./contractPoller";

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Polling smart contract events...");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  pollEvents(); // Start polling for contract events
});
