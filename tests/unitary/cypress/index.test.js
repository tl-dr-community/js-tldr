const cypressDocsJson = require('../../e2e/cypress/fixtures/docspaths.json');
const appDocsJson = require('../../../public/docs/index.json');

test('appDocsJson and cypressDocsJson should be the same', () => {
  expect(cypressDocsJson).toEqual(appDocsJson);
});
