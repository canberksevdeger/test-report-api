const fastify = require("fastify")({ logger: true });
const config = require( "dotenv" ).config();
const util = require( "util" );
const routeController = require('./routes/routes-controller')

fastify.register(require('fastify-auth0-verify'), {
  domain: process.env.DOMAIN,
  secret: process.env.CLIENT_SECRET
});

routeController.setRoutes(fastify);

const start = async () => {
  try {
    const PORT = process.env.PORT || 3000;
    await fastify.listen(PORT, '0.0.0.0');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
