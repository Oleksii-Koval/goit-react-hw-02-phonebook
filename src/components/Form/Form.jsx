import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './Form.module.css';

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
    return (
      <div>
        <h1 className={css.title}>Phone book</h1>
        <form className={css.form} onSubmit={this.onFormSubmit}>
          <label className={css.label}>
            Name
            <input
              type="text"
              name="name"
              className={css.inputItem}
              onChange={this.onFormChange}
              value={this.state.name}
              required
            />
          </label>

          <label className={css.label}>
            Number
            <input
              type="tel"
              name="number"
              className={css.inputItem}
              onChange={this.onFormChange}
              value={this.state.number}
              required
            />
          </label>

          <button type="submit" className={css.submitButton}>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
