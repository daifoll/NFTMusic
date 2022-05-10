/* СКРИПТ ПЛАВНОЙ ПРОКРУТКИ К ЯКОРЯМ */

// Импортируем библиотеку "ScrollToSmooth"
import { ScrollToSmooth } from './scrolltosmooth.esm';

// Настриваем бибилиотеку
let smoothScroll = new ScrollToSmooth('a', {
    // options here
    duration: 400,
    offset: '-110',

});

// Инициализируем библиотеку
smoothScroll.init();