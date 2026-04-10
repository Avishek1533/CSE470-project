import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import dbConnect from "@/lib/dbConnect";
import User from "@/lib/models/User";
import { sendVerificationEmail } from "@/lib/email/emailVerification";

const validRoles = ["startup", "investor"];

export async function POST(req: Request) {
	try {
		await dbConnect();

		const { name, email, password, companyName, roles } = await req.json();

		if (!name || !email || !password || !companyName || !roles) {
			return NextResponse.json(
				{ error: "Missing required fields" },
				{ status: 400 }
			);
		}

		if (
			!Array.isArray(roles) ||
			roles.length === 0 ||
			!roles.every((role) => validRoles.includes(role))
		) {
			return NextResponse.json(
				{ error: "Invalid roles provided" },
				{ status: 400 }
			);
		}

		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return NextResponse.json(
				{ error: "User already exists" },
				{ status: 400 }
			);
		}

		const hashedPassword = await bcrypt.hash(password, 10);

		const tempUser = {
			name,
			email,
		};

		try {
			await sendVerificationEmail(tempUser);
		} catch (error) {
			console.error("Error sending verification email:", error);
			return NextResponse.json(
				{ error: "Failed to send verification email" },
				{ status: 500 }
			);
		}
		console.log(roles);
		await User.create({
			name,
			email,
			password: hashedPassword,
			companyName,
			roles,
		});

		return NextResponse.json(
			{ message: "User created successfully" },
			{ status: 201 }
		);
	} catch (error) {
		console.error("Error in signup:", error);
		return NextResponse.json(
			{ error: "Something went wrong" },
			{ status: 500 }
		);
	}
}
