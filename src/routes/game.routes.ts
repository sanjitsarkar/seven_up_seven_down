
import express from 'express';
import { rollDice } from "../controllers/game.controller";
import auth from "../middlewares/auth";
const gameRouter = express.Router();


gameRouter.post('/roll', auth, rollDice);

export default gameRouter;
