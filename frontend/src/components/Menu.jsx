import React, { useState } from 'react';
import data from '../restApi.json';

const Menu = () => {
  const dishes = data.data[0].dishes || [];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(dishes.map((d) => d.category))];
  const filteredDishes =
    selectedCategory === 'All'
      ? dishes
      : dishes.filter((d) => d.category === selectedCategory);

  return (
    <section className="menu" id="menu">
      <h1>Our Menu</h1>
      <div className="category-filter">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="dishes-grid">
        {filteredDishes.map((dish) => (
          <div key={dish.id} className="dish-card">
            <img src={dish.image} alt={dish.title} />
            <h3>{dish.title}</h3>
            <p className="category">{dish.category}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
