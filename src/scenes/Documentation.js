import React, { useEffect, useState } from 'react';
import urlJoin from 'url-join';

import Markdown from 'components/Markdown';
import { Feedback } from './Feedback';
import { BoxOverlay } from 'components/BoxOverlay/BoxOverlay';

const DOCFILE_EXTENSION = 'md';
export const Documentation = ({ match: { params } }) => {
  const { domain, method } = params;
  const [md, setMd] = useState(null);
  useEffect(() => {
    fetch(
      urlJoin(
        process.env.REACT_APP_DOCS_PATH,
        domain,
        `${method}.${DOCFILE_EXTENSION}`,
      ),
    )
      .then(rs => rs.text())
      .then(mdText => setMd(mdText));
  });

  return (
    <BoxOverlay>
      <Markdown source={md} />
      <Feedback />
    </BoxOverlay>
  );
};
