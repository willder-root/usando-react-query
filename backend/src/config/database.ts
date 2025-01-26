import "../loadConfig";

module.exports = {
    dialect: process.env.DB_DIALECT || 'postgres',
    host: process.env.DB_HOST || "localhost",
    database: process.env.DB_NAME || "teste",
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "redlliw9758",
    port:  process.env.DB_PORT || 5432,
    define:{
        charset: "utf8",
        timestamps: true
    },
    pool: {
        max: 10,
        min: 0,
        idle: 5000,
        acquire: 10000
    },
    logging: false
}
