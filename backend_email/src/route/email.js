const emailController = require("../controllers/EmailController");


async function EmailRoutes(server) {

  server.get('/', emailController.sendEmail);
}
module.exports = EmailRoutes;