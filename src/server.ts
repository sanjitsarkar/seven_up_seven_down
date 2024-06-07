import { connectMongoDB } from "./config/db";

import cors from 'cors';
import express, { Request, Response } from 'express';
import gameRouter from "./routes/game.routes";
import userRouter from "./routes/user.routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: '*',
}));

app.get('/', (_: Request, res: Response) => {
  res.send('Welcome to the Seven Up Seven Down API');
});
app.use('/api/users', userRouter);
app.use('/api/game', gameRouter);

const PORT = process.env.PORT || 8000;
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`)
  await connectMongoDB()
});
