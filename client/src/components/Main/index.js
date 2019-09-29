import React, { Component, Fragment } from 'react';

import './style.css';
// import './functionality';

class Main extends Component {
	state = {};
	render() {
		return (
			<Fragment>
				<main className='d-flex flex-column bg-light py-3 main_image-'>
					{this.props.children}
				</main>
			</Fragment>
		);
	}
}

export default Main;
