import { Router } from "express";
import { index } from "../controllers/index.controller.js";

const router = Router();

// Ruta principal de prueba
router.get("/", index);

export default router;
