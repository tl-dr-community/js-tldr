import * as UK from './uk/placeholders';
import * as EN from './en/placeholders';
import * as HE from './he/placeholders';
import { LANGUAGES } from '../common/constants';

export const $l = (string, language) => {
  switch (language) {
    case LANGUAGES.EN:
      return EN[string];
    case LANGUAGES.UK:
      return UK[string];
    case LANGUAGES.HE:
      return HE[string];
    default:
      return EN[string];
  }
};
