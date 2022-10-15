const innerBoxes = document.querySelectorAll(".innerBox");
const numOfBoxes = innerBoxes.length;
const O_symbol = "O";
const X_symbol = "X";
const homePlayer = X_symbol;
const awayPlayer = O_symbol;

let currentPlayer = homePlayer;
const gameBoard = new Array(numOfBoxes).fill(null);
const boxTrigger = (event, index) => {
    const input = event.target;
    const boxID = input.id;
    if (!gameBoard[boxID]) {
        input.textContent = currentPlayer;
        gameBoard[boxID] = currentPlayer;
        if (moves()) {
            endGame();
        }
        if (currentPlayer === homePlayer) {
            currentPlayer = awayPlayer;
        } else {
            currentPlayer = homePlayer;
        }
    }
};

const moves = () => {
    const winCases = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let win of winCases) {
        const current = gameBoard[win[0]];
        if (
            current &&
            current === gameBoard[win[1]] &&
            current === gameBoard[win[2]]
        ) {
            return true;
        }
    }
    return false;
};

const endGame = () => {
    console.log("win");
};

innerBoxes.forEach((box) => box.addEventListener("click", boxTrigger));
