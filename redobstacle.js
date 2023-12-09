function RedObstacles(row, column) {
    var self = this;
    this.oddY = row;
    this.oddX = column;
    this.obsCell;
  
    this.move = function () {
      if (self.oddX < 21) {
        if (self.obsCell !== undefined) {
          self.obsCell.classList.remove("obs1");
        }
        self.oddX++;
        self.obsCell = document.querySelector(
          `.row${self.oddY} .column${self.oddX}`
        );
        self.obsCell.classList.add("obs1");
      } else {
        if (self.obsCell !== undefined) {
          self.obsCell.classList.remove("obs1");
        }
        self.obsCell = document.querySelector(`.row${self.oddY} .column` + "1");
        self.obsCell.classList.add("obs1");
        self.oddX = 1;
      }
    };
  }
  
  export { RedObstacles };