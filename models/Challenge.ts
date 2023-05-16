import { model, Schema } from "mongoose";
import { IChallenge } from "../service/interfaces";

/**
 * Create a new Schema from mongoose
 */

const ChallengeSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    difficalty: { type: Number, required: true },
    streak: { type: Number, required: true },
    amount: { type: String, required: true },
    coin_sku: { type: Number, required: true },                         // 1: bitp, 2: busd, 3: usdt, 4: cake
    loss_back: { type: String, required: true },
    status: { type: Number, required: true, default: 1 },
    qc: { type: String, required: true },
    index: { type: Number, required: true, default: 0 }
},{ timestamps: true });

/**
 * ICHallenge Interface Document class inheritance
 */
export default model<IChallenge>("Challenge", ChallengeSchema);
