// App.js
import React, { useState } from 'react';
import { View, Text } from 'react-native';
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
    <View>
      <Text></Text>
      <Text></Text>
      <Text>Marketing Contact Management</Text>
      <ContactsList contacts={contacts} onCallReceived={handleCallReceived} />
      {showCallPopup && <CallPopup contact={currentCall} onCallEnd={handleCallEnd} />}
    </View>
  );
}

export default App;
