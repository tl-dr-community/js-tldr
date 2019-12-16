const urlJoin = require('url-join');

module.exports = index => {
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
      properties: {
        prototype: prototypeProperties,
        static: staticProperties,
      } = {},
      methods: { prototype: prototypeMethods, static: staticMethods } = {},
    } = domain;

    const addPrototypeName = methodName =>
      addToIndex(methodName, 'prototype', domainName, domainPath);

    const addStaticName = methodName =>
      addToIndex(methodName, null, domainName, domainPath);

    if (staticMethods && staticMethods.length) {
      staticMethods.forEach(addStaticName);
    }

    if (prototypeMethods && prototypeMethods.length) {
      prototypeMethods.forEach(addPrototypeName);
    }

    if (staticProperties && staticProperties.length) {
      staticProperties.forEach(addStaticName);
    }

    if (prototypeProperties && prototypeProperties.length) {
      prototypeProperties.forEach(addPrototypeName);
    }
  });

  return normalizedIndex;
};
