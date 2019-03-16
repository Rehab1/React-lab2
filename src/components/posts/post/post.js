import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import './post.css';

class Post extends Component {

    state = {
        post: {},
    }

    componentDidMount() {

        if (this.props.postData) {
            this.setState({ post: this.props.postData })
        }

        else{
            var postId = this.props.match.params.id;
            
            axios.get("https://jsonplaceholder.typicode.com/posts/"+postId)
            .then(res => {
                this.setState({post: res.data})
            })
        }

    }

    render() {

        return (

            <div className="col-7 mx-auto">
                <div className="post">
                    <Link to={'/post/'+this.state.post.id} className="title">{this.state.post.title}</Link>
                    <p className="body">{this.state.post.body}</p>
                </div>
            </div>

        )
    }
}

export default Post;