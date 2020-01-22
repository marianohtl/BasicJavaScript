/*PARTE DO CÓDIGO QUE COLOCA NO OBJETO OS ÍTENS DO HTML
import Slide from './slide.js';
const slide = new Slide('.slide', '.slide-wrapper');
console.log(slide);*/

import Slide from './slide.js';

const slide = new Slide('.slide', '.slide-wrapper');
slide.init();

slide.changeSlide(0);

console.log(slide);
// console.log(wrapper);
// console.log(dist);
