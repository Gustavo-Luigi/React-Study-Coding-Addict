import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({id, title, info}) => {
  const [showInfo, setShowInfo] = useState(false);
  
  /**
   * Toggles the showInfo state
   */
  const toggleInfo = () => {
    setShowInfo(!showInfo);
  }

  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        {/* If showInfo is true, will display the minus button, else, it will display the plus button */}
        <button className='btn' onClick={toggleInfo}>{showInfo? <AiOutlineMinus/> : <AiOutlinePlus/>}</button>
      </header>
      {/* If showInfo is true, displays the info on screen */}
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;
