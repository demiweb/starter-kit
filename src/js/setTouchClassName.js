import isTouch from './lib/detectTouch.js';
import { $HTML, NOTOUCH } from './constants.js';

export default function setTouchClassName() {
  if (!isTouch()) {
    $HTML.addClass(NOTOUCH);
  };
};
