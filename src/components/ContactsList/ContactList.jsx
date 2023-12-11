import React from 'react';
import css from './ContactList.module.css';

const ContactList = ({ contacts, deleteContact, filter }) => {
  return (
    <div>
      <h2 className={css.title}>Contacts</h2>
      <ul className={css.list}>
        {contacts
          .filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map(contact => (
            <li key={contact.id} className={css.item}>
              {contact.name}: {contact.number}
              <button
                className={css.button}
                onClick={() => deleteContact(contact.id)}
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ContactList;
