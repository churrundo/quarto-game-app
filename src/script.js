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
    image: "../styles/figures/amissio.png",
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
    image: "../styles/figures/albus.png",
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
    image: "../styles/figures/populus.png",
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
    image: "../styles/figures/fortuna-major.png",
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
    image: "../styles/figures/conjunctio.png",
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
    image: "../styles/figures/puella.png",
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
    image: "../styles/figures/rubeus.png",
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
    image: "../styles/figures/acquisitio.png",
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
    image: "../styles/figures/carcer.png",
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
    image: "../styles/figures/tristitia.png",
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
    image: "../styles/figures/laetitia.png",
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
    image: "../styles/figures/cauda-draconis.png",
    inPlay: true,
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
    image: "../styles/figures/fortuna-minor.png",
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
    image: "../styles/figures/via.png",
    inPlay: true,
  },
};

let img = new Image();
img.src = "../styles/geomantic-figures.png";

img.onload = () => {
  ctx.drawImage(img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
};

function renderPieces() {
  const pieceContainer = document.getElementById("piece-container");
  pieceContainer.innerHTML = "";
  for (let key in pieces) {
    let piece = pieces[key];
    if (piece.inPlay) {
      let pieceElement = document.createElement("div");
      pieceElement.classList.add("piece");
      pieceElement.innerHTML = `
      <img src="${piece.image}" alt="${piece.name}">
      <div class="piece-name">${piece.name}</div>`;
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
