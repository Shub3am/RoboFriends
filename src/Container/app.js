import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchField: ''
		}
	}
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(res => res.json())
		.then(usr => this.setState({robots: usr}))
	}
	Searcher = (evt) => {
		this.setState({ searchField: evt.target.value.toLowerCase() })
	}
	render() {
	const {robots, searchField} = this.state;
	const FilteredSearch = robots.filter(r => { 
	return r.name.toLowerCase().includes(searchField)
	})
	return (!robots.length) ? <h1>Loading</h1> :(
		<>
		<h1 className="tc header"> RoboFriends </h1>
		<SearchBox Searcher={this.Searcher}/>
		<Scroll><CardList data={FilteredSearch}/></Scroll>
		</>
		)
}}

export default App;