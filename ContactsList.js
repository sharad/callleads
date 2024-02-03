// ContactsList.js
import React from 'react';

function ContactsList({ contacts, onCallReceived }) {
  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name} - {contact.phone}
            <button onClick={() => onCallReceived(contact)}>Call</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactsList;
