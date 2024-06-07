import { Response } from "express";
import User from "../models/User.model";

export const rollDice = async (req: any, res: Response) => {
  const { bet, choice } = req.body;

  const dice1 = Math.floor(Math.random() * 6) + 1;
  const dice2 = Math.floor(Math.random() * 6) + 1;
  const sum = dice1 + dice2;

  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(400).json({ msg: 'User not found' });
    let winAmount = 0;

    if (choice === '7down' && sum < 7) {
      winAmount = bet * 2;
    } else if (choice === '7up' && sum > 7) {
      winAmount = bet * 2;
    } else if (choice === '7' && sum === 7) {
      winAmount = bet * 5;
    } else {
      winAmount = -bet;
    }

    user.points += winAmount;
    await user.save();

    res.json({ dice: [dice1, dice2], newPoints: user.points });
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
}