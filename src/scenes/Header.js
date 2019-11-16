import React from 'react';
import { Link } from 'react-router-dom';
import githubIcon from './github.svg';

import { Dot } from 'components/Dot';
import { Row, Col } from 'components/Grid';
import { Bracket } from 'components/Typography';

import classes from './Header.module.scss';
import { ABOUT } from './routes';
import { OutboundLink } from 'react-ga';

export const Header = props => {
  return (
    <Row component="header" alignCenter className={classes.header}>
      <Col>
        <h1>
          <Bracket>JS</Bracket> tl;dr
        </h1>
      </Col>
      <Col>
        <Link to={ABOUT}>About</Link>&nbsp;
        <Dot />
      </Col>
      <OutboundLink
        className={classes.githubLink}
        eventLabel="Github Repo"
        to={process.env.REACT_APP_GITHUB_REPO_LINK}
        target="_blank"
        rel="noreferrer noopener"
      >
        <img src={githubIcon} alt="" />
      </OutboundLink>
    </Row>
  );
};
