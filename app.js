let cardsContainer = document.querySelector("#cardsContainer");
let fruitsImg;
let fruitsName;
let fruitsPrice;
let fruitsBtn;

fetch("/fruits.json")
  .then(response => response.json())
  .then(data => start(data));


function start(data) {
  data.fruitsArray.forEach(element => {
        for (let i=0; i<element.fruitsArray.length; i++){
          let img = document.createElement("img");
          img.className = img;
          let h3 = document.createElement("h3");
          h3.className = h3;
          let p = document.createElement("p");
          p.className = h3;
          let btn = document.createElement("button");
          btn.className = btn;
          btn.innerText = "לבדיקת הנחה לחץ כאן";
          let card = document.createElement("div");
          card.className = card;
          let containerCardArray = [img, h3, p, btn];
          containerCardArray.forEach((element) => {
            card.appendChild(element);
          });
          cardsContainer.appendChild(card);
        }
        fruitsImg = document.querySelectorAll("fruitsImg");
        fruitsName = document.querySelectorAll("fruitsImg");
        fruitsPrice = document.querySelectorAll("fruitsImg");
        fruitsBtn = document.querySelectorAll("fruitsImg");
        let count = 0;
        data.fruitsArray.forEach((data) => {
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
          cardsContainer.style.opasity = 1;
        }, 500);
        }
        )}
