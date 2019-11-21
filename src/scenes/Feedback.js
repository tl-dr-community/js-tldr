import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';
import Button from 'components/Button';

import classes from './Feedback.module.scss';
import { Col, Grid } from 'components/Grid';
import { P } from 'components/Typography/P';

import storage from 'storage';

const useAnswered = () => {
  const location = useLocation();
  const [state, setState] = useState(false);

  useEffect(() => {
    storage.getItem(location.pathname).then(value => {
      if (value) {
        setState(value);
      }
    });
  }, [location]);

  const setAnswered = () => {
    storage.setItem(location.pathname, Date.now()).then(() => setState(true));
  };

  return [state, setAnswered];
};

export const Feedback = props => {
  const [answered, setAnswered] = useAnswered();
  const location = useLocation();

  const makeHandler = label => () => {
    ReactGA.event({
      category: 'Was it helpful?',
      action: location.pathname,
      label,
    });
    setAnswered();
  };
  const handleLike = makeHandler('Like');
  const handleDislike = makeHandler('Dislike');

  if (typeof answered === 'number') {
    return null;
  }

  return (
    <div className={classes.container}>
      {answered ? (
        <P center>Thank you! :)</P>
      ) : (
        <>
          <P center>Was it helpful?</P>
          <Grid spacing="1" justifyCenter>
            <Col>
              <Button component="a" onClick={handleDislike}>
                No
              </Button>
            </Col>
            <Col>
              <Button component="a" onClick={handleLike}>
                Yes
              </Button>
            </Col>
          </Grid>
        </>
      )}
    </div>
  );
};
