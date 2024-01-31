// src/components/BookTicketForm.js
import React from 'react';

const BookTicketForm = ({ showName }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle form submission
  };

  return (
    <div>
      <h1>Book Ticket Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Movie Name:
          <input type="text" value={showName} readOnly />
        </label>
        {/* Add more form fields as needed */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BookTicketForm;
