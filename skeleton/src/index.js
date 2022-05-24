const View = require('./ttt-view.js')
const Game = require('../ttt_node/game.js')

document.addEventListener("DOMContentLoaded", () => {
  const newgame = new Game();
  const figEl = document.getElementsByClassName("ttt")[0];
  const newView = new View(newgame, figEl);
  newView.setupBoard();
});