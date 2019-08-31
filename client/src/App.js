import React from 'react';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio'
import NavTabs from "./components/NavTabs"


class App extends component{
	state = {
		page: '',
		previousResults: [],
		currentResults: [],
		result: null,
		userData: null
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
					<Header
						page={this.state.page}
						updateResults={this.updateResults}
						getUserData={this.getUserData}
					/>
					<Switch>
						<Route
							exact
							path='/'
							render={props => <Home getPage={this.getPage} />}
						/>

						<Route
							exact
							path='/aboutUs'
							render={props => <AboutUs getPage={this.getPage} />}
						/>

						<Route
							path='/search'
							render={props => (
								<Search
									results={this.state.currentResults}
									getPage={this.getPage}
									getResult={this.getResult}
								/>
							)}
						/>

						<Route
							path='/result'
							render={props => (
								<Result
									getPage={this.getPage}
									result={this.state.result}
                  userData={this.state.userData}
                  checkLogIn={this.checkLogIn}
								/>
							)}
						>
							{console.log('Route for /result was loaded/hit...')}
						</Route>
						<Route component={NoMatch} />
					</Switch>
					<Footer />
				</Fragment>
			</Router>
		);
	}

}
export default App;
