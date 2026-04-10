import mongoose, { Schema, Document, Model } from "mongoose";

export interface INotification extends Document {
    recipient: mongoose.Types.ObjectId;
    type: "connection_request" | "deal_room_invite" | "post_mention" | "comment" | "like" | "bid";
    sender?: mongoose.Types.ObjectId;
    content: string;
    read: boolean;
    relatedEntity?: {
        type: "post" | "deal_room" | "comment" | "bid" | "funding_request";
        id: mongoose.Types.ObjectId;
    };
    createdAt: Date;
}

const NotificationSchema = new Schema<INotification>(
    {
        recipient: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        type: { 
            type: String, 
            enum: ["connection_request", "deal_room_invite", "post_mention", "comment", "like", "bid"],
            required: true 
        },
        sender: { type: Schema.Types.ObjectId, ref: 'User' },
        content: { type: String, required: true },
        read: { type: Boolean, default: false },
        relatedEntity: {
            type: { type: String, enum: ["post", "deal_room", "comment", "bid", "funding_request"] },
            id: { type: Schema.Types.ObjectId }
        }
    },
    { timestamps: { createdAt: true, updatedAt: false } }
);

const Notification: Model<INotification> = mongoose.models.Notification || 
    mongoose.model<INotification>("Notification", NotificationSchema);

export default Notification; 