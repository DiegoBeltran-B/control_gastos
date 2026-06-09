const model = require('../models/gastos.model')

class GastosController {
    static async obtenerGastos(req,res){
    const gastos = await model.obtenerGastos()
    res.json({
        data: gastos
    })
    }
}

// (async ()=>{
//     const prueba = await GastosController.obtenerGastos()
//     console.log(prueba)
// })()

module.exports = GastosController