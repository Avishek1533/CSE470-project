import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import dbConnect from "@/lib/dbConnect";
import User from "@/lib/models/User";
import { sendVerificationEmail } from "@/lib/email/emailVerification";

declare module "next-auth" {
	interface Session {
		user: {
			id: string;
			name?: string | null;
			email?: string | null;
			image?: string | null;
			roles?: string[];
			companyName?: string;
		};
	}
}

export const authOptions: AuthOptions = {
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				email: {
					label: "Email",
					type: "email",
					placeholder: "example@example.com",
				},
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials) {
				await dbConnect();

				const user: any = await User.findOne({
					email: credentials?.email,
				});
				if (!user) throw new Error("User not found");

				const isPasswordValid = await bcrypt.compare(
					credentials?.password || "",
					user.password
				);
				if (!isPasswordValid) throw new Error("Invalid password");

				if (!user.emailVerified) {
					const tempUser = {
						name: user.name,
						email: user.email,
					};

					await sendVerificationEmail(tempUser);

					throw new Error(
						"Email not verified. Please verify your email before signing in."
					);
				}

				return {
					id: user._id.toString(),
					name: user.name,
					email: user.email,
					roles: user.roles,
					image: user?.image,
					companyName: user.companyName,
				};
			},
		}),
	],
	pages: {
		signIn: "/auth/login",
	},
	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				token.id = user.id;
				token.name = user.name;
				token.email = user.email;
				token.roles = (user as any).roles;
				token.image = user?.image;
				token.companyName = (user as any).companyName;
			}
			return token;
		},
		async session({ session, token }) {
			if (session.user) {
				session.user.id = token.id as string;
				session.user.name = token.name as string;
				session.user.email = token.email as string;
				session.user.roles = token.roles as string[];
				session.user.image = token?.image as string;
				session.user.companyName = token.companyName as string;
			}
			return session;
		},
	},
	session: {
		strategy: "jwt",
	},
	secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
