const innerBoxes = document.querySelectorAll(".innerBox");
const resetButton = document.querySelector(".resetButton");
const gameStatus = document.querySelector(".gameStatus");
const numOfBoxes = innerBoxes.length;

const game = [{}];

const homePlayer = {
    name: "Home-Player",
    symbol: "X",
};

const awayPlayer = {
    name: "Away-Player",
    symbol: "O",
};

let currentPlayer = homePlayer;
const gameBoard = new Array(numOfBoxes).fill(null);

const boxTrigger = (event, index) => {
    let currentPlayerName = currentPlayer.name;
    let currentPlayerSymbol = currentPlayer.symbol;
    const input = event.target;
    const boxID = input.id;
    if (!gameBoard[boxID]) {
        input.textContent = currentPlayerSymbol;
        gameBoard[boxID] = currentPlayerSymbol;
        if (moves()) {
            endGame(currentPlayerName);
        }
        if (!gameBoard.includes(null)) {
            gameStatus.textContent = "Tie!!!";
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

const endGame = (player) => {
    gameStatus.textContent = `The Winner is ${player}`;
    innerBoxes.forEach((box) => box.removeEventListener("click", boxTrigger));
};

const tieGame = (arr) => {
    if (
        arr.every((element) => {
            element !== null;
        })
    ) {
        gameStatus.textContent = "Tie!!!";
    }
};

const handleReset = () => {
    currentPlayer = homePlayer;
    gameBoard.fill(null);
    innerBoxes.forEach((box) => {
        box.textContent = "";
    });
    innerBoxes.forEach((box) => box.addEventListener("click", boxTrigger));
};

innerBoxes.forEach((box) => box.addEventListener("click", boxTrigger));
resetButton.addEventListener("click", handleReset);
