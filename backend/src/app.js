//* Imports desde los controllers

import express from "express";
import categoriaRoutes from "./routes/categorias.routes.js";
import productoRoutes from "./routes/productos.routes.js";
import proveedorRoutes from "./routes/proveedores.routes.js";
import facturaRoutes from "./routes/facturas.routes.js";

const app = express();

app.set("port" , 5000);

//* Routes

app.use("/api/categorias" , categoriaRoutes);
app.use("/api/productos" , productoRoutes);
app.use("/api/proveedores" , proveedorRoutes);
app.use("/api/facturas" , facturaRoutes)

//* Se exporta la app

export default app;