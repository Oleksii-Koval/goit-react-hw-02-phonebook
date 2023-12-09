import React from 'react';

const ContactList = ({ contacts, children, deleteContact, filter }) => {
  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {contacts
          .filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map(contact => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
              <button onClick={() => deleteContact(contact.id)}>Delete</button>
            </li>
          ))}
      </ul>
      {children}
    </div>
  );
};

export default ContactList;
