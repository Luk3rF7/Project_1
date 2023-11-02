const fastify = require('fastify');
const server = fastify();
const EmailRoutes = require('./route/email');

server.listen({
  port: process.env.PORT || 3200
})