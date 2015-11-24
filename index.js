var fs = require("fs");

exports.applySettings = function (hook, settings, callback) {
  if(!settings.extendedSettings) settings.extendedSettings = "credentials.json";
  try {
    // Query the entry
    stats = fs.lstatSync(settings.extendedSettings);

    // Is it a file?
    if (stats.isFile()) {
      // Yes it is
      var settingsStr = fs.readFileSync(settings.extendedSettings).toString();
      var newSettings = JSON.parse(settingsStr);
      callback(newSettings);
    }
  }
  catch (e) {
    console.warn("PLEASE CREATE A", settings.extendedSettings);
  }
}
