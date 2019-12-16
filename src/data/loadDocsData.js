export const loadDocsData = () =>
  fetch('/docs/search-index.json', {
    credentials: 'same-origin',
  }).then(r => r.json());
