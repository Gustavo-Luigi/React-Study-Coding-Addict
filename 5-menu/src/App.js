import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const uniqueCategories = ['all', ...new Set((items.map((menuItem) => menuItem.category)))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categoryOptions, setCategoryOptions] = useState(uniqueCategories);

  /**
   * Fetches the menu itens based on their categories.
   * @param {string} category 
   * @returns 
   */
  const fetchMenuItems = (category) => {
    // If category is all, then returns the entire menu.
    if(category === 'all') {
      setMenuItems(items);
      return;
    }
    // Else, filters the menu for the chosen category.
    const filteredMenuItems = items.filter((item) => item.category === category);
    setMenuItems(filteredMenuItems);
  }

  return (
    <main>
      <section className='menu section'>
      <Categories categoryOptions={categoryOptions} fetchMenuItems={fetchMenuItems} />
      <Menu menuItems={menuItems} />
      </section>
    </main>
  );
}

export default App;
