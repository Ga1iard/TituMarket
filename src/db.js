import mongoose from "mongoose";

// Función para la conexión a MongoDB
export const connectDB = async () => {
  await mongoose 
    .connect("mongodb://localhost:27017/titu-market")
    .then(() => console.log("Conectado a MongoDB"))
    .catch((err) => console.log("Error al conectar a MongoDB:", err));
};
