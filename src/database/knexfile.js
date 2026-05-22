require('dotenv').config({
 path:'src/graphql/.env'
});

console.log("HOST:",process.env.DB_HOST);
console.log("USER:",process.env.DB_USER);
console.log("PASS:",process.env.DB_PASSWORD);
console.log("DB:",process.env.DB_DATABASE);

module.exports = {
    client:'mysql2',
    connection:{
        host:process.env.DB_HOST,
        user:process.env.DB_USER,
        password:process.env.DB_PASSWORD,
        database:process.env.DB_DATABASE
    }
};