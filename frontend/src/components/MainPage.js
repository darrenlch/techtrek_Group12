import React from 'react';
import './MainPage.css';

class MainPage extends React.Component{
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
                        <tr className = "text-center">
                            <td>Test</td>
                            <td>Test</td>
                            <td>Test</td>
                            <td>
                                <button className = "btn btn-primary mr-2">Edit</button>
                                <button className = "btn btn-danger">Delete</button>
                            </td>
                        </tr>
                        <tr className = "text-center">
                            <td>Test</td>
                            <td>Test</td>
                            <td>Test</td>
                            <td>
                                <button className = "btn btn-primary mr-2">Edit</button>
                                <button className = "btn btn-danger">Delete</button>
                            </td>
                        </tr>
                        <tr className = "text-center">
                            <td>Test</td>
                            <td>Test</td>
                            <td>Test</td>
                            <td>
                                <button className = "btn btn-primary mr-2">Edit</button>
                                <button className = "btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default MainPage;