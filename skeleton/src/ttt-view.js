const { makeGrid } = require("../ttt_node/board");

class View {
  constructor(game, el) {}

  setupBoard() {
    let ul = document.createElement("ul");
    
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let li = document.createElement('li');
        li.setAttribute("data-pos", `${[i, j]}`);
        ul.appendChild(li);
      }
    }
    figEl.appendChild(ul)
  }

  
  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}

}

module.exports = View;
