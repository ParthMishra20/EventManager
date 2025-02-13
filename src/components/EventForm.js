// src/components/EventForm.js
import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import '../styles/globalStyles.css'; // Correct import path

const EventForm = () => {
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [attendees, setAttendees] = useState('');
  const [eventImage, setEventImage] = useState(null);

  const handleSubmit = () => {
    // Add event creation logic here
    console.log({ eventName, eventDescription, attendees, eventImage });
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom style={{ textAlign: 'center' }}>
        Create New Event
      </Typography>
      <TextField
        label="Event Name"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Event Description"
        value={eventDescription}
        onChange={(e) => setEventDescription(e.target.value)}
        fullWidth
        margin="normal"
        multiline
        rows={4}
      />
      <TextField
        label="Number of Attendees"
        type="number"
        value={attendees}
        onChange={(e) => setAttendees(e.target.value)}
        fullWidth
        margin="normal"
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setEventImage(e.target.files[0])}
        style={{ margin: '20px 0' }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        style={{ width: '100%' }}
      >
        Create Event
      </Button>
    </Container>
  );
};

export default EventForm;