import React from 'react';
import { useNavigate } from 'react-router-dom';

const Success = () => {
  const navigate = useNavigate();

  return (
    <section className="success-page">
      <div className="success-container">
        <h1>Reservation Confirmed! ✓</h1>
        <p>Your table has been successfully booked.</p>
        <p>You will receive a confirmation email shortly.</p>
        <button onClick={() => navigate('/')} className="btn btn-primary">
          Return to Home
        </button>
      </div>
    </section>
  );
};

export default Success;