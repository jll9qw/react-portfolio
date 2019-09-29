import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio'
import NavTabs from "./components/NavTabs"
import Footer from "./components/Footer"
import API from "./utils/API";

class App extends Component{
	state = {
		page: '',
result:null,
currentResults: [],

  };
  // set state and work on routes for pages 
  // 
  loadProjects = () => {
	API.getProjects()
	  .then(res => this.setState({ projects: res.data }))
	  .catch(err => console.log(err));
  };
  getResult = data => {
	this.setState({ result: data });
};

  

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
								loadProjects={this.state.loadProjects}
								getPage={this.getPage}
								getResult={this.getResult}
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
