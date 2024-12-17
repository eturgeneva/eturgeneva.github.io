/* secret-messages.js */
import { toggleHiddenElement, changeToFunkyColor } from './dom-functions.js';

// Import as default:
// import domFunctions from '../modules/dom-functions.js';
// or:
// import { default as domFunctions } from '../modules/dom-functions.js';

// const { toggleHiddenElement, changeToFunkyColor } = domFunctions;
//
const buttonElement = document.getElementById('secret-button');
const pElement = document.getElementById('secret-p');

buttonElement.addEventListener('click', () => {
  toggleHiddenElement(pElement);
  changeToFunkyColor(buttonElement);
});