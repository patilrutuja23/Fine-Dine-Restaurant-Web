import React from 'react';
import data from '../restApi.json';

const Qualities = () => {
  const qualities = data.data[0].ourQualities || [];

  return (
    <section className="qualities" id="qualities">
      <h1>Why Choose Us</h1>
      <div className="qualities-container">
        {qualities.map((quality) => (
          <div key={quality.id} className="quality-card">
            <img src={quality.image} alt={quality.title} />
            <h3>{quality.title}</h3>
            <p>{quality.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Qualities;
