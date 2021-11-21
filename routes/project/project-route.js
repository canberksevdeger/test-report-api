const projectArray = require("../../model/projects");
const fastify = require("fastify");

module.exports.projectRouteConfig = {
  method: "GET",
  url: "/api/v1/projects",
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
    try {
      await request.jwtVerify()
    } catch (err) {
      reply.send(err)
    }
  },
  handler: async (request, reply) => {
    return projectArray.projectsArray;
  },
}