import React from "react";
import axios from "axios";

const API_STRING = `https://jsonplaceholder.typicode.com/users`;

export class GetAll extends React.Component {
  state = {
    persons: [],
    showAll: false
  };

  componentDidMount() {}

  handleShowAll = () => {
    axios.get(API_STRING).then(res => {
      const persons = res.data;

      this.setState({ persons });
      // console.log(persons);
    });
    this.setState({ showAll: true });
  };

  render() {
    return (
      <div class="container">
        <button onClick={this.handleShowAll}>Show All</button>
        <table>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
          {this.state.showAll &&
            this.state.persons.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.website}</td>
                </tr>
              );
            })}
        </table>
      </div>
    );
  }
}
