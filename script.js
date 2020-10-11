const start_button = document.querySelector("#start_button");
const player1_space = document.querySelector(".Player1");
const deck_div = document.querySelector(".deck");
const player1_div = document.querySelector(".player1");
const playfield_div = document.querySelector(".playfield");


class Card {
    constructor(name, type, number) {
        this.name = name,
        this.type = type,
        this.number = number
    }
}

class Deck {
    
    constructor(){

        this.card_deck = [];
    }

    shuffle() {
        this.card_deck.sort(() => Math.random() - 0.5);
    }

    createDeck(){
        let colors = ["srdce", "zalud", "varlata", "zeleny"];
        let number = ["7", "8", "9", "10", "spodek", "vrsek", "kral"]
    
        for (let i = 0; i < 4; i ++) {
            for (let j = 0; j < 7; j ++) {
                let name = colors[i] + "_" + number[j];
                let new_card = new Card(name, colors[i], number[j])
                this.card_deck.push(new_card);
            }
        }        
    }
    dealCard(){
        return this.card_deck.pop()                
    }
}

class Player {

    constructor(name) {
        this.name = name;
        this.hand = [];
    }
}

/**
 * 
 * @param {Player} player 
 * @param {number} amount
 * @param {Deck} deck 
 */
function dealCards(deck, player, amount) {
    for (let i = 0; i < amount; i++) {
        let dealt_card = deck.dealCard();
        player.hand.push(dealt_card);
    }

}

/**
 * 
 * @param {Player} player 
 */
function renderHand(player) {
    player1_div.innerHTML = "";
    for (let card of player.hand ) {
        let card_placeholder = document.createElement("div");
        card_placeholder.classList.add("card");
        card_placeholder.textContent = card.name;
        player1_div.appendChild(card_placeholder);
    }
}

/**
 * 
 * @param {Deck} deck 
 */
function renderTopCardFromDeck(deck) {
    playfield_div.innerHTML = "";
    let card = deck.dealCard();
    topcard = card;
    let card_placeholder = document.createElement("div");
    card_placeholder.classList.add("card");
    card_placeholder.textContent = card.name;
    playfield_div.appendChild(card_placeholder);

}

/**
 * 
 * @param {Player} computer 
 */
function computerMove(computer) {
        let flag = true;
        computer.hand = computer.hand.filter(card => {
            if ((card.type === topcard.type || card.number === topcard.number) && flag) {
                topcard = card;
                flag = false;
                return false
            }
            else return true
        }
    ) 
    console.log(computer.hand);
    
}

const deck = new Deck();
let topcard = null;
const player1 = new Player("pl1");
const computer = new Player("computer");
deck.createDeck();

start_button.addEventListener("click", () => {
    deck.shuffle();
    dealCards(deck, player1, 4);
    dealCards(deck, computer, 4);
    console.log(computer.hand);
    start_button.remove();
    renderTopCardFromDeck(deck);    
    renderHand(player1);
    checker(computer);
});

deck_div.addEventListener("click", () => {
    dealCards(deck, player1, 1);
    console.log(player1.hand);
    renderHand(player1);    
})






