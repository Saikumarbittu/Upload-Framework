const { defineConfig } = require("cypress");

module.exports = defineConfig({

  projectId: "egc8jw",

  video: true,
  reporter: 'cypress-mochawesome-reporter', //for html reports
  reporterOptions: {
    html: true,
    json: true,
    charts: true,
    overwrite: true,
    printLogsToConsole: "always",
    printLogsToFile: "always",
    outputRoot: "cypress/logs",
    outputTarget: {
      "cypress/logs/output.log": "txt",
      "cypress/reports/output.json": "json",
    },
  },
  e2e: {

    baseUrl: "https://www.naukri.com",
    pageLoadTimeout: 60000, // Set to 60 seconds
    defaultCommandTimeout: 60000, // Optional: Adjust for slow responses
    chromeWebSecurity: false,

    setupNodeEvents(on, config) {
      // Add your node event listeners here if needed

      require('cypress-mochawesome-reporter/plugin')(on); //for html reports
       require("cypress-terminal-report/src/installLogsPrinter")(on);//captures logs from the browser and Node.js process, making debugging easier. It provides detailed logs of failed tests, network requests, console errors, and more.
       on('task', {
        logMessage(message) {
          console.log(message); // This prints logs in the VS Code terminal
          return null; // Returning `null` signals success
        },
      });
      // implement node event listeners here
    },
  },
});
