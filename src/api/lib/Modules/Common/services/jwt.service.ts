import { Response } from 'express';
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

export const generateAccessToken = (userID: string) => {
  // token will be expired within 2hrs
  const token = jwt.sign(
    {
      id: userID,
    },
    process.env.TOKEN_SECRET,
    { expiresIn: 60 * 60 }
  );
  return token;
};

export const authenticateToken = (req: any, res: Response, next: any) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader?.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(
    token,
    process.env.TOKEN_SECRET as string,
    (err: any, user: any) => {
      console.log(err);

      if (err) return res.sendStatus(403);

      req.user = user;

      next();
    }
  );
};
