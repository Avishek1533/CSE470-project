import mongoose, { Schema, Document, Model } from "mongoose";

export interface IBid extends Document {
    investorId: mongoose.Types.ObjectId;
    fundingRequestId: mongoose.Types.ObjectId;
    amount: string;
    equity: string;
    valuation: string;
    message: string;
    terms: string[];
    status: "pending" | "accepted" | "rejected" | "withdrawn";
    createdAt: Date;
    updatedAt: Date;
}

const BidSchema = new Schema<IBid>(
    {
        investorId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        fundingRequestId: { type: Schema.Types.ObjectId, ref: 'FundingRequest', required: true },
        amount: { type: String, required: true },
        equity: { type: String, required: true },
        valuation: { type: String, required: true },
        message: { type: String, required: true },
        terms: [String],
        status: { 
            type: String, 
            enum: ["pending", "accepted", "rejected", "withdrawn"],
            default: "pending"
        }
    },
    { timestamps: true }
);

const Bid: Model<IBid> = mongoose.models.Bid || mongoose.model<IBid>("Bid", BidSchema);

export default Bid; 