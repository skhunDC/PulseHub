function insertLinkAtRange(range, text, url, doc = document) {
  if (!range || !url) return;
  const linkText = text || url;
  const anchor = doc.createElement('a');
  anchor.href = url;
  anchor.target = '_blank';
  anchor.textContent = linkText;
  range.deleteContents();
  range.insertNode(anchor);
}

function deleteLinkAtRange(range, doc = document) {
  if (!range) return;
  let node = range.startContainer;
  if (node.nodeType === 3) node = node.parentNode;
  const anchor = node.closest('a');
  if (anchor) {
    const text = doc.createTextNode(anchor.textContent);
    anchor.parentNode.replaceChild(text, anchor);
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { insertLinkAtRange, deleteLinkAtRange };
} else {
  window.insertLinkAtRange = insertLinkAtRange;
  window.deleteLinkAtRange = deleteLinkAtRange;
}
