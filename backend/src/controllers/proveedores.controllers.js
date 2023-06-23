import getConnection from "../db/database.js";

const getProveedores = async (req , res) => {
    const connection = await getConnection();
    const result = await connection.query("SELECT ProveedorID , Compania , Contacto , Titulo , Direccion , Ciudad , Regiones , CodigoPostal , Pais , Telefono , Fax , Pagina FROM proveedores");
    res.json(result);
}

export const methodsHTTP = {
    getProveedores
}