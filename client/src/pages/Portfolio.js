import React, { Component, Fragment } from "react";
import Main from "../components/Main";
import API from "../utils/API";
import SearchResults from "../components/SearchResults";

class Portfolio extends Component {
  state = {
    page: "searchResults",
    API
  };

  componentDidMount(){
    this.props.getPage(this.state.page);
  }

  render() {
    return (
      <Fragment>
        <Main>
          <SearchResults
            results={this.props.results}
            getResult={this.props.getResult}
          />
        </Main>
      </Fragment>
    );
  }
}

export default Portfolio;
