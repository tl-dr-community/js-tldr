import { getHomeMatchParams } from '../common/utils';

export const loadDocsData = () => {
  const { language } = getHomeMatchParams(window.location.pathname);

  return fetch(`/docs/${language}/search-index.json`, {
    credentials: 'same-origin',
  }).then(r => r.json());
};
