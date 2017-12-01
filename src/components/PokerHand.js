import React from 'react';
import Card from './Card'

function PokerHand(props){
	var hand = [];
	props.cards.map((card, index)=>{
		hand.push(<Card key={index} card={card} />);
		return null;
	});
	return(
		<div className="col-sm-12">
			{hand}
		</div>
	)
}
export default PokerHand;