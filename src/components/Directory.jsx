import React, { Component } from 'react';
import axios from "axios";

class Directory extends Component {
    // set state to work with 
    state = {
        data: [],
    }

    // trigger emplpyee data on page load 
    componentDidMount() {
        this.employeeData();
    }

    // make a get request to get random employee data
    employeeData = () => {
        axios.get("https://randomuser.me/api/?results=80&nat=us").then((response) => {
            // console.log(response.data.results)

            this.setState({
                data: response.data.results
            })
        }).catch((err) => {
            if (err) throw err;
        })
    }

    // setup page to pass on to App.js 
    render() {
        return (
            <div className="container">
                <div className="row header-row">
                    <div className="col-sm-3" />
                    <div className="col-sm-6 text-center">
                        <h1>Employee Directory</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-1" />
                    <div className="col-sm-10 text-center">
                    <input type="text" class="form-control" aria-label="Default" placeholder="Search for employee" aria-describedby="inputGroup-sizing-default"/> 
                        <h2>This will hold the employee table rows</h2>
                        <table className="table table-dark">
                            <thead>
                                <tr>
                                    <th scope="col">Image</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Age</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.data.map((data) => {
                                    console.log(data);
                                    return (<tr>
                                        <th scope="row"><img src={data.picture.medium} /></th>
                                        <td>{data.name.first + " " + data.name.last}</td>
                                        <td>{data.phone}</td>
                                        <td><a href="">{data.email}</a></td>
                                        <td>{data.dob.age}</td>
                                    </tr>)
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Directory;