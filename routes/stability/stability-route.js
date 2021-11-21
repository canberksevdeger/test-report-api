let stabilityArray = require("../../model/stability").stabilityArray;

module.exports.stabilityRouteConfig = {
  method: "POST",
  url: "/stability",
  schema: {
    body: {
      id: { type: "number" },
      name: { type: "string" },
      platform: { type: "string" },
      successRate: { type: "number" },
      totalRuns: { type: "number" },
      totalDuration: { type: "number" }
    },
    response: {
      201: {
        type: "object",
        properties: {
          id: { type: "number" },
          name: { type: "string" },
          platform: { type: "string" },
          successRate: { type: "number" },
          totalRuns: { type: "number" },
          totalDuration: { type: "number" }
        },
      },
    },
  },

  preHandler: async (request, reply) => {

  },
  handler: async (request, reply) => {
    const newStabilityObj = {
      id: request.body.id,
      name: request.body.name,
      platform: request.body.platform,
      successRate: request.body.successRate,
      totalRuns: request.body.totalRuns,
      totalDuration: request.body.totalDuration
    };
    stabilityArray.push(newStabilityObj);
    return newStabilityObj
  },
}

module.exports.stabilityReportRouteConfig = {
  method: "GET",
  url: "/report",
  schema: {
    response: {
      200: {
        type: "array",
        properties: {
          id: { type: "number" },
          name: { type: "string" },
          platform: { type: "string" },
          successRate: { type: "number" },
          totalRuns: { type: "number" },
          totalDuration: { type: "number" }
        },
      },
    },
  },

  preHandler: async (request, reply) => {

  },
  handler: async (request, reply) => {
    return stabilityArray
  },
}