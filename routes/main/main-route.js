module.exports.mainRouteConfig = {
  method: "GET",
  url: "/",
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          hello: { type: "string" }
        },
      },
    },
  },

  preHandler: async (request, reply) => {

  },
  handler: async (request, reply) => {
    reply.send({hello: 'world'});
  },
}