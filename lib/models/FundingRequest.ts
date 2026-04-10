import mongoose, { Schema, Document, Model } from "mongoose";

export interface IFundingRequest extends Document {
    startupId: mongoose.Types.ObjectId;
    title: string;
    description: string;
    amountRequested: string;
    equityOffered: string;
    valuation: string;
    stage: string;
    expiresAt: Date;
    views: number;
    pitchDeck?: string;
    financials?: string;
    marketAnalysis?: string;
    documents: {
        name: string;
        type: string;
        size: string;
        url: string;
        uploadedBy: mongoose.Types.ObjectId;
        uploadedAt: Date;
    }[];
    bids: mongoose.Types.ObjectId[];
    createdAt: Date;
    updatedAt: Date;
}

const FundingRequestSchema = new Schema<IFundingRequest>(
    {
        startupId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        title: { type: String, required: true },
        description: { type: String, required: true },
        amountRequested: { type: String, required: true },
        equityOffered: { type: String, required: true },
        valuation: { type: String, required: true },
        stage: { type: String, required: true },
        expiresAt: { type: Date, required: true },
        views: { type: Number, default: 0 },
        pitchDeck: String,
        financials: String,
        marketAnalysis: String,
        documents: [{
            name: String,
            type: String,
            size: String,
            url: String,
            uploadedBy: { type: Schema.Types.ObjectId, ref: 'User' },
            uploadedAt: { type: Date, default: Date.now }
        }],
        bids: [{ type: Schema.Types.ObjectId, ref: 'Bid' }]
    },
    { timestamps: true }
);

const FundingRequest: Model<IFundingRequest> = mongoose.models.FundingRequest || 
    mongoose.model<IFundingRequest>("FundingRequest", FundingRequestSchema);

export default FundingRequest; 