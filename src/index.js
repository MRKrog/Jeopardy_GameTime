// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

// Tell webpack to use a CSS file
import './css/base.css';

//  Tell webpack to use an image (link to it in index.html)
import './images/turing-logo.png';

import Game from './Game.js';

import Box from './Box.js'

// Instantiate Game

// don't have to declare every import here, per example game can house import player.js


const box = new Box();

box.increaseHeight(100);


console.log('This is the JavaScript entry file - your code begins here.');
