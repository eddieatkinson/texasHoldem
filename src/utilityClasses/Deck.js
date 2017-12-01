// We could write a normal function, but let's go OOP...
// Deck can be used by ANY program that uses a 52 card deck!
class Deck{
	constructor(){
		this.deck = [];
	}

	createDeck(){
		// reset the deck
		this.deck = [];
		// Two loops, one for suit, one for values
		const suits = ['h', 's', 'd', 'c'];
		for(let s = 0; s < suits.length; s++){
			for(let c = 1; c <= 13; c++){
				this.deck.push(c + suits[s]);
			}
		}
	}

	shuffleDeck(){
		for(let i = 0; i < 100000; i++){
			var rand1 = Math.floor(Math.random() * 52);
			var rand2 = Math.floor(Math.random() * 52);
			var temp = this.deck[rand1];
			this.deck[rand1] = this.deck[rand2];
			this.deck[rand2] = temp;
		}
	}
}

export default Deck;