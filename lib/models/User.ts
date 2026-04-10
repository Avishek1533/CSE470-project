import mongoose, { Schema, Document, Model } from "mongoose";

export interface IUser extends Document {
	name: string;
	email: string;
	password: string;
	roles: ("startup" | "investor")[];
	companyName: string;
	image?: string;
	emailVerified: boolean;
	twoFactorEnabled: boolean;
	profile: {
		description?: string;
		location?: string;
		website?: string;
		industry?: string[];
		// Startup specific
		foundedYear?: string;
		teamSize?: number;
		metrics?: {
			arr?: string;
			growth?: string;
			customers?: string;
			runway?: string;
			cac?: string;
			ltv?: string;
		};
		// Investor specific
		investmentFocus?: string[];
		portfolioSize?: number;
		minInvestment?: string;
		maxInvestment?: string;
		stages?: string[];
	};
	team?: {
		name: string;
		role: string;
		image?: string;
		bio?: string;
	}[];
	createdAt: Date;
	updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		roles: {
			type: [String],
			enum: ["startup", "investor"],
			required: true,
		},
		companyName: { type: String, required: true },
		image: { type: String },
		emailVerified: { type: Boolean, default: false },
		twoFactorEnabled: { type: Boolean, default: false },
		profile: {
			description: String,
			location: String,
			website: String,
			industry: [String],
			foundedYear: String,
			teamSize: Number,
			metrics: {
				arr: String,
				growth: String,
				customers: String,
				runway: String,
				cac: String,
				ltv: String,
			},
			investmentFocus: [String],
			portfolioSize: Number,
			minInvestment: String,
			maxInvestment: String,
			stages: [String],
		},
		team: [
			{
				name: String,
				role: String,
				image: String,
				bio: String,
			},
		],
	},
	{ timestamps: true }
);

const User: Model<IUser> =
	mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;
