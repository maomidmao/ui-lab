const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // Use the same page size as the Robot Framework exercises.
  viewportWidth: 1280,
  viewportHeight: 1600,
  // Allow page elements up to ten seconds to appear.
  defaultCommandTimeout: 10000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
