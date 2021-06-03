import { Component } from 'react';
import './App.css';

import BlogForm from './BlogForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
    }
    this.addBlog = this.addBlog.bind(this);
  }

  addBlog(blog) {
    const blogs = [ ...this.state.blogs ];
    blogs.push(blog);
    this.setState({ blogs });
  }

  render() {
    return (
      <>
        <h1>Blog Posts</h1>
        <BlogForm addBlog={this.addBlog}/>
      </>
    )
  }

  }


export default App;
