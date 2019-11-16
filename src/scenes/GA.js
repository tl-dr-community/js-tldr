import ReactGA from 'react-ga';
import { useLocation } from 'react-router-dom';

ReactGA.initialize('UA-133781244-3', {
  debug: process.env.REACT_APP_DEBUG_GA === 'true',
});

export const GA = () => {
  const { pathname, search } = useLocation();
  ReactGA.pageview(pathname + search);

  return null;
};
