function GreenObstacles(row, column) {
    var self = this;
    this.oddY = row;
    this.oddX = column;
    this.obsCell = document.querySelector(
        `.row${row} .column${column}`
    );

    this.move = function () {
        if (self.oddX < 21) {
            if (self.obsCell !== undefined) {
                self.obsCell.classList.remove("obs4");
            }
            self.oddX++;
            self.obsCell = document.querySelector(
                `.row${self.oddY} .column${self.oddX}`
            );
            self.obsCell.classList.add("obs4");
        } else {
            if (self.obsCell !== undefined) {
                self.obsCell.classList.remove("obs4");
            }
            self.obsCell = document.querySelector(`.row${self.oddY} .column` + "1");
            self.obsCell.classList.add("obs4");
            self.oddX = 1;
        }
    };
}

export { GreenObstacles }