import express from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import indexRoutes from "./routes/index.routes.js";
import { connectDB } from "./db.js";
import clientRoutes from "./routes/client.routes.js"; 

// Inicializar Express
const app = express();

// Conectarse a MongoDB
connectDB();

// Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// Uso de rutas
app.use("", indexRoutes);
app.use("/api/clients", clientRoutes); // Ruta del cliente

// Exportar app
export default app;
