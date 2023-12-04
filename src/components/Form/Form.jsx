import React, { Component } from 'react';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.contactsData(this.state);

    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
              required
            />
          </label>

          <label>
            Number
            <input
              type="tel"
              name="number"
              onChange={this.handleChange}
              value={this.state.number}
              required
            />
          </label>

          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}

export default Form;
