import React, { Component } from 'react';
import Form from './Form/Form';
import FilterContacts from './FilterContacts/FilterContacts';
import ContactList from './ContactsList/ContactList';

import { nanoid } from 'nanoid';

export class App extends Component {
  state = {};
  contactsData = data => {
    const contactId = nanoid();

    const contact = {
      ...data,
      id: contactId,
    };

    console.log('contact :', contact);
  };

  render() {
    return (
      <div>
        <Form contactsData={this.contactsData}></Form>
      </div>
    );
  }
}
