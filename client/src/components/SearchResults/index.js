import React, { Component } from 'react';
import ProjectCard from '../ProjectCard';

class SearchResults extends Component {
	state = {
		results: []
	};
	render() {
		return (
			<div>
				<div className='container shadow round_corner p-4 border bg-light'>
					<h3 className='text-center text-md-left text-light-'>
						Web Developer Portfolio:
					</h3>
					<div className='row'>
						<div className='container card-columns'>
							{this.state.results.map(project => {
								return (
									<ProjectCard result={project} getResult={this.state.getResult} />
								);
							})}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default SearchResults;
