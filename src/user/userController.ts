import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import userModel from "./userModel";
const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password } = req.body;

  //validation

  if (!name || !email || !password) {
    const error = createHttpError(400, "all feilds are required");
    return next(error);
  }

  //database call
  const user = await userModel.findOne({ email: email });
  if (user) {
    const error = createHttpError(400, "User already exits with this email");
    return next(error);
  }
  //process

  //response

  res.json({ message: "user created" });
};

export { createUser };
