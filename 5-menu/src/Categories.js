import React from 'react';

const Categories = ({categoryOptions, fetchMenuItems}) => {
  return (
    <>
      <div className='title'>
        <h2>Our menu</h2>
        <div className='underline'></div>
      </div>

      <div className='btn-container'>
        {
          // Generates de nav options based on the food categories.
          categoryOptions.map((categoryOption, index) => {
            return <button key={index} onClick={() => fetchMenuItems(categoryOption)} className='filter-btn'>{categoryOption}</button>
          })
        }
      </div>
    </>
  );
};

export default Categories;
