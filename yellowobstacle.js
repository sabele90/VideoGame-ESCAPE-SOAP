function YellowObstacles(row, column) {
    var self = this;
    this.oddY = row;
    this.oddX = column;
    this.obsCell;
  
    this.move = function () {
      if (self.oddX > 1) {
        if (self.obsCell !== undefined) {
          self.obsCell.classList.remove("obs2");
        }
        self.oddX--;
        self.obsCell = document.querySelector(
          `.row${self.oddY} .column${self.oddX}`
        );
        self.obsCell.classList.add("obs2");
      } else {
        if (self.obsCell !== undefined) {
          self.obsCell.classList.remove("obs2");
        }
        self.obsCell = document.querySelector(`.row${self.oddY} .column` + "21");
        self.obsCell.classList.add("obs2");
        self.oddX = 21;
      }
    };
  }
  
  export { YellowObstacles };