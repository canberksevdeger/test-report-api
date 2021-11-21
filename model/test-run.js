let faker = require('faker');

const generateTestRun = () => {
  return {
    runId: faker.datatype.number(5000),
    status: faker.datatype.boolean(),
    testTotal: faker.datatype.number(100),
    testPassed: faker.datatype.number(100),
    testFailed: faker.datatype.number(100),
    duration: faker.datatype.number(1000),
    timeStarted: faker.date.between("2010-01-01", "2021-12-31"),
    timeFinished: faker.date.between("2015-01-01", "2021-12-31")
  };
};

const generateTestRunArray = (numUsers) => {
  return Array.from({ length: numUsers }, generateTestRun);
};

let testRunArray = generateTestRunArray(10);

module.exports = {
  testRunArray
}