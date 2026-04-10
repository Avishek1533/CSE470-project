import mongoose, { Schema, Document, Model } from "mongoose";

export interface IMessage extends Document {
    sender: mongoose.Types.ObjectId;
    recipient: mongoose.Types.ObjectId;
    content: string;
    attachments: string[];
    readBy: mongoose.Types.ObjectId[];
    createdAt: Date;
}

const MessageSchema = new Schema<IMessage>(
    {
        sender: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        recipient: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        content: { type: String, required: true },
        attachments: [String],
        readBy: [{ type: Schema.Types.ObjectId, ref: 'User' }]
    },
    { timestamps: { createdAt: true, updatedAt: false } }
);

const Message: Model<IMessage> = mongoose.models.Message || mongoose.model<IMessage>("Message", MessageSchema);

export default Message; 