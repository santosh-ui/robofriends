import React, {Component} from 'react';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import {robots} from '../robots';
import ErrorBoundry from '../components/ErrorBoundry';
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
		// fetch('http://jsonplaceholder.typicode.com/users')
		// .then(response => response.json())
		// .then(users => this.setState({ robots: users }));
		this.setState({ robots:robots})
	}

	render() {
		const { robots, Searchfield } = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(Searchfield.toLowerCase())
		})

		return !robots.length ?
		<h1 className='tc'>Loading</h1> :
			(
				<div className="tc">
					<h1 className='f1'>RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange} />
					<Scroll>
						<ErrorBoundry>
							<CardList robots={filteredRobots}/>
						</ErrorBoundry>
					</Scroll>
				</div>
			);	
	}
	
}

export default App;