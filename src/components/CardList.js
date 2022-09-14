import React from 'react';
import Card from './card';

const ClassList = ({data}) => {
	const CardComponent = data.map((usr, index)=> {
		return <Card key={index} id={usr.id} name={usr.name} email={usr.email} />
	})
	return(
		<div className="pa2 tc mh5">
      		{CardComponent}
      </div>
      )
}


export default ClassList;
