import React, { Component } from 'react';
import axios from 'axios';
import SimpleSchema from 'simpl-schema'
import './newPost.css';

class NewPost extends Component {

    constructor(props){
        super(props);
        this.state = {
            title: '',
            body: '',
            userId: '',
            id: '',
            validationErrors: []
        }
        this.editBody = this.editBody.bind(this);
        this.editTitle = this.editTitle.bind(this);
        this.submit = this.submit.bind(this);
    }

    componentDidMount() {

        //put the user id in post object
        this.setState({ userId: +this.props.match.params.userId })

    }

    editTitle(e){
        this.setState({title: e.value})
    }

    editBody(e){
        this.setState({body: e.value})
    }

    submit(e){
        e.preventDefault();
        const { title, body, userId } = this.state;

        const validation = new SimpleSchema({
            userId: SimpleSchema.Integer,
            title: String,
            body: String
        }).newContext();
        validation.validate({userId, title, body});
        if(validation.isValid()){
            
            axios.post('https://jsonplaceholder.typicode.com/posts', { title, body, userId })
            .then(res => {
                console.log(res.data);
            })
        }

        else{
            this.setState({validationErrors: validation.validationErrors()})
            console.log(validation.validationErrors())
        }
        
    }

    render() {

        return (
            <div className="newPost">
                <div className="container">
                    <div className="row">
                        <div className="col-7 mx-auto">
                            <form onSubmit={this.submit}>
                                {
                                    this.state.validationErrors.length > 0 && 
                                    this.state.validationErrors.map((e, index) => 
                                        <p key={index}>{e.name} is not valid</p>
                                    )
                                }
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="title" 
                                        value={this.state.title}
                                        placeholder="Enter Post title" 
                                        onChange={(e) => {this.editTitle(e.target)}}
                                    />
                                </div>
                                <div className="form-group">
                                    <textarea 
                                        className="form-control" 
                                        id="textArea" 
                                        rows="9"
                                        value={this.state.body}
                                        onChange={(e) => {this.editBody(e.target)}}
                                    ></textarea>
                                </div>
                                <div className="form-group text-center">
                                    <button 
                                        type="submit" 
                                        className="btn btn-success submit"
                                    >Add Post</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewPost;