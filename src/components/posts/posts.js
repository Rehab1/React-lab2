import React, { Component } from 'react';
import axios from 'axios';
import Post from './post/post'
import './posts.css';

class Posts extends Component {

    state = {
        posts:[],
    }

    componentDidMount(){

        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                this.setState({posts: res.data})
            })
    }

    render(){

        return (
            <div className="posts">
                <div className="container">
                    <div className="row">
                        {
                            this.state.posts.map((post) => 
                                <Post postData={post}  key={post.id} />
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Posts;