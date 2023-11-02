// const MailQueue = require("../queue/MailQueue");

async function sendEmail(request, reply) {
  const { email, firstName, lastName } = request.body;

  const template =
    `
  OLá ${firstName} ${lastName},sua assinatura foi confirmada!
  Para acessar seus recurso exclusivo você precisa clicar Aqui.
  `

  try {
    await MailQueue.add({
      to: email,
      from: "gdsvahl@inf.ufpel.edu.br",
      subject: "Assinatura confirmada",
      text: template
    });

    return reply.code(200).send();

  } catch (error) {
    return reply.code(500).send("Interny error!", error);
  }

}

module.exports = {
  sendEmail
}