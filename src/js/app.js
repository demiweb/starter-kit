import sayHello from './lib/sayHello';
import { setTouch } from './components/setHTMLClassNames';
import setLazy from './components/setLazy';


$(function() {
  sayHello();
  setTouch();
  setLazy();
});
