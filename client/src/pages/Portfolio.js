import React from "react";
import ProjectCard from "../components/ProjectCard"
import API from "../utils/API"
import Wrapper from "../components/Wrapper"

class Portfolio extends Component{

  state = {
    API
  };

  componentDidMount() {
    this.loadProjects();
  }

  loadProjects = () => {
    API.getProjects()
      .then(res => this.setState({ Projects: res.data }))
      .catch(err => console.log(err));
  };

render(){
return(
  {this.state.props.map(prop => (
    <ProjectCard
      id={prop.id}
      key={prop.id}
      name={prop.name}
      image={prop.image}
      description={prop.description}
      github={prop.github}
    />
  ))}

)
}
 
}

export default Portfolio;
