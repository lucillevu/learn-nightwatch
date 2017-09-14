var conf = require('../../nightwatch.conf.js');

module.exports = {
   before: function (browser, done) {
  	server = require('../server')(done) // done is a callback that executes when the server is started
  },

  after: function () {
  	server.close()
  },

  'Demo test GitHub': function (browser) {
    browser
      .url('http://www.github.com/dwyl')   // visit the url
      .waitForElementVisible('body'); // wait for the body to be rendered
      // check if we are seeing the Mobile Version of GitHub
      browser.element('css selector', '.switch-to-desktop', function(result) {
        if(result.status != -1) { //Element exists, do something
          browser.click('.switch-to-desktop')
          .waitForElementVisible('body'); // wait for the body to be rendered
        }
      });
    // part two:
    browser
      .assert.containsText('body', 'dwyl.io') // assert contains
      .saveScreenshot(conf.imgpath(browser) + 'dwyl.png')
      .end();
    }
  };
