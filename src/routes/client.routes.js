import { Router } from 'express';
import Client from '../schemas/client.schema.js';

const router = Router();

// Crear un nuevo cliente
router.post('/', async (req, res) => {
  try {
    const newClient = new Client(req.body); // Crear un cliente
    await newClient.save(); // Guardarlo en MongoDB
    res.status(201).json(newClient); // Responder con el cliente creado
  } catch (error) {
    res.status(400).json({ error: error.message }); // Imprimir el error generado
  }
});

// Obtener todos los clientes
router.get('/', async (req, res) => {
  try {
    const clients = await Client.find(); // Buscar a todos los clientes
    res.json(clients); // Responder con los datos encontrados
  } catch (error) {
    res.status(500).json({ error: error.message }); // Imprimir el error generado
  }
});

export default router;