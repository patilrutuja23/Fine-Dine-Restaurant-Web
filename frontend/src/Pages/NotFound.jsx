import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="not-found-page">
      <div className="not-found-container">
        <h1>404</h1>
        <p>Page Not Found</p>
        <button onClick={() => navigate('/')} className="btn btn-primary">
          Go Back Home
        </button>
      </div>
    </section>
  );
};

export default NotFound;