import '@scss/main.scss'
// import $ from 'jquery';
//
// $(".header").css("background", "yellow");

// import jQuery from 'jquery'
// window.$ = window.jQuery = jQuery;

import { Header } from '@/app/header';
import { Footer } from '@/app/footer';
import webpackgif from '@img/webpack.gif';

// document.getElementById('webpack-gif').setAttribute('src', webpackgif)

console.log(`***Header******`);
let header = new Header();
let firstHeading = header.getFirstHeading();
console.log(firstHeading);

console.log(`***footer******`);
let footer = new Footer();
let footerText = footer.getFooterText();
console.log(footerText);