import mongoose from "mongoose";
const { Schema } = mongoose;

const reportingSchema = new Schema({
  answer: String,
  createdAt: { type: Date, default: Date.now },
});

export default new mongoose.model("Reporting", reportingSchema);