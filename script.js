function Card(name, type, number) {
    this.name = name
    this.type = type,
    this.number = number
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }


let cards = [];

let deck = [];
let start_button = document.querySelector("#start_button").addEventListener("click", createGame)


let hand = [];
let player1_space = document.querySelector(".Player1")


function createGame(){
    let druhy = ["srdce", "zalud", "varlata", "zeleny"];
    let typy = ["7", "8", "9", "10", "spodek", "vrsek", "kral"]
    let cisla = [7, 8, 9, 10, 11, 12, 13]

    for (let druh = 0; druh < 4; druh ++) {
        for (let cislo = 0; cislo < 7; cislo ++) {
            let new_card = new Card(druhy[druh], cisla[cislo], typy[cislo])
            cards.push(new_card);
        }
    }


    createHand();
    let test = document.querySelector("#start_button");
    test.remove();
}


function createHand(){
    shuffle(cards);
    for (let counter = 0; counter < 4; counter ++) {
        player1_space.textContent += cards[counter].name + "_" + cards[counter].number + " ";
    }


}

//function play(){}



//createHand()
console.log(cards)