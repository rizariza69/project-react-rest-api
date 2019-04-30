import React from "react";
import axios from "axios";

const API_STRING = `https://api.github.com/`;
export class Github extends React.Component {
  state = {
    persons: [],
    showAll: false
  };

  componentDidMount() {
    axios.get(API_STRING).then(res => {
      const persons = res.data;

      this.setState({ persons });
      console.log(persons);
    });
  }

  handleShowAll = () => {
    this.setState({ showAll: true });
  };

  render() {
    return <div />;
  }
}
