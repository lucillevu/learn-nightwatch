// tests.js
var utils = require('../utils');

module.exports = {
  '@tags': ['sampletest'],
   before: function (browser, done) {
  	server = require('../server')(done) // done is a callback that executes when the server is started
  },

  after: function () {
  	server.close()
  },

  'Open the website': function (browser) {
    utils(browser).goToSite();
  },

  'Go to site and add user and logout': function (browser) {
    utils(browser).joinNow();
    utils(browser).newTestUser();
    utils(browser).mainLogo();
    browser.pause(5000);
    utils(browser).logout();
    browser.end();
  }
};
