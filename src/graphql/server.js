const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

async function startServer() {

const server = new ApolloServer({

typeDefs,
resolvers

});

const {url}=await startStandaloneServer(server,{

listen:{port:4000}

});

console.log(`Servidor listo: ${url}`);

}

startServer();

//node src/graphql/server.js