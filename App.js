// App.js
import React, { useState } from 'react';
import ContactsList from './ContactsList';
import CallPopup from './CallPopup';

function App() {
  const [contacts, setContacts] = useState([]);
  const [showCallPopup, setShowCallPopup] = useState(false);
  const [currentCall, setCurrentCall] = useState(null);

  const handleCallReceived = (contact) => {
    setCurrentCall(contact);
    setShowCallPopup(true);
  };

  const handleCallEnd = (status) => {
    // Update the status of sale here
    setShowCallPopup(false);
    setCurrentCall(null);
  };

  return (
    <div>
      <h1>Marketing Contact Management</h1>
      <ContactsList contacts={contacts} onCallReceived={handleCallReceived} />
      {showCallPopup && <CallPopup contact={currentCall} onCallEnd={handleCallEnd} />}
    </div>
  );
}

export default App;
