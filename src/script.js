const pieces = {
  puer: {
    name: "Puer",
    attributes: {
      fire: "active",
      air: "active",
      water: "passive",
      earth: "active",
    },
    image: "../styles/figures/puer.png",
    playable: true,
    isSelected: false,
    isOnBoard: false,
  },
  amissio: {
    name: "Amissio",
    attributes: {
      fire: "active",
      air: "passive",
      water: "active",
      earth: "passive",
    },
    image: "../styles/figures/amissio.png",
    playable: true,
    isSelected: false,
    isOnBoard: false,
  },
  albus: {
    name: "Albus",
    attributes: {
      fire: "passive",
      air: "passive",
      water: "active",
      earth: "passive",
    },
    image: "../styles/figures/albus.png",
    playable: true,
    isSelected: false,
    isOnBoard: false,
  },
  populus: {
    name: "Populus",
    attributes: {
      fire: "passive",
      air: "passive",
      water: "passive",
      earth: "passive",
    },
    image: "../styles/figures/populus.png",
    playable: true,
    isSelected: false,
    isOnBoard: false,
  },
  fortunaMajor: {
    name: "Fortuna Major",
    attributes: {
      fire: "passive",
      air: "passive",
      water: "active",
      earth: "active",
    },
    image: "../styles/figures/fortuna-major.png",
    playable: true,
    isSelected: false,
    isOnBoard: false,
  },
  conjunctio: {
    name: "Conjunctio",
    attributes: {
      fire: "passive",
      air: "active",
      water: "active",
      earth: "passive",
    },
    image: "../styles/figures/conjunctio.png",
    playable: true,
    isSelected: false,
    isOnBoard: false,
  },
  puella: {
    name: "Puella",
    attributes: {
      fire: "active",
      air: "passive",
      water: "active",
      earth: "active",
    },
    image: "../styles/figures/puella.png",
    playable: true,
    isSelected: false,
    isOnBoard: false,
  },
  rubeus: {
    name: "Rubeus",
    attributes: {
      fire: "passive",
      air: "active",
      water: "passive",
      earth: "passive",
    },
    image: "../styles/figures/rubeus.png",
    playable: true,
    isSelected: false,
    isOnBoard: false,
  },
  acquisitio: {
    name: "Acquisitio",
    attributes: {
      fire: "passive",
      air: "active",
      water: "passive",
      earth: "active",
    },
    image: "../styles/figures/acquisitio.png",
    playable: true,
    isSelected: false,
    isOnBoard: false,
  },
  carcer: {
    name: "Carcer",
    attributes: {
      fire: "active",
      air: "passive",
      water: "passive",
      earth: "active",
    },
    image: "../styles/figures/carcer.png",
    playable: true,
    isSelected: false,
    isOnBoard: false,
  },
  tristitia: {
    name: "Tristitia",
    attributes: {
      fire: "passive",
      air: "passive",
      water: "passive",
      earth: "active",
    },
    image: "../styles/figures/tristitia.png",
    playable: true,
    isSelected: false,
    isOnBoard: false,
  },
  laetitia: {
    name: "Laetitia",
    attributes: {
      fire: "active",
      air: "passive",
      water: "passive",
      earth: "passive",
    },
    image: "../styles/figures/laetitia.png",
    playable: true,
    isSelected: false,
    isOnBoard: false,
  },
  caudaDraconis: {
    name: "Cauda Draconis",
    attributes: {
      fire: "active",
      air: "active",
      water: "active",
      earth: "passive",
    },
    image: "../styles/figures/cauda-draconis.png",
    playable: true,
    isSelected: false,
    isOnBoard: false,
  },
  caputDraconis: {
    name: "Caput Draconis",
    attributes: {
      fire: "passive",
      air: "active",
      water: "active",
      earth: "active",
    },
    image: "../styles/figures/caput-draconis.png",
    playable: true,
    isSelected: false,
    isOnBoard: false,
  },
  fortunaMinor: {
    name: "Fortuna Minor",
    attributes: {
      fire: "active",
      air: "active",
      water: "passive",
      earth: "passive",
    },
    image: "../styles/figures/fortuna-minor.png",
    playable: true,
    isSelected: false,
    isOnBoard: false,
  },
  via: {
    name: "Via",
    attributes: {
      fire: "active",
      air: "active",
      water: "active",
      earth: "active",
    },
    image: "../styles/figures/via.png",
    playable: true,
    isSelected: false,
    isOnBoard: false,
  },
};

document.addEventListener("DOMContentLoaded", (event) => {
  const board = [
    [
      document.getElementById("cell-0-0"),
      document.getElementById("cell-1-0"),
      document.getElementById("cell-2-0"),
      document.getElementById("cell-3-0"),
    ],
    [
      document.getElementById("cell-0-1"),
      document.getElementById("cell-1-1"),
      document.getElementById("cell-2-1"),
      document.getElementById("cell-3-1"),
    ],
    [
      document.getElementById("cell-0-2"),
      document.getElementById("cell-1-2"),
      document.getElementById("cell-2-2"),
      document.getElementById("cell-3-2"),
    ],
    [
      document.getElementById("cell-0-3"),
      document.getElementById("cell-1-3"),
      document.getElementById("cell-2-3"),
      document.getElementById("cell-3-3"),
    ],
  ];

  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      board[row][col].addEventListener("click", () => {
        placePieceOnBoard(board[row][col], row, col);
      });
    }
  }
});
let boardState = [
  [null, null, null, null],
  [null, null, null, null],
  [null, null, null, null],
  [null, null, null, null],
];

function renderPieces() {
  const pieceContainer = document.getElementById("piece-container");
  pieceContainer.innerHTML = "";
  for (let key in pieces) {
    let piece = pieces[key];
    if ((piece.playable || piece.isSelected) && !piece.isOnBoard) {
      let pieceElement = document.createElement("div");
      pieceElement.classList.add("piece");
      if (piece.isSelected) {
        pieceElement.classList.add("selected");
      }
      pieceElement.innerHTML = `
      <img src="${piece.image}" alt="${piece.name}">`;
      pieceElement.addEventListener("click", function () {
        const previouslySelectedPiece = document.querySelector(".selected");
        if (previouslySelectedPiece) {
          previouslySelectedPiece.classList.remove("selected");
        }
        selectPiece(key);
      });
      pieceContainer.appendChild(pieceElement);
    }
  }
  console.log(selectedPiece);
}

let selectedPiece = null;
function selectPiece(pieceKey) {
  if (selectedPiece) {
    pieces[selectedPiece].isSelected = false;
  }
  selectedPiece = pieceKey;
  pieces[pieceKey].isSelected = true;
  renderPieces();
}

renderPieces();

let currentPlayer = "Player1";

function placePieceOnBoard(cell, row, col) {
  if (cell.innerHTML == "" && selectedPiece != null) {
    let pieceElement = document.createElement("img");
    pieceElement.src = pieces[selectedPiece].image;
    pieceElement.alt = pieces[selectedPiece.name];
    cell.appendChild(pieceElement);
    pieces[selectedPiece].playable = false;
    pieces[selectedPiece].isOnBoard = true;
    boardState[row][col] = selectedPiece;
    updateLines(row, col, selectedPiece); 
    selectedPiece = null;
    renderPieces();
    switchPlayer();
    if (checkForWin()){
      console.log("Player " + currentPlayer + " has won!");
    }else console.log(boardState)
  }
}

function switchPlayer() {
  currentPlayer = currentPlayer === "Player1" ? "Player2" : "Player1";
  console.log(currentPlayer + "'s turn");
}

const lines = {
  rows: {},
  columns: {},
  diagonals: {},
};

for (let i = 0; i < 4; i++) {
  lines.rows[i] = [null, null, null, null];
  lines.columns[i] = [null, null, null, null];
}

lines.diagonals[0] = [null, null, null, null];
lines.diagonals[1] = [null, null, null, null];

function updateLines(row, col, pieceKey) {
  lines.rows[row][col] = pieceKey;
  lines.columns[col][row] = pieceKey;

  if (row === col) {
    lines.diagonals[0][row] = pieceKey;
  }
  if (row + col === 3) {
    lines.diagonals[1][row] = pieceKey;
  }
}

function checkForWin() {
  const lineTypes = ['rows', 'columns', 'diagonals'];

  for (let lineType of lineTypes) {
    for (let index in lines[lineType]) {
      let line = lines[lineType][index];
      if (line.length < 4) continue;
      if (checkForCommonAttribute(line)) {
        return true;
      }
    }
  }
  return false;
}

function checkForCommonAttribute(line) {
  const attributes = ["fire", "air", "water", "earth"];
  for (let attribute of attributes) {
    const attributeValues = line.map(pieceKey => pieces[pieceKey]?.attributes[attribute]);
    if (
      attributeValues.every((value) => value === "active") ||
      attributeValues.every((value) => value === "passive")
    ) {
      return true;
    }
  }
}

//To do:
// -Winning condition
// -End of Game
// -Error Handling
