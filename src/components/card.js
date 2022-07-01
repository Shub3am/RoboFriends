import React from "react";

const Card = ({name, email, id}) => {
	return( <div className="bg-light-blue fl pa2 ma2 tc">
		<div> 
		<img src={`https://robohash.org/${id}`} />
		</div>
		<div>
		<h1>{name}</h1>
		<p>{email}</p></div>
		</div>)
}

export default Card;