
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { CreateUser } from "../types/user_types";

const prisma = new PrismaClient();
const saltRounds = 10;

export async function createUser(userData: CreateUser):
	Promise<{
		id: number;
		hashedPass: string;
		first_name: string;
		last_name: string;
		email: string
	  }> {
		const hashedPass = await bcrypt.hash(userData.password, saltRounds);
		const createdUser = await prisma.user.create({
			data: {
				...userData,
				password: hashedPass,
			},
			});
			return {
				id: createdUser.id,
				hashedPass,
				first_name: userData.first_name,
				last_name: userData.last_name,
				email: userData.email
			};
}

export async function getUserProfile(email: string, password: string) {
    // Finding the user by email
    const user = await prisma.user.findUnique({
        where: { email }
    });

    if (!user) {
        throw new Error("User not found!");
    }

    // Validate password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        throw new Error("That was not the correct password!");
    }

    // Return user profile (not password)
    return {
        id: user.id,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name
    };
}

export async function getUserByEmail(email: string) {
    return prisma.user.findUnique({
        where: { email },
    });
}

