import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio'
import NavTabs from "./components/NavTabs"
import Footer from "./components/Footer"


class App extends Component{
	state = {
		page: ''
  };
  // set state and work on routes for pages 
  // 

	getPage = currentPage => {
		this.setState({ page: currentPage });
	};

	render() {
		return (
			<Router>
				<Fragment>
					<NavTabs
						page={this.state.page}
					/>
					<Switch>
						<Route
							exact
							path='/'
							render={props => <About getPage={this.getPage} />}
						/>

						<Route
							exact
							path='/contact'
							render={props => <Contact getPage={this.getPage} />}
						/>

						<Route
							path='/portfolio'
							render={props => (
								<Portfolio
									results={this.state.currentResults}
									getPage={this.getPage}
								/>
							)}
						/>
					</Switch>
					<Footer />
				</Fragment>
			</Router>
		);
	}

}
export default App;
