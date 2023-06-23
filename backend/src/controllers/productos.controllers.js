//* Se importa la database

import getConnection from "../db/database.js";

//* SE crea la funcion para realizar el insertar en l api

const getProductos = async (req , res) =>{
    const connection = await getConnection();
    const result = await connection.query("SELECT ProductoID , ProductoNombre , ProveedorID , CategoriaID , CantidadPorUnidad , PrecioUnitario , UnidadesStock , UnidadesPedidas ,NivelReorden , Discontinuado FROM productos");
    res.json(result);
}

//* Se exporta el metodo http

export const methodsHTTP = {
    getProductos
}