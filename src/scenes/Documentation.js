import React, { useEffect, useState } from 'react';
import urlJoin from 'url-join';

import Markdown from 'components/Markdown';
import { BoxOverlay } from 'components/BoxOverlay/BoxOverlay';
import { P } from 'components/Typography';
import { getDocsMatchParams } from '../common/utils';
import { Feedback } from './Feedback';

const DOCFILE_EXTENSION = 'md';
export const Documentation = match => {
  const { language, domain, method } = getDocsMatchParams(
    match.location.pathname,
  );

  const [isLoading, setLoading] = useState(false);
  const [md, setMd] = useState(null);
  console.log();

  useEffect(() => {
    setLoading(true);
    fetch(
      urlJoin(
        process.env.REACT_APP_DOCS_PATH,
        language,
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
