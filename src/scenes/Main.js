import React from 'react';
import { Route, Routes } from 'react-router';
import Search from './Search';
import { About } from './About';
import { Documentation } from './Documentation';
import { PrivacyPolicy } from './PrivacyPolicy';
import classes from './Main.module.scss';
import {
  ABOUT,
  HOME,
  PRIVACY_POLICY,
  DOCS_DEFAULT_ROUTE,
  DOCS_DOMAIN,
  DOCS_METHOD,
} from './routes';

export const Main = () => {
  return (
    <>
      <main className={classes.main}>
        <Routes>
          <Route exact path={HOME} element={<Search />} />
          <Route path={ABOUT} exact element={<About />} />
          <Route path={DOCS_DEFAULT_ROUTE}>
            <Route path={DOCS_DOMAIN}>
              <Route path={DOCS_METHOD} element={<Documentation />} />
            </Route>
          </Route>
          <Route path={PRIVACY_POLICY} element={<PrivacyPolicy />} />
        </Routes>
      </main>
    </>
  );
};
