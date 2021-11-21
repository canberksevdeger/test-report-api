const testRunArray = require("../../model/test-run");

module.exports.testRunRouteConfig = {
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
    return testRunArray.testRunArray;
  },
}