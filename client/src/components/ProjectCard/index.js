import React from "react";

const ProjectCard = props => {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Description:</strong> {props.description}
          </li>
          <li>
            <strong>github:</strong> {props.github}
          </li>
        </ul>
      </div>
    </div>
  );
  }
export default ProjectCard;
