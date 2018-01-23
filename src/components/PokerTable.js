import React, { Component } from 'react';
import Deck from '../utilityClasses/Deck';
import PokerHand from './PokerHand';
import GameButtons from './GameButtons';
import ThePot from './ThePot';
import ReadFile from '../utilityClasses/ReadFile';

var cards = new Deck();
var file = new ReadFile();
file.console();
// console.log(cards.deck);
// cards.createDeck();
// console.log(cards.deck);
// cards.shuffleDeck();
// console.log(cards.deck);

class PokerTable extends Component{
	constructor(props){
		super(props);
		this.state = {
			dealersHand: ['deck', 'deck'],
			playersHand: ['deck', 'deck'],
			communityCards: ['deck', 'deck', 'deck', 'deck', 'deck'],
			wager: 0,
			bankRoll: 1000
		}
		this.prepDeck = this.prepDeck.bind(this);
		this.draw = this.draw.bind(this);
		this.playerBet = this.playerBet.bind(this);
	}

	componentDidMount(){
		// this.prepDeck();
	}

	prepDeck(){
		cards.createDeck();
		cards.shuffleDeck();

		var card1 = cards.deck.shift();
		var card2 = cards.deck.shift();
		var card3 = cards.deck.shift();
		var card4 = cards.deck.shift();

		// console.log(cards.deck.length);

		var playersHand = [card1, card3];
		var dealersHand = [card2, card4];
		this.setState({
			playersHand: playersHand,
			dealersHand: dealersHand
		});
	}

	playerBet(amount){
		const newWager = this.state.wager + amount;
		this.setState({
			wager: newWager
		});
	}

	draw(){ // Called whenever a new community card is drawn, after betting (except for final bet).
		var communityNewHand = this.state.communityCards;
		if(communityNewHand[0] === 'deck'){
			communityNewHand = [cards.deck.shift(), cards.deck.shift(), cards.deck.shift()];
		}else{
			communityNewHand.push(cards.deck.shift());
		}
		this.setState({
			communityCards: communityNewHand
		});
	}

	render(){
		// console.log(this.state.playersHand);
		return(
			<div className="col-sm-12 the-table">
				<ThePot wager={this.state.wager} />
				<PokerHand cards={this.state.dealersHand} />
				<PokerHand cards={this.state.communityCards} />
				<PokerHand cards={this.state.playersHand} />
				<GameButtons dealFunction={this.prepDeck} betFunction={this.playerBet} />
			</div>
		);
	}
}

export default PokerTable;