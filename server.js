const fastify = require("fastify")({ logger: true });
const config = require( "dotenv" ).config();
const util = require( "util" );
const projectObj = require('./model/projects')
const testRunObj = require('./model/test-run')

fastify.register(require('fastify-auth0-verify'), {
  domain: process.env.DOMAIN,
  secret: process.env.CLIENT_SECRET
})

fastify.route({
  method: "GET",
  url: "/",
  schema: {
    response: {
      200: {
        type: "string",
        properties: {
          hello: { type: "string" }
        },
      },
    },
  },

  preHandler: async (request, reply) => {

  },
  handler: async (request, reply) => {
    return {hello: 'world'};
  },
});

fastify.route({
  method: "GET",
  url: "/projects",
  schema: {
    response: {
      200: {
        type: "array",
        properties: {
          id: { type: "number" },
          name: { type: "string" }
        },
      },
    },
  },

  preHandler: async (request, reply) => {

  },
  handler: async (request, reply) => {
    return projectObj.projectsObj;
  },
});

fastify.route({
  method: "GET",
  url: "/results/:projectId",
  schema: {

    querystring: {
      id: { type: "string" },
    },

    response: {
      200: {
        type: "array",
        properties: {
          runId: { type: "number" },
          status: { type: "boolean" },
          testTotal: { type: "number" },
          testPassed: { type: "number" },
          testFailed: { type: "number" },
          duration: { type: "number" },
          timeStarted: { type: "string", format: 'date-time' },
          timeFinished: { type: "string", format: 'date-time' }
        },
      },
    },
  },

  preHandler: async (request, reply) => {

  },
  handler: async (request, reply) => {
    return testRunObj.testRunObj;
  },
});

const start = async () => {
  try {
    await fastify.listen(process.env.PORT || 3000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
