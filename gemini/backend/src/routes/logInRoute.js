import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { getDbConnection } from "../db";

export const logInRoute = {
  path: "/api/login",
  method: "post",
  handler: async (req, res) => {
    const { username, password } = req.body;

    const db = getDbConnection("geminiClone-db");
    // find user
    const user = await db.collection("users").findOne({ username });

    // if no such user, send error
    if (!user) return res.sendStatus(401);

    // identify user
    const { _id: id, isVerified, passwordHash, info } = user;

    // bcrypt check
    const isCorrect = await bcrypt.compare(password, passwordHash);

    // check jwt token
    if (isCorrect) {
      jwt.sign(
        { id, isVerified, username, info },
        process.env.JWT_SECRET,
        { expiresIn: "2d" },
        (err, token) => {
          if (err) {
            res.status(500).json(err);
          }

          res.status(200).json({ token });
        }
      );
    } else {
      res.sendStatus(401);
    }
  },
};
