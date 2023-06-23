import { Router } from "express";
import { methodsHTTP as facturaController} from "../controllers/facturas.controllers.js";

const router = Router();

router.get("/" , facturaController.getFactura);

export default router;