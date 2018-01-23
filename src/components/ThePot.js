import React from 'react';

function ThePot(props){
	return(
		<div className="col-sm-12 text-center">
			<div className="wager col-sm-2 col-sm-offset-5">
				Current wager ${props.wager}.
			</div>
		</div>
	)
}

export default ThePot;