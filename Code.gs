function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

function getFrames() {
  var prop = PropertiesService.getScriptProperties().getProperty('frames');
  return prop ? JSON.parse(prop) : [];
}

function saveFrames(frames) {
  PropertiesService.getScriptProperties().setProperty('frames', JSON.stringify(frames));
}

function isDevUser() {
  var allowed = ['skhun@dublincleaners.com', 'ss.sku@protonmail.com'];
  var email = Session.getActiveUser().getEmail();
  return allowed.indexOf(email) !== -1;
}
