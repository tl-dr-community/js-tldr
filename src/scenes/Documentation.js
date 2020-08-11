import React, { useEffect, useState } from 'react';
import urlJoin from 'url-join';

import Markdown from 'components/Markdown';
import { BoxOverlay } from 'components/BoxOverlay/BoxOverlay';
import { P } from 'components/Typography';
import { matchPath, useLocation } from 'react-router-dom';
import { Feedback } from './Feedback';
import { DOCS_DOMAIN, DOCS_METHOD, DOCS_DEFAULT_ROUTE } from './routes';

const DOCFILE_EXTENSION = 'md';
export const Documentation = () => {
  const location = useLocation();
  const matchedPath = matchPath(
    DOCS_DEFAULT_ROUTE + DOCS_DOMAIN + DOCS_METHOD,
    location.pathname,
  );
  const { domain, method } = matchedPath.params;

  const [isLoading, setLoading] = useState(false);
  const [md, setMd] = useState(null);
  useEffect(() => {
    setLoading(true);
    fetch(
      urlJoin(
        process.env.REACT_APP_DOCS_PATH,
        domain,
        `${method}.${DOCFILE_EXTENSION}`,
      ),
    )
      .then(rs => rs.text())
      .then(mdText => {
        setMd(mdText);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, [domain, method]);

  return (
    <BoxOverlay>
      {isLoading && <P>Loading...</P>}
      <Markdown source={md} />
      {!isLoading && <Feedback />}
    </BoxOverlay>
  );
};
