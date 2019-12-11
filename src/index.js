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

// function renderPortfolioItems() {
//     for (let i = 1; i<=18; i++) {
//         const getFlow = document.querySelector(".flow");
//
//         const img = document.createElement("img");
//         img.src= `assets/images/portfolio/photo${i}.png`;
//         img.alt="example";
//
//         const flowItem = document.createElement("div");
//         flowItem.setAttribute('class', 'flow__item');
//
//         const flowItemHover = document.createElement("div");
//         flowItemHover.setAttribute('class', 'flow__item_hover');
//
//         getFlow.appendChild(flowItem);
//         flowItem.appendChild(img);
//         flowItem.appendChild(flowItemHover);
//
//         const flowItemHoverActions = document.createElement("div");
//         flowItemHoverActions.setAttribute('class', 'flow__item_hover-actions');
//
//         flowItemHover.appendChild(flowItemHoverActions);
//
//         const zoom = document.createElement("div");
//         zoom.setAttribute('class', 'zoom');
//
//         const actionsPanel = document.createElement("div");
//         actionsPanel.setAttribute('class', 'flow__item_hover-actions-panel');
//
//         flowItemHoverActions.appendChild(zoom);
//         flowItemHoverActions.appendChild(actionsPanel);
//
//         const zoomIcon = document.createElement("img");
//         zoomIcon.src= "assets/images/portfolio/actions/search.svg";
//         zoomIcon.alt= "zoom";
//
//         zoom.appendChild(zoomIcon)
//     }
// }


renderPortfolioItems();