// * Imports
const fastify = require('fastify');
const cors = require('@fastify/cors');
const formbody = require('@fastify/formbody');
const EmailRoutes = require('./route/email');


const server = fastify();
const corOptions = {
  credentials: true,
  origin: /localhost\:5173/,
}
// * Register - plugins:
server.register(cors, corOptions);
server.register(formbody)

// * Declaracao de rotas

server.register(EmailRoutes);


server.listen({
  port: process.env.PORT || 3200
})