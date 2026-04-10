import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import dbConnect from "@/lib/dbConnect";
import User from "@/lib/models/User";
import { sendWelcomeEmail } from "@/lib/email/welcomeEmail";

export async function GET(
	req: Request,
	{ params }: { params: { id: string } }
) {
	const token = params.id;

	if (!token) {
		return NextResponse.json({ error: "Missing token." }, { status: 400 });
	}

	try {
		const decoded = jwt.verify(
			token,
			process.env.NEXTAUTH_SECRET as string
		) as { email: string };

		await dbConnect();

		const user = await User.findOne({ email: decoded.email });
		if (!user) {
			return NextResponse.json(
				{ error: "User not found." },
				{ status: 404 }
			);
		}

		if (user.emailVerified) {
			return NextResponse.json({ message: "Email already verified." });
		}

		user.emailVerified = true;
		await user.save();

		sendWelcomeEmail(user);

		return NextResponse.json({
			message: "Email verified successfully.",
		});
	} catch (error: any) {
		if (error.name === "TokenExpiredError") {
			return NextResponse.json(
				{ error: "Token has expired." },
				{ status: 400 }
			);
		}
		console.error("Email verification error:", error);
		return NextResponse.json(
			{ error: "Invalid or tampered token." },
			{ status: 400 }
		);
	}
}
