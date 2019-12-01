import React from 'react';
import { OutboundLink } from 'react-ga';
import { Link } from 'react-router-dom';

import { BoxOverlay } from 'components/BoxOverlay/BoxOverlay';
import { Title } from 'components/Typography/Title';
import { P } from 'components/Typography/P';
import { Bracket } from 'components/Typography';

import { PRIVACY_POLICY } from './routes';
import patronsLabelImg from './patrons-label.png';

import classes from './About.module.scss';
import { Patron } from './Patron';

export const About = () => {
  return (
    <BoxOverlay>
      <Title>
        <strong>
          <Bracket>JS</Bracket> tl;dr
        </strong>{' '}
        - zen-mode javascript documentation
      </Title>
      <P>
        As a team of{' '}
        <strong>
          <Bracket>JS</Bracket> tl;dr
        </strong>{' '}
        tool, our goal is to provide info on language essentials in a noiseless,
        zen-mode manner, so you can focus on what matters - build great stuff.
      </P>

      <P>
        We're inspired by such projects as the{' '}
        <OutboundLink
          to="https://tldr.sh/"
          rel="noreferrer noopener"
          target="_blank"
          eventLabel="tldr"
          data-cy="About_tldrLink"
        >
          tldr
        </OutboundLink>{' '}
        and the <b>MDN</b> on how they collect and introduce information in a
        human-readable manner.
        <br />
        We do use MDN documentation as a base for our texts under{' '}
        <strong>CC-BY-SA 2.5 license</strong>. See more details{' '}
        <OutboundLink
          to="https://developer.mozilla.org/en-US/docs/MDN/About#Copyrights_and_licenses"
          rel="noreferrer noopener"
          target="_blank"
          eventLabel="MDN license"
          data-cy="About_mdnlicencesdocLink"
        >
          here
        </OutboundLink>
        .
      </P>

      <P>
        <strong>
          <Bracket>JS</Bracket> tl;dr
        </strong>{' '}
        tool is free and AD-less forever. It's also an{' '}
        <OutboundLink
          to={process.env.REACT_APP_GITHUB_REPO_LINK}
          rel="noreferrer noopener"
          target="_blank"
          eventLabel="Github Repo"
          data-cy="About_githubLink"
        >
          open-source
        </OutboundLink>{' '}
        ! You can give it back to the community by contributing to docs, web app
        or become a patrons so that you cover all our time and material
        expenses.
      </P>

      <Title center>
        <img
          className={classes.patronsImg}
          src={patronsLabelImg}
          alt="Our Patrons"
        />
      </Title>
      <P center>
        <Patron
          name="Blazo"
          picture="https://comicvine1.cbsistatic.com/uploads/original/3/39857/1092291-ed05.jpg"
          link="https://zunzar.live/"
        ></Patron>
      </P>
      <P>
        We're happy to recognize our patrons!{' '}
        <OutboundLink
          to="https://www.patreon.com/join/jstldr?"
          eventLabel="Become a patreon"
          data-cy="About_patreonLink"
        >
          Become a patron
        </OutboundLink>{' '}
        and we'll add info about you here.{' '}
      </P>
      <P></P>
      <P>
        Read our story in the{' '}
        <OutboundLink
          to="https://medium.com/@rusinovantondev/js-tl-dr-zen-mode-web-docs-for-javascript-developers-cf45e0143a09"
          target="_blank"
          rel="noreferrer noopener"
          eventLabel="Medium"
          data-cy="About_mediumLink"
        >
          Medium article
        </OutboundLink>
      </P>
      <P>
        <Link to={PRIVACY_POLICY} data-cy="About_privacypolicyLink">Privacy Policy</Link>
      </P>
    </BoxOverlay>
  );
};
