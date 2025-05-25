const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://pos.com.my",
    supportFile: false,
    video: false,
    screenshotOnRunFailure: true,
    viewportHeight: 1000,
    viewportWidth: 2381,
    pageLoadTimeout: 500000,
    defaultCommandTimeout: 50000,
    requestTimeout: 50000,
    responseTimeout: 50000,
    numTestsKeptInMemory: 0,
  }
});
