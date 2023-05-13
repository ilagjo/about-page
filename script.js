const cardsData = [
    {
      id: "left",
      imgSrc: "Portfolio.png",
      imgAlt: "Area Front-End Development",
      description: "CV e attestati, portfolio pagine web e progetti",
    },
    {
      id: "center",
      imgSrc: "digitalmkt.png",
      imgAlt: "Area Percorsi di formazione",
      description: "Percorsi di formazione oltre lo sviluppo web",
    },
    {
      id: "right",
      imgSrc: "softskills.png",
      imgAlt: "Area Competenze trasversali",
      description: "Attestati, corsi e formazione extracurricolare",
    },
  ];

  
function createCards(cardsData) {
    const container = document.querySelector(".container");
  
    const cardTemplate = (card) => `
      <div class="card" id="${card.id}" style="width: 18rem">
        <img src="${card.imgSrc}" class="card-img-top" alt="${card.imgAlt}">
        <div class="card-body">
          <p class="card-text">${card.description}</p>
        </div>
        <div class="card-footer">
          <a href="#" class="btn btn-primary">Vai</a>
        </div>
      </div>
    `;
  
    const cardsHtml = cardsData.map(cardTemplate).join("");
  
    container.innerHTML = cardsHtml;
  }
  
createCards(cardsData);
  

window.onload = function () {
    var cards = document.querySelectorAll(".card");
    for (var i = 0; i < cards.length; i++) {
      cards[i].classList.add("visible");
    }
  };
  