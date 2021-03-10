import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  /**
   * Selects the next person in the array to display.
   */
  function nextPerson() {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  }

  /**
   * Selects the previous person in the array to display.
   */
  function prevPerson() {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  }

  /**
   * Selects a random person to display.
   * The Random person will never be the same.
   */
  function randomPerson() {
    setIndex((index) => {
      let newIndex;
      do{
        // Selects a random index, not allowing it to be the same as the current index.
        newIndex = Math.floor(Math.random() * people.length);
      }while(newIndex === index);

      return newIndex;
    });
  }

  /**
   * Verifies if the index is out of bounds and returns the apropriate index if it is
   * @param {integer} index 
   * @returns {integer} Returns the apropriate index
   */
  function checkNumber(index) {
    // Checks if the index is greater than the array.
    if(index > people.length - 1) {
      // If it is, returns 0, moving the index back to the start.
      return 0;

    // Checks if the index is lower than 0.
    } else if (index < 0) {
      // If it is, returns the last index of the array.
      return people.length - 1;
    }
    // Returns the requested index.
    return index;
  }

  return (
    <section className='container'>
      {/* Title */}
      <div className='title'>
        <h2>Our Reviews</h2>
        <div className='underline'></div>
      </div>

      {/* Review card */}
      <article className='review'>
        {/* Card image */}
        <div className='img-container'>
          <img className='person-img' src={image} alt={name}/>
          <span className='quote-icon'><FaQuoteRight/></span>
        </div>

        {/* Card text */}
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>

        {/* Buttons */}
        <div className='button-container'>
        {/* Previous and Next buttons */}
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
        </div>
        {/* Random index button */}
        <button className='random-btn' onClick={randomPerson}>
          surprise me
        </button>
      </article>
    </section>
  );
};

export default Review;
