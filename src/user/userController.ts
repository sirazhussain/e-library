import { json, NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import userModel from "./userModel";
import bcrypt from "bcrypt";
import { config } from "../config/config";
import { sign } from "jsonwebtoken";
import { User } from "./userTypes";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password } = req.body;

  //validation

  if (!name || !email || !password) {
    const error = createHttpError(400, "all feilds are required");
    return next(error);
  }

  //database call
  try {
    const user = await userModel.findOne({ email: email });
    if (user) {
      const error = createHttpError(400, "User already exits with this email");
      return next(error);
    }
  } catch (error) {
    return next(createHttpError(500, "error while getting error"));
  }

  //password
  let newUser: User;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    newUser = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });
  } catch (error) {
    return next(createHttpError(500, "error while creating user."));
  }

  //token generation jwt

  try {
    const token = sign({ sub: newUser._id }, config.jwtSecret as string, {
      expiresIn: "7d",
      algorithm: "HS256", // or ES256 with a valid key
    });

    res.json({ accessToken: token });
  } catch (error: any) {
    console.error("JWT Signing Error:", error.message);
    return next(createHttpError(500, "Failed to generate JWT token."));
  }
};

export { createUser };
