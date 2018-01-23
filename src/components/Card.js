import React from 'react';

function Card(props){
	const theCard = `/cards/${props.card}.png`;
	return(
		<div className='col-sm-2 card'>
			<img src={theCard} alt={props.card} />
		</div>
	);
}

export default Card;