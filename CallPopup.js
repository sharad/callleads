// CallPopup.js
import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

function CallPopup({ contact, onCallEnd }) {
  const [callStatus, setCallStatus] = useState('');

  const handleStatusChange = (status) => {
    setCallStatus(status);
  };

  const handleCallEnd = () => {
    onCallEnd(callStatus);
  };

  return (
    <View>
      <Text>Call from {contact.name}</Text>
      <TextInput
        placeholder="Enter status"
        value={callStatus}
        onChangeText={handleStatusChange}
      />
      <Button title="End Call" onPress={handleCallEnd} />
    </View>
  );
}

export default CallPopup;
