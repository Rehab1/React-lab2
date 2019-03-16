import React, { Component } from 'react';
import axios from 'axios';
import SimpleSchema from 'simpl-schema'
import './newUser.css';

class newUser extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: '',
            username: '',
            email: '',
            validationErrors: [],

        }
        this.editEmail=this.editEmail.bind(this);
        this.editUsername = this.editUsername.bind(this);
        this.submit = this.submit.bind(this);
    }
 
    editUsername(e){
        this.setState({username: e.value})
    }

    editEmail(e){
            this.setState({email: e.value})
        }

    submit(e){
        e.preventDefault();
        const { name, username, email } = this.state;

        const validation = new SimpleSchema({
            email: String,
            name: String,
            username: String
        }).newContext();

        validation.validate({email, name, username});

        if(validation.isValid()){
            axios.patch("https://jsonplaceholder.typicode.com/users/"+this.state.id, { name, username, email })
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
                            {
                                this.state.validationErrors.length > 0 && 
                                this.state.validationErrors.map((e, index) => 
                                    <p key={index}>{e.name} is not valid</p>
                                )
                            }
                            <form onSubmit={this.submit}>
                                <div className="form-group">
                                    <input 
                                        required
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Enter User Name" 
                                        onChange={(e) => {this.editUsername(e.target)}}
                                    />
                                </div>
                                <div className="form-group">
                                    <input 
                                        required
                                        className="form-control" 
                                        id="email" 
                                        rows="9"
                                        type="email"
                                        placeholder="Enter email" 
                                        onChange={(e) => {this.editEmail(e.target)}}
                                    />
                                </div>
                                <div className="form-group text-center">
                                    <button 
                                        type="submit" 
                                        className="btn btn-success submit"
                                    >Add user</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default newUser;