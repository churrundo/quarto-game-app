const pieces = {
  puer: {
    name: "Puer",
    attributes: {
      fire: "active",
      air: "active",
      water: "passive",
      earth: "active",
    },
    inPlay: true,
  },
  amissio: {
    name: "Amissio",
    attributes: {
      fire: "active",
      air: "passive",
      water: "active",
      earth: "passive",
    },
    inPlay: true,
  },
  albus: {
    name: "Albus",
    attributes: {
      fire: "passive",
      air: "passive",
      water: "active",
      earth: "passive",
    },
    inPlay: true,
  },
  populus: {
    name: "Populus",
    attributes: {
      fire: "passive",
      air: "passive",
      water: "passive",
      earth: "passive",
    },
    inPlay: true,
  },
  fortunaMajor: {
    name: "Fortuna Major",
    attributes: {
      fire: "passive",
      air: "passive",
      water: "active",
      earth: "active",
    },
    inPlay: true,
  },
  conjunctio: {
    name: "Conjunctio",
    attributes: {
      fire: "passive",
      air: "active",
      water: "active",
      earth: "passive",
    },
    inPlay: true,
  },
  puella: {
    name: "Puella",
    attributes: {
      fire: "active",
      air: "passive",
      water: "active",
      earth: "active",
    },
    inPlay: true,
  },
  rubeus: {
    name: "Rubeus",
    attributes: {
      fire: "passive",
      air: "active",
      water: "passive",
      earth: "passive",
    },
    inPlay: true,
  },
  acquisitio: {
    name: "Acquisitio",
    attributes: {
      fire: "passive",
      air: "active",
      water: "passive",
      earth: "active",
    },
    inPlay: true,
  },
  carcer: {
    name: "Carcer",
    attributes: {
      fire: "active",
      air: "passive",
      water: "passive",
      earth: "active",
    },
    inPlay: true,
  },
  tristitia: {
    name: "Tristitia",
    attributes: {
      fire: "passive",
      air: "passive",
      water: "passive",
      earth: "active",
    },
    inPlay: true,
  },
  laetitia: {
    name: "Laetitia",
    attributes: {
      fire: "active",
      air: "passive",
      water: "passive",
      earth: "passive",
    },
    inPlay: true,
  },
  caudaDraconis: {
    name: "Cauda Draconis",
    attributes: {
      fire: "active",
      air: "active",
      water: "active",
      earth: "passive",
    },
    inPlay: true,
  },
  caputDraconis: {
    name: "Caput Draconis",
    attributes: {
      fire: "pasive",
      air: "active",
      water: "active",
      earth: "active",
    },
    inPlay: true,
  },
  fortunaMinor: {
    name: "Fortuna Minor",
    attributes: {
      fire: "active",
      air: "active",
      water: "passive",
      earth: "passive",
    },
    inPlay: true,
  },
  via: {
    name: "Via",
    attributes: {
      fire: "active",
      air: "active",
      water: "active",
      earth: "active",
    },
    inPlay: true,
  },
};

function renderPieces() {
  const pieceContainer = document.getElementById("piece-container");
  pieceContainer.innerHTML = "";
  for (let key in pieces) {
    let piece = pieces[key];
    if (piece.inPlay) {
      let pieceElement = document.createElement("div");
      pieceElement.classList.add("piece");
      pieceElement.innerHTML = piece.name;
      pieceElement.addEventListener("click", function () {
        selectPiece(key);
      });
      pieceContainer.appendChild(pieceElement);
    }
  }
}

let selectedPiece = null;
function selectPiece(pieceKey) {
    selectPiece = pieceKey;
    pieces[pieceKey].inPlay = false;
    renderPieces();
}

renderPieces();
console.log(pieces);
