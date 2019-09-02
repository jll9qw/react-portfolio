import React, { Component, Fragment } from "react";
// import { Link } from "react-router-dom";
import "./style.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <footer className="d-flex justify-content-center py-2 py-md-2 ui_gradient2- bg-light bg-white-">
          <div className="container px-0 d-flex flex-column justify-content-center py-2 bg-white- round_corner- shadow-sm-">
            <ul className="nav flex-column flex-md-row justify-content-center align-items-center px-0">
              <li className="nav-item mb-3 mb-md-0">
              <div
							
							className='navbar-brand nav-link align-self-center rounded-btn- shadow-sm- px-3 active- bg-transparent disabled border-0'
							// href="#"
							style={{ 
								color: '#43c6ac', 
								height: 50, 
								width: 100,
								backgroundSize: 'contain',
								backgroundPosition: 'center',
								backgroundRepeat: 'no-repeat'
							}}
						/>
              </li>
              <li className="nav-item mb-3 mb-md-0">
                <button className="nav-link disabled text-light- text-dark bg-transparent border-0">
                  &copy;2019 Organic Marketing and Events LLC
                </button>
              </li>
              <li className="nav-item mb-3 mb-md-0" />
              <li className="nav-item d-flex w-25- mb-3 mb-md-0 justify-content-center">
                <button className="bg-white rounded-btn my-lg-2 p-2 shadow-sm text-pinkish">
                  <i className="fab fa-twitter" />
                </button>
                <button className="bg-white rounded-btn mx-3 my-lg-2 p-2 shadow-sm text-pinkish">
                  <i className="fab fa-facebook" />
                </button>
                <button className="bg-white rounded-btn my-lg-2 p-2 shadow-sm text-pinkish">
                  <i className="fab fa-instagram" />
                </button>
              </li>
            </ul>
          </div>
        </footer>
      </Fragment>
    );
  }
}

export default Footer;
