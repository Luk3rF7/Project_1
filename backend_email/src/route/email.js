async function EmailRoutes(server) {
  server.get('/', () => {
    return "hello World!"
  })
}
module.exports = EmailRoutes;