import { isTouch } from '../helpers';
import { NO_TOUCH } from '../constants';

export default function setTouch() {
  if (!isTouch) {
    document.documentElement.classList.add(NO_TOUCH);
  }
}
