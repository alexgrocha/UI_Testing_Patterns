const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    // return require('./cypress/support/pages')(on, config)
    },
   "baseUrl": 'http://lojaebac.ebaconline.art.br'
  },
});
