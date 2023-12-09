import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class Form extends Component {
  state = {
    name: '',
    number: '',
    id: '',
  };

  onFormChange = ({ target: { value, name } }) => {
    const id = nanoid();

    this.setState({
      [name]: value,
      id: id,
    });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.createContact(this.state);
  };

  render() {
    // console.log(this.state);

    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              onChange={this.onFormChange}
              value={this.state.name}
              required
            />
          </label>

          <label>
            Number
            <input
              type="tel"
              name="number"
              onChange={this.onFormChange}
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
