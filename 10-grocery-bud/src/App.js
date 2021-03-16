import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

/**
 * Access the local storage and fetches the itens saved.
 * @returns {array} Returns the itens in the local storage.
 */
const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return (list = JSON.parse(localStorage.getItem('list')));
  } else {
    return [];
  }
};

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

  /**
   * Handles the form submission
   * @param {event} e click event.
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    // Checks if form is null or empty.
    if (!name) {
      // Shows an alert if it is.
      showAlert(true, 'danger', 'please enter value');
      // Checks if user is editing an item.
    } else if (isEditing) {
      // If true, updates the item.
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      // Resets the states and shows a success message.
      setName('');
      setEditID(null);
      setIsEditing(false);
      showAlert(true, 'success', 'value changed');
    } else {
      // If user is not editing, adds the item to the list and shows a success message.
      showAlert(true, 'success', 'item added to the list');
      const newItem = { id: new Date().getTime().toString(), title: name };

      setList([...list, newItem]);
      setName('');
    }
  };

  /**
   * Shows an alert on screen.
   * @param {boolean} show Defines is the message will be shown or not.
   * @param {string} type The alert type, success or danger.
   * @param {string} msg The error message.
   */
  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  };

  /**
   * Clears the entire list.
   */
  const clearList = () => {
    showAlert(true, 'danger', 'empty list');
    setList([]);
  };

  /**
   * Removes an item from the list.
   * @param {integer} id The item id.
   */
  const removeItem = (id) => {
    showAlert(true, 'danger', 'item removed');
    setList(list.filter((item) => item.id !== id));
  };

  /**
   * Selects the item the user wants to update and sets the edit state.
   * @param {integer} id The item id.
   */
  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };

  // Updates the local storage everytime an item is added to the list.
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {/* Alerts */}
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}

        <h3>grocery bud</h3>
        {/* Form input */}
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='e.g. eggs'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {/* Sets the button based on the state */}
          <button type='submit' className='submit-btn'>
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {/* If there is a list, displays it */}
      {list.length > 0 && (
        <div className='grocery-container'>
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className='clear-btn' onClick={clearList}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
