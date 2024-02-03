// CallPopup.js
import React, { useState } from 'react';

function CallPopup({ contact, onCallEnd }) {
  const [callStatus, setCallStatus] = useState('');

  const handleStatusChange = (event) => {
    setCallStatus(event.target.value);
  };

  const handleCallEnd = () => {
    onCallEnd(callStatus);
  };

  return (
    <div>
      <h3>Call from {contact.name}</h3>
      <p>Call details...</p>
      <select value={callStatus} onChange={handleStatusChange}>
        <option value="">Select status</option>
        <option value="Interested">Interested</option>
        <option value="Not Interested">Not Interested</option>
        <option value="Follow-up Needed">Follow-up Needed</option>
        {/* Add more options as needed */}
      </select>
      <button onClick={handleCallEnd}>End Call</button>
    </div>
  );
}

export default CallPopup;
