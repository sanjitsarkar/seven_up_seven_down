import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';
import { ENV } from '../config/env.cofig';

const auth = (req: any, res: Response, next: NextFunction) => {
  const token = req.headers['x-auth-token'];
  if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });
  try {
    const decoded = jwt.verify(token, ENV.JWT_SECRET); // Use a proper secret key
    req["user"] = decoded["user"] as string;
    next();
  } catch (err) {


    res.status(401).json({ msg: 'Token is not valid' });
  }
};

export default auth;
