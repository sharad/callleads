// ContactsList.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
// import Contacts from 'react-native-contacts';
import * as Contacts from 'expo-contacts';

function ContactsList({ onCallReceived }) {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      // const { data } = await Contacts.getAll();
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers],
      });
      setContacts(data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  return (
    <View>
      <Text>Contacts</Text>
      <FlatList
        data={contacts}
        renderItem={({ item }) => (
          <View>
            <Text>{item.displayName}</Text>
            {/* Add more details if needed */}
            <Button title="Call" onPress={() => onCallReceived(item)} />
          </View>
        )}
        keyExtractor={(item) => item.recordID}
      />
    </View>
  );
}

export default ContactsList;

