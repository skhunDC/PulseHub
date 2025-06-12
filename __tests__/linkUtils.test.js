const {JSDOM} = require('jsdom');
const {insertLinkAtRange, deleteLinkAtRange} = require('../linkUtils');

test('insertLinkAtRange adds hyperlink', () => {
  const dom = new JSDOM('<div id="d" contenteditable="true">hello world</div>');
  const doc = dom.window.document;
  const div = doc.getElementById('d');
  const range = doc.createRange();
  const textNode = div.firstChild;
  range.setStart(textNode, 6);
  range.setEnd(textNode, 11);
  insertLinkAtRange(range, 'Google', 'https://google.com', doc);
  expect(div.innerHTML).toBe('hello <a href="https://google.com" target="_blank">Google</a>');
});

test('deleteLinkAtRange removes hyperlink', () => {
  const dom = new JSDOM('<div id="d" contenteditable="true">hello <a href="https://google.com" target="_blank">Google</a></div>');
  const doc = dom.window.document;
  const anchor = doc.querySelector('a');
  const range = doc.createRange();
  range.setStart(anchor.firstChild, 0);
  range.setEnd(anchor.firstChild, anchor.firstChild.textContent.length);
  deleteLinkAtRange(range, doc);
  expect(doc.getElementById('d').innerHTML).toBe('hello Google');
});
