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
