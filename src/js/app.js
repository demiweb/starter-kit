import '@babel/polyfill';
import $ from 'jquery';
import sayHello from './lib/sayHello';
import setTouch from './components/setHTMLClassNames';
import setLazy from './components/setLazy';

$(() => {
  sayHello();
  setTouch();
  setLazy();
});
