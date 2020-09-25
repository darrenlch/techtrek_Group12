import React from 'react';
import './MainPage.css';

class MainPage extends React.Component{
    render(){
        return(
            <div className = "mainpage">
                <h1 className = "mainpage-title">Onboarded Users</h1>
                <button className = "btn btn-primary add-user">Add New User</button>
                <table className = "table">
                    <thead className = "thead">
                        <th scope = "col">Name</th>
                        <th scope = "col">Product Type</th>
                        <th scope = "col">Registration Time</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Test</td>
                            <td>Test</td>
                            <td>Test</td>
                        </tr>
                        <tr>
                            <td>Test</td>
                            <td>Test</td>
                            <td>Test</td>
                        </tr>
                        <tr>
                            <td>Test</td>
                            <td>Test</td>
                            <td>Test</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default MainPage;