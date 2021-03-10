import React, { useState } from 'react';

const Tour = ({id, name, image, info, price, removeTour}) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className='single-tour'>
      <img src={image} alt={name}/>
      <footer>

        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>{price}</h4>
        </div>

        <p>
          {/* If read more is true, displays full text, otherwise, displays up to 200 characters */}
          {readMore ? info : `${info.substring(0, 200)}...`}
          {/* Toogles read more state */}
          <button onClick={(() => setReadMore(!readMore))}>{readMore ? 'show less' : 'read more'}</button>
        </p>
        {/* Removes the tour from the list */}
        <button className='delete-btn' onClick={() => removeTour(id)}>Not interested</button>

      </footer>
    </article>
  );
};

export default Tour;
