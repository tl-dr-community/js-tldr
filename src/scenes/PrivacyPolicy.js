import React from 'react';
import { OutboundLink } from 'react-ga';
import { P, Title } from 'components/Typography';
import { BoxOverlay } from 'components/BoxOverlay/BoxOverlay';

export const PrivacyPolicy = props => {
  return (
    <BoxOverlay>
      <Title>Privacy Policy</Title>
      <P>
        We're using browser's Session Store to save the state of answered
        feedback
      </P>
      <P>
        We're using{' '}
        <OutboundLink
          to="https://marketingplatform.google.com/about/"
          rel="noreferrer noopener"
          target="_blank"
          eventLabel="Google Analytics"
          data-cy="PrivacyPolicy_gaLink"
        >
          Google Analytics
        </OutboundLink>{' '}
        to gather the usage statistics and articles feedback
      </P>
      <P>
        You can contact us via{' '}
        <OutboundLink
          to="https://twitter.com/rusinovAntonDev"
          rel="noreferrer noopener"
          title="@rusinovAntonDev"
          target="_blank"
          eventLabel="Twitter"
          data-cy="PrivacyPolicy_twitterLink"
        >
          Twitter
        </OutboundLink>
        ,{' '}
        <OutboundLink
          to="mailto:rusinovantondev@gmail.com"
          rel="noreferrer noopener"
          title="@rusinovAntonDev"
          target="_blank"
          eventLabel="email"
          data-cy="PrivacyPolicy_emailLink"
        >
          E-mail
        </OutboundLink>
      </P>
    </BoxOverlay>
  );
};
