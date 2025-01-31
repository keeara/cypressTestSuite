const { defineConfig } = require("cypress");
module.exports = defineConfig({
  projectId: 'rqzmrm',
  deleteVideoOnPassed: true,
  
  betterRetries: true,
  reporter: "cypress-xray-junit-reporter",
  reporterOptions: {
    mochaFile: "./report/[suiteName].xml",
    useFullSuiteTitle: false,
    jenkinsMode: true,
    xrayMode: true, // if JiraKey are set correctly inside the test the XML report will contain the JiraKey value
    attachScreenshot: true, // if a test fails, the screenshot will be attached to the XML report and imported into xray
  },
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-xray-junit-reporter/plugin")(on, config, {}); // also needed
      return config;
    },
  },
});
