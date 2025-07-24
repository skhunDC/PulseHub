function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('PulseHub');
}
