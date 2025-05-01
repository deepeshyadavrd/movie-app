import React from 'react';
import './CategoryList.css';

const CategoryList = () => {
  const categories = ['Action', 'Comedy', 'Drama', 'Thriller', 'Horror'];

  return (
    <div className="category-list">
      {categories.map((cat, idx) => (
        <span key={idx} className="category">{cat}</span>
      ))}
    </div>
  );
};

export default CategoryList;
