import React from 'react';
import Tour from './Tour';
const Tours = ({tours, removeTour}) => {
  return (
    <section className='container'>
    <div className='title'>
      <h2>Our Tours</h2>
      <div className='underline'></div>
    </div>

    {
      tours.map((tours) => {
        return <Tour key={tours.id} {...tours} removeTour={removeTour}/>
      })
    }
    
  </section>
  );
};

export default Tours;
