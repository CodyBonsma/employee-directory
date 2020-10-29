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
            // console.log(response.data.results[0].name.first, response.data.results[0].name.last);
            this.setState({
                // firstName: response.data.results[0].name.first,
                // lastName: response.data.results[0].name.last,
                // phone: response.data.results[0].phone,
                // email: response.data.results[0].email,
                // picture: response.data.results[0].picture.medium,
                // dob: response.data.results[0].dob.age,
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
                    <div className="col-sm-8 text-center">
                        <h2>This will hold the employee table rows</h2>
                        <table className="table table-dark">
                            <thead>
                                <tr>
                                    <th scope="col">Image</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">DOB</th>
                                </tr>
                            </thead>

                            {this.state.data.map((data) => {
                                console.log(data);
                                <tbody>
                                    <tr>
                                        <th scope="row"><img src={data.picture.medium} /></th>
                                        <td>{data.name.first + " " + data.name.last}</td>
                                        <td>{data.phone}</td>
                                        <td>{data.email}</td>
                                        <td>{data.dob.age}</td>
                                    </tr>
                                </tbody>
                            })}

                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Directory;