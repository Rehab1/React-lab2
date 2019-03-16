import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/navbar/nav'
import Posts from './components/posts/posts'
import Post from './components/posts/post/post'
import NewPost from './components/newPost/newPost'
import Users from './components/users/users'
import User from './components/users/user/user'
import NewUser from './components/newUser/newUser'
import './App.css';

class App extends Component {
  render() {
    return (
        <Router className="App">
            <>
                <Navbar />
                <Switch>
                    
                    <Route exact path="/" component={Posts} />
                    <Route exact path="/post/:id" component={Post} />
                    <Route exact path="/addPost/:userId" component={NewPost} />
                    <Route exact path="/users" component={Users} />
                    <Route exact path="/user/:id" component={User} />
                    <Route exact path="/addUser" component={NewUser} />


                </Switch>
            </>
        </Router>
    );
  }
}

export default App;
