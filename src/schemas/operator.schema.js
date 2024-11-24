import mongoose from "mongoose";

const OperatorSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  homeAddress: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  password: { type: String, required: true },
});

const Operator = mongoose.model("Operator", OperatorSchema);

export default Operator;
