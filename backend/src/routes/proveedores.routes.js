import { Router } from "express";
import { methodsHTTP as proveedorController } from "../controllers/proveedores.controllers.js";

const router = Router();

router.get("/" , proveedorController.getProveedores)

export default router;