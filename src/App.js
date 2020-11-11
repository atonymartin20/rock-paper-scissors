import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './components/homepage';

class App extends React.Component {
	render() {
		return (
			<div>
				<Switch>
					<Route>
						<Homepage />
					</Route>
				</Switch>
			</div>
		);
	}
}

export default App;
