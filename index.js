import hamburger from './js/hamburger';
import modalWindow from './js/modalWindow';
import scrolling from './js/scrolling';


window.addEventListener('DOMContentLoaded', () => {
    //hamburger
    hamburger();

    //modal
    modalWindow();


    //scroll
    scrolling('.pageup');

});