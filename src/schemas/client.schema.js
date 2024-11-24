import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  homeAddress: { type: String, required: true },
  phoneNumber: { type: String, required: false },
  password: { type: String, required: true },
});

const Client = mongoose.model("Client", ClientSchema);

export default Client;
