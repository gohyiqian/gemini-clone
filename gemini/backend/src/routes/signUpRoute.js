import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { getDbConnection } from "../db";

export const signUpRoute = {
  path: "/api/signup",
  method: "post",
  handler: async (req, res) => {
    const { username, email, password } = req.body;

    const db = getDbConnection("geminiClone-db");
    const user = await db.collection("users").findOne({ username });

    if (user) {
      res.sendStatus(409);
    }

    // bcrypt hashing
    const passwordHash = await bcrypt.hash(password, 10);

    const startingInfo = {
      age: "",
      occupation: "",
      annualincome: "",
    };

    // insert into mongodb
    const result = await db.collection("users").insertOne({
      username,
      email,
      passwordHash,
      info: startingInfo,
      isVerified: false,
    });
    const { insertedId } = result;

    // creating jwt token
    jwt.sign(
      {
        id: insertedId,
        username,
        info: startingInfo,
        isVerified: false,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "2d",
      },
      (err, token) => {
        if (err) {
          return res.status(500).send(err);
        }
        res.status(200).json({ token });
      }
    );
  },
};
