const mytsql = require('mysql2')

const pool = mytsql.createPool(
    {
        user: "root",
        host:'localhost',
        password: '0000',
        port: 3306,
        database: 'control_gastos'
    }
)

const promisePool = pool.promise()

module.exports = promisePool