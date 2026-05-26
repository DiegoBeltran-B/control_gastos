const mytsql = require ('mysql2')

const pool = mytsql.createPool(
    {
        user: "root",
        host:'localhost',
        password: '0000',
        port: 3308,
        database: 'gastos'
    }
)

const promisePool = pool.promise()

module,esports = promisePool