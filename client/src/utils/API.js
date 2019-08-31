import axios from "axios";

export default{

// Gets all herbs
getProjects: function() {
    return axios.get('/api/projects');
}

}
