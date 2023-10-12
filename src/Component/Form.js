import React, { useState } from 'react';
import { Card, CardContent, Typography, TextField, Button } from '@mui/material';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [Mobile, setMobile] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <Card
      sx={{
        backgroundImage: 'url("light.jpg")',
        backgroundSize: 'cover',
        textAlign: 'center',
      }}
    >
      <CardContent>
        <Typography variant="h4" gutterBottom>
          My Form
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            fullWidth
          />
          <TextField
            label="Mobile"
            value={Mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
            fullWidth
          />
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            fullWidth
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </form>

        {isSubmitted && (
          <div>
            <Typography>Name: {name}</Typography>
            <Typography>Email: {email}</Typography>
            <Typography>Mobile: {Mobile}</Typography>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default Form;
