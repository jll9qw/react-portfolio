import axios from 'axios';

export default {
	getProjects: function() {
		return axios.get('/api/projects');
	},
	// Gets the project with the given id
	getProject: function(id) {
		return axios.get('/api/Projects/' + id);
	},
	// Gets the Projects based on search term
	getProjectsByQuery: query => {
		return axios.get('/api/Projects/search/' + query);
	},
	// Deletes the Project with the given id
	deleteProject: function(id) {
		return axios.delete('/api/Projects/' + id);
	},
	// Saves a Project to the database
	saveProject: function(projectData) {
		return axios.post('/api/projects', projectData);
	}
};
