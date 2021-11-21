const projectArray = require("../../model/projects");

module.exports.projectRouteConfig = {
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
    return projectArray.projectsArray;
  },
}