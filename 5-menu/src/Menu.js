import React from 'react';

const Menu = ({menuItems}) => {
  return (
    <div className='section-center'>

      {/* Displays every item in the array */}
      {
        menuItems.map((menuItem) => {
          const {id, title, price, img, desc} = menuItem;
          return (
          <article key={id} className='menu-item'>
            <img className='photo' src={img} alt={title} />
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <h4 className='price'>${price}</h4>
              </header>
              <p className='item-text'>{desc}</p>
            </div>
          </article>
          );
        })
      }

    </div>
  );
};

export default Menu;
