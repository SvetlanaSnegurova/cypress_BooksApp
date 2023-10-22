const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
    },
    viewportWidth: 1080,
    viewportHeight: 2340,
  },
});