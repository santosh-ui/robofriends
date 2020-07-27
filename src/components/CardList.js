import React from 'react';
import Card from './Card';

const CardList = ({robots}) => { 
	return (
		<div>
		{
			robots.map((user, i) => {
				return (
					<Card 
					key={robots[i].id}
					name={robots[i].name} 
					email={robots[i].email} 
					id={robots[i].id } 
					/>
				);
			})
		}
		</div>
	);
}

export default CardList;