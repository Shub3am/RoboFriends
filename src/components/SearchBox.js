import React from 'react';
import 'tachyons'

const SearchBox = ({Searcher}) => {
	return (
		<div className="tc">
			<input onChange={Searcher}className="tc pa2 br3" type="search" placeholder="Search Robots"/>
		</div>
		)
}

export default SearchBox;