import React, { useState } from 'react';

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
    <div>
      
      <form onSubmit={handleSubmit}>
        <div>
            <h1>Full Name</h1>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
            <h1>Mobile</h1>
          <input
            type="text"
            id="Mobile"
            value={Mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
        </div>
        <div>

          <h1>Email</h1>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>

      {isSubmitted && (
        <div>
            
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Mobile:{Mobile}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
