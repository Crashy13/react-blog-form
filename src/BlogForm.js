import { Component } from 'react'

class BlogForm extends Component {
constructor(props) {
  super(props);
  this.state = {
    title: '',
    article: '',
  }

  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleInput = this.handleInput.bind(this);
}

handleInput(event) {
  this.setState({ [event.target.name]: event.target.value})
}

handleSubmit(event) {
  event.preventDefault();
  this.props.addBlog(this.state);
  this.setState({title: '', article: ''})
  }



render() {
  return (
    <form className="row" onSubmit={this.handleSubmit}>
    <input className="col-7" name="title" value={this.state.title} onChange={this.handleInput} type="text" placeholder="Blog Title"/>
    <textarea className="col-7" name="article" value={this.state.article} onChange={this.handleInput} placeholder="Blog Article"></textarea>
    <button>Submit</button>
    </form>
  )
}
}

export default BlogForm
