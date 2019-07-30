import isTouch from '../lib/detectTouch';
import { NO_TOUCH } from '../constants';

export function setTouch() {
  if (!isTouch()) {
    document.documentElement.classList.add(NO_TOUCH);
  };
};
