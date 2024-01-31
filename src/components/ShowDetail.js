// src/components/ShowDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ShowDetail = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    const fetchShowDetail = async () => {
      try {
        const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        setShow(response.data);
      } catch (error) {
        console.error('Error fetching show details:', error);
      }
    };

    fetchShowDetail();
  }, [id]);

  const handleBookTicket = () => {
    // Add logic to handle booking ticket
    // You can use local/session storage to store user details
  };

  return (
    <div>
      <h1>Show Details</h1>
      {show && (
        <div>
          <h3>{show.name}</h3>
          <p>{show.summary}</p>
          <button onClick={handleBookTicket}>Book Ticket</button>
        </div>
      )}
    </div>
  );
};

export default ShowDetail;
