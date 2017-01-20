import React, { Component } from 'react';
import './Form.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your Form Was Submitted --- Thank You ');
    event.preventDefault();
  }

  render() {
    return (
      <div className="form">
        <h2> Interest Form </h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
          </label>
          <br/>
          <textarea className="text" onChange={this.handleChange} />
          <br/>
          <label>
            Email
          </label>
          <br/>
          <textarea className="text" onChange={this.handleChange} />
          <br/>
          <label>
            Hackathon Idea
          </label>
          <br/>
          <textarea className="text" onChange={this.handleChange} />
          <br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Form;