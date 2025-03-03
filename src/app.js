import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  deck();
  document.querySelector("#dealBtn").addEventListener("click", deck)
};

  const deck = () => {
    const spades = ["\u{1F0A1}", "\u{1F0A2}", "\u{1F0A3}", "\u{1F0A4}", "\u{1F0A5}", "\u{1F0A6}", "\u{1F0A7}", "\u{1F0A8}", "\u{1F0A9}", "\u{1F0AA}", "\u{1F0AB}", "\u{1F0AD}", "\u{1F0AE}"];
    const hearts = ["\u{1F0B1}", "\u{1F0B2}", "\u{1F0B3}", "\u{1F0B4}", "\u{1F0B5}", "\u{1F0B6}", "\u{1F0B7}", "\u{1F0B8}", "\u{1F0B9}", "\u{1F0BA}", "\u{1F0BB}", "\u{1F0BD}", "\u{1F0BE}"];
    const diamonds = ["\u{1F0C1}", "\u{1F0C2}", "\u{1F0C3}", "\u{1F0C4}", "\u{1F0C5}", "\u{1F0C6}", "\u{1F0C7}", "\u{1F0C8}", "\u{1F0C9}", "\u{1F0CA}", "\u{1F0CB}", "\u{1F0CD}", "\u{1F0CE}"];
    const clubs = ["\u{1F0D1}", "\u{1F0D2}", "\u{1F0D3}", "\u{1F0D4}", "\u{1F0D5}", "\u{1F0D6}", "\u{1F0D7}", "\u{1F0D8}", "\u{1F0D9}", "\u{1F0DA}", "\u{1F0DB}", "\u{1F0DD}", "\u{1F0DE}"];
    const jokers = ["\u{1F0BF}"];
    const back = ["\u{1F0A0}"];
    
    const fullDeck = [];
    for(const suit of [spades, hearts, diamonds, clubs, jokers]){
      for(const card of suit){
        fullDeck.push(card);
      }
    }
    
    let randomCard = fullDeck[Math.floor(Math.random() *fullDeck.length)];

    const deckElement = document.querySelector(".deck");
    deckElement.innerHTML = randomCard;

    if (hearts.includes(randomCard) || diamonds.includes(randomCard)) {
      deckElement.style.color = "red";
  } else if (spades.includes(randomCard) || clubs.includes(randomCard)) {
      deckElement.style.color = "black";
  } else {
      deckElement.style.color = ["black", "red"]; 
  }

    document.querySelector(".deck").innerHTML = randomCard;

    console.log("deck");

  
}
  
