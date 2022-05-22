const cardsContainer = document.querySelector("#cardsContainer");
let fruitsImg;
let fruitsName;
let fruitsPrice;
let fruitsBtn;
let containerCardArray;

fetch("/fruits.json")
  .then(response => response.json())
  .then(data => start(data));


function start(obj) {
        for (let i=0; i<obj.fruitsArray.length; i++){
          let img = document.createElement("img");
          img.className = "fruitsImg";
          let h3 = document.createElement("h3");
          h3.className = "fruitsName";
          let p = document.createElement("p");
          p.className = "fruitsPrice";
          let btn = document.createElement("button");
          btn.className = "fruitsBtn";
          btn.innerText = "Checkout discount Click here";
          let card = document.createElement("div");
          card.className = "card";
          let containerCardArray = [img, h3, p, btn];
          containerCardArray.forEach((element) => {
            card.appendChild(element);
          });
          cardsContainer.appendChild(card);
        }
        fruitsImg = document.querySelectorAll(".fruitsImg");
        fruitsName = document.querySelectorAll(".fruitsName");
        fruitsPrice = document.querySelectorAll(".fruitsPrice");
        fruitsBtn = document.querySelectorAll(".fruitsBtn");
        let count = 0;
        obj.fruitsArray.forEach((data) => {
          for (const [key, value] of Object.entries(data)) {
            switch (key) {
              case "img":
                fruitsImg[count].src = value;
                break;
              case "name":
                fruitsName[count].innerText = value;
                break;
              case "price":
                fruitsPrice[count].innerText = value;
                break;
              default:
              "";
              break;
            }
          }
          count++;
        });
        setTimeout(() => {
            cardsContainer.style.opacity = 1;
        }, 1000);
        }
