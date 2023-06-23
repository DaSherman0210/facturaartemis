//* Se importa el router y la funcion de el archivo controllers

import { Router } from "express";
import { methodsHTTP as categoriaController } from "../controllers/categoria.controllers.js";

//* Se ejecuta la funcion de Router();

const router = Router();

router.get("/" ,categoriaController.getCategorias);

//EXport del router

export default router;