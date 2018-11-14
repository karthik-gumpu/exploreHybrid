cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-fetch.FetchPlugin",
    "file": "plugins/cordova-plugin-fetch/www/fetch.js",
    "pluginId": "cordova-plugin-fetch",
    "clobbers": [
      "cordovaFetch"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-fetch": "0.1.0",
  "cordova-plugin-whitelist": "1.3.3"
};
// BOTTOM OF METADATA
});