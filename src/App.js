import React, {Component} from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';
import './App.css'

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			Searchfield: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({Searchfield : event.target.value})
	}

	componentDidMount() {
		fetch('http://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({ robots: users }));
	}

	render() {
		const filteredRobots = this.state.robots.filter(robots => {
			return robots.name.toLowerCase().includes(this.state.Searchfield.toLowerCase())
		})
		if(this.state.robots.length === 0) {
			return <h1 className='tc'>Loading</h1>
		}else{
			return (
				<div className="tc">
					<h1 className='f1'>RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange} />
					<CardList robots={filteredRobots}/>
				</div>
			);
		}
		
	}
	
}

export default App;