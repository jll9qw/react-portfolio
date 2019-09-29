import React from "react";
import "./style.css";



const ProjectCard = props => {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.result.name} src={props.result.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.result.name}
          </li>
          <li>
            <strong>Description:</strong> {props.result.description}
          </li>
          <li>
            <strong>github:</strong> {props.result.github}
          </li>
        </ul>
      </div>
    </div>
  );
  }
export default ProjectCard;
