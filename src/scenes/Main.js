import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { About } from './About';
import { Documentation } from './Documentation';
import Search from './Search';

import classes from './Main.module.scss';
import {
  ABOUT,
  HOME_WITH_LANGUAGE,
  DOCS,
  HOME,
  PRIVACY_POLICY,
} from './routes';
import { PrivacyPolicy } from './PrivacyPolicy';

export const Main = () => {
  return (
    <>
      <main className={classes.main}>
        <Switch>
          <Route exact path={HOME} component={Search} />
          <Route exact path={HOME_WITH_LANGUAGE} component={Search} />
          <Route path={DOCS} component={Documentation} />
          <Route path={ABOUT} component={About} />
          <Route path={PRIVACY_POLICY} component={PrivacyPolicy} />
        </Switch>
      </main>
    </>
  );
};
