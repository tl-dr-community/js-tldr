import urlJoin from 'url-join';

export const normalizeDocsIndex = index => {
  const normalizedIndex = [];
  const { domains } = index;
  const addToIndex = (methodName, methodType, domainName, domainPath) => {
    const searchString = [domainName, methodType, methodName]
      .filter(Boolean)
      .join('.');
    const methodDocFilePath = urlJoin(domainPath, methodName);

    normalizedIndex.push({
      category: 'methods',
      name: methodName,
      path: methodDocFilePath,
      searchString,
    });
  };

  domains.forEach(domain => {
    const {
      name: domainName,
      path: domainPath,
      methods: { prototype, static: staticMethods },
    } = domain;

    staticMethods.forEach(methodName =>
      addToIndex(methodName, null, domainName, domainPath),
    );
    prototype.forEach(methodName =>
      addToIndex(methodName, 'prototype', domainName, domainPath),
    );
  });

  return normalizedIndex;
};
