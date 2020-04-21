import React, { Component } from 'react';
// import axios from 'axios';
import Posts from './Posts/Posts';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import NewPost from '../Blog/NewPost/NewPost';
import './Blog.css';
import FullPost from './FullPost/FullPost';

class Blog extends Component {
  state = {
    auth: false
  };
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink exact to="/posts">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/new-post">New Post</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/posts" component={Posts}></Route>
          <Route path="/new-post" exact component={NewPost} />
          <Route path="/:id" exact component={FullPost} />
          <Redirect from="/" exact to="/posts"></Redirect>
          {/* <Route render={() => <h1>Not found</h1>} /> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
