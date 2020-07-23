// pathname looks like /docs/uk/Map/entries
import { LANGUAGES } from './constants';
import { CHIP_VALUES } from '../scenes/Search/SearchChips';

export const getDocsMatchParams = pathname => {
  const namesOfPath = pathname.split('/');
  if (CHIP_VALUES.includes(namesOfPath[2])) {
    return {
      language: LANGUAGES.EN,
      domain: namesOfPath[2],
      method: namesOfPath[3],
    };
  }
  return {
    language: namesOfPath[2] || LANGUAGES.EN,
    domain: namesOfPath[3],
    method: namesOfPath[4],
  };
};

export const getHomeMatchParams = pathname => {
  const namesOfPath = pathname.split('/');

  return { language: namesOfPath[1] || LANGUAGES.EN };
};

export const getMatchParams = pathname => {
  const namesOfPath = pathname.split('/');

  if (namesOfPath.length > 2) {
    return getDocsMatchParams(pathname);
  }

  return getHomeMatchParams(pathname);
};
