const db = require('../config/db')

class GastosModel{
    static async obtenerGastos(){
        const [rows] = await db.query('select ct.nombre, ts.monto, ts.tipo, ts.fecha from transacciones as ts inner join categoria ct on ts.categoria_id =ct.ct_id limit 100')
                                return rows
    }
}

module.exports = GastosModel