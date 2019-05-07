import isTouch from '../lib/detectTouch';
import { $HTML, NOTOUCH } from '../constants';

export default function setTouchClassName() {
  if (!isTouch()) {
    $HTML.addClass(NOTOUCH);
  };
};
