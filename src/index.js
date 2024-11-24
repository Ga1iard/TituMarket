import app from "./app.js";
import {connectDB} from "./db.js";

// Variables
const PORT = 3000;

// Conexión con la base de datos MongoDB 
connectDB();

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
