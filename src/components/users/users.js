import React, { Component } from 'react';
import { Link } from 'react-router-dom' 
import axios from 'axios';
import './users.css';

class Users extends Component {

    state = {
        users: [],
    }
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                this.setState({ users: res.data })
            })
    }
    render() {
        return (
            <div className="users">
                <div className="container">
                    <div className="row">
                        <div className="col-7 mx-auto">
                        {
                            this.state.users.map((user) =>
                                <Link to={`/user/${user.id}`} key={user.id}>
                                    <h2 >{user.username} {user.name}</h2>
                                </Link>
                            )
                        }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Users;