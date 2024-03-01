const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'b5kgvc',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
