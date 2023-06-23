import getConnection from "../db/database.js";

const getFactura = async (req , res) =>{
    const connection = await getConnection();
    const result = await connection.query("SELECT FacturaID , ClienteID , EmpleadoID , FechaFactura , FechaRegistro , FechaEnvio , EnvioVia , Transporte , NombreEnvio , DireccionEnvio , CiudadEnvio , RegionEnvio , CodigoPostalEnvio , PaisEnvio FROM facturas");
    res.json(result);
}

export const methodsHTTP = {
    getFactura
}