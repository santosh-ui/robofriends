import React from 'react';

const Card = ({name, email, id}) => {
	return(
		<div className="tc bg-light-green dib pa3 br3 shadow-5 ma2 bw2 grow">
			<img src={`https://robohash.org/${id}?200x200`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	)
}

export default Card;