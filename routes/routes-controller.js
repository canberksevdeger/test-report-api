const projectRoute = require('./project/project-route')
const stabilityRoute = require('./stability/stability-route')
const testRunRoute = require('./test-run/test-run-route')
const mainRoute = require('./main/main-route')

module.exports.setRoutes = async function(fastify) {
  await fastify.route(mainRoute.mainRouteConfig);
  await fastify.route(projectRoute.projectRouteConfig);
  await fastify.route(testRunRoute.testRunRouteConfig);
  await fastify.route(stabilityRoute.stabilityRouteConfig);
  await fastify.route(stabilityRoute.stabilityReportRouteConfig);
}