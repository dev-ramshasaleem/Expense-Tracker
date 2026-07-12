import { Request, Response } from "express";
import bcrypt from "bcrypt";
import prisma from "../config/prisma";


export const register = async (
    req: Request, res: Response
) => {
    try{
        const { name, email, password}=req.body;

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await prisma.user.create({
            data:{
                name, 
                email,
                password: hashedPassword,
            }
        });

        res.status(201).json({
            message:"User registered successfully",
            user
        });

    } catch (error) {
        res.status(500).json({
            message:"Error registering user"
        });
    }
}