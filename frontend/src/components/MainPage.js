import React from 'react';
import './MainPage.css';

class MainPage extends React.Component{

    constructor(props){
        super();
        this.state ={
            results:[]
        }
    }

    componentDidMount(){
        console.log("Mounted in component did mount");
        this.fetchCustomers();
    }

    async fetchCustomers(){
        await fetch("http://localhost:3001/customers").then(res=>res.json()).then(customers=>{
            this.setState({results:customers});
        })
    }

    render(){
        return(
            <div className = "mainpage">
                <h1 className = "mainpage-title">Onboarded Users</h1>
                <button className = "btn btn-primary add-user">Add New User</button>
                <table className = "table table-striped">
                    <thead className = "thead">
                        <tr>
                            <th scope = "col" className = "text-center">Name</th>
                            <th scope = "col" className = "text-center">NRIC</th>
                            <th scope = "col" className = "text-center">Registration Time</th>
                            <th scope = "col"></th>
                        </tr>
                        
                    </thead>
                    <tbody>
                        {
                            this.state.results.map(customer=>{
                                return(
                                    <tr className = "text-center" key = {customer._id}>
                                        <td>{customer.customerName}</td>
                                        <td>{customer.NRIC}</td>
                                        <td>{customer.registrationTime}</td>
                                        <td>
                                            <button className = "btn btn-primary mr-2">Edit</button>
                                            <button className = "btn btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default MainPage;