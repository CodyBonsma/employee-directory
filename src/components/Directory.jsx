import React, { Component } from "react";
import axios from "axios";
import style from "./directory.css";

class Directory extends Component {
  // set state to work with
  state = {
    data: [],
    filterData: [],
  };

  // trigger emplpyee data on page load
  componentDidMount() {
    this.employeeData();
  }

  // make a get request to get random employee data
  employeeData = () => {
    axios
      .get("https://randomuser.me/api/?results=80&nat=us")
      .then((response) => {
        // console.log(response.data.results)
        this.setState({
          data: response.data.results,
          filterData: response.data.results,
        });
      })
      .catch((err) => {
        if (err) throw err;
      });
  };

  // handle input search field and update state
  // this.state.filter to sort the data with the new name
  handleSearch = (event) => {
    event.preventDefault();
    // console.log(event.target.value);
    let searchName = event.target.value;
    // let newName = this.state.data.filter((name) => name.name.first === searchName);
    let newName = this.state.data.filter(
      (name) => name.name.first.indexOf(searchName) !== -1
    );
    // console.log(newName);
    this.setState({
      filterData: newName,
    });
  };

  handleSort = () => {
    console.log("clicked handle sort");
    // let sortedData
    // google how to sort an array
    let sortedData = this.state.data.sort((a, b) => {
      return a.name.first < b.name.first ? -1 : 1;
    });
    console.log(sortedData);
    this.setState({
      filterData: sortedData,
    });
  };

  // setup page to pass on to App.js
  render() {
    return (
      <>
        <div className="container-fluid">
          {" "}
          <div className="row header-row" style={style}>
            <div className="col-sm-3" />
            <div className="col-sm-6 text-center">
              <h1>Employee Directory</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-1" />
            <div className="col-sm-10 text-center">
              <input
                type="text"
                class="form-control"
                onChange={this.handleSearch}
                placeholder="Search for employee"
                aria-describedby="inputGroup-sizing-default"
              />
              <h2>This will hold the employee table rows</h2>
              <table className="table table-dark">
                <thead>
                  <tr>
                    <th scope="col">Image</th>
                    <th scope="col" onClick={this.handleSort}>
                      Name
                    </th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">Age</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.filterData.map((user) => {
                    // console.log(user);
                    return (
                      <tr>
                        <th scope="row">
                          <img src={user.picture.medium} />
                        </th>
                        <td key={user.id.value}>
                          {user.name.first + " " + user.name.last}
                        </td>
                        <td>{user.phone}</td>
                        <td>
                          <a href="">{user.email}</a>
                        </td>
                        <td>{user.dob.age}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Directory;
