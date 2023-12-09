function PinkObstacles(row, column) {
    var self = this;
    this.oddY = row;
    this.oddX = column;
    this.obsCell;
  
    this.move = function () {
      if (self.oddX > 1) {
        if (self.obsCell !== undefined) {
          self.obsCell.classList.remove("obs3");
        }
        self.oddX--;
        self.obsCell = document.querySelector(
          `.row${self.oddY} .column${self.oddX}`
        );
        self.obsCell.classList.add("obs3");
      } else {
        if (self.obsCell !== undefined) {
          self.obsCell.classList.remove("obs3");
        }
        self.obsCell = document.querySelector(`.row${self.oddY} .column` + "21");
        self.obsCell.classList.add("obs3");
        self.oddX = 21;
      }
    };
  }

export { PinkObstacles }