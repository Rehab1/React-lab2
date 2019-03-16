import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import Post from '../../posts/post/post'
import './user.css';

class User extends Component {
    state = {
        user: {},
        userPosts: []
    }
    componentDidMount() {

        var userId = this.props.match.params.id;
        axios.get("https://jsonplaceholder.typicode.com/users/" + userId)
            .then(res => {
                this.setState({ user: res.data })
            })

        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                var userPosts = res.data.filter(post => post.userId === parseInt(userId));
                this.setState({ userPosts: userPosts });
            })

    }

    render() {
        return (
            <div className="User">
                <div className="container">
                    <div className="row">
                        <div className="col-7 mx-auto">
                            <div className="user">
                                <Link to={'/user/' + this.state.user.id} className="title">
                                    {this.state.user.name}</Link>
                                <p >{this.state.user.username}</p>
                                <p >{this.state.user.email}</p>
                            </div>
                        </div>

                        {
                            this.state.userPosts.map(post => 
                                <Post postData={post}  key={post.id} />    
                            )
                        }

                    </div>
                </div>
            </div>
        )
    }
}
export default User;