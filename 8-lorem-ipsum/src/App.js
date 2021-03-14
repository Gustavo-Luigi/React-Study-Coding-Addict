import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  /**
   * Handles the submit event.
   * @param {event} e 
   */
  const handleSubmit = (e) => {
    // Prevents default submit action.
    e.preventDefault();
    let amount = parseInt(count);
    // If user requests a negative number of paragraphs, sets the amount of paragraphs to 1.
    if (count < 0) {
      amount = 1;
    }
    // Limits the amount of paragraphs to 8.
    if (count > 8) {
      amount = 8;
    }
    // Sets the paragraphs that will be displayed.
    setText(data.slice(0, amount));
  };
  
  return (
    <section className='section-center'>
      <h3>tired of boring lorem ipsum?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraphs:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className='btn'>generate</button>
      </form>
      <article className='lorem-text'>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
