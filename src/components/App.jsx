import React, { Component } from 'react';
import Form from './Form/Form';
import FilterContacts from './FilterContacts/FilterContacts';
import ContactList from './ContactsList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  createContact = data => {
    const newContact = {
      name: data.name,
      number: data.number,
      id: data.id,
    };

    this.setState(prev => ({
      contacts: [...prev.contacts, newContact],
    }));
  };

  deleteContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleFilter = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    console.log('this.state :', this.state);
    return (
      <div>
        <Form
          onChange={this.onFormChange}
          createContact={this.createContact}
          onSubmit={this.onFormSubmit}
        />
        <ContactList
          contacts={this.state.contacts}
          deleteContact={this.deleteContact}
          filter={this.state.filter}
        >
          <FilterContacts onFilter={this.handleFilter} />
        </ContactList>
      </div>
    );
  }
}
