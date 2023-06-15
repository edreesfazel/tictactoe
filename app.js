var currentPlayer = "X";
var cells = document.getElementsByClassName("cell");

for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", cellClicked);
}


function cellClicked() {
    if (this.textContent === "") {
        this.textContent = currentPlayer;
        this.classList.add(currentPlayer);

        if(checkWin(currentPlayer)) {
            alert(currentPlayer + " wins!");
            resetGame();
        } 

        else if (checkDraw()) {
            alert("It's a tie!");
            resetGame();
        }
        
        else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }    
    }
}

function checkWin() {
    var winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for ( i = 0; i < winningCombinations.length; i++) {
        var combination = winningCombinations[i];
        var [a, b, c] = combination;
        if (
            cells[a].classList.contains(currentPlayer) && 
            cells[b].classList.contains(currentPlayer) && 
            cells[c].classList.contains(currentPlayer)
        ) {
            return true;
        }
    }
   
    return false;

}

function checkDraw() {
  for (i = 0 ; i < cells.length; i++) {
    if (cells[i].textContent === "") {
        return false; // there is an empty cell, game cannot be a tie
    }
  }

  return true; // all cells are filled, the game is a draw
}

function resetGame() {
    for (var i = 0; i < cells.length; i++) {
        cells[i].textContent = "";
        cells[i].classList.remove("X", "O");
    }

    currentPlayer = "X";
    resultElement.textContent = "";
}
