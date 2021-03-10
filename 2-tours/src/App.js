import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  /**
   * Fetchs the tours and sets the state
   */
  const fetchTours = async () => {
    try {
      // Sets the loading state to true.
      setLoading(true);
      // Fetches the tours from the API.
      const response = await fetch(url);
      // Returns the json.
      const tours = await response.json();
      // Sets the state.
      setTours(tours);
    } catch(e) {
      console.log(e);
    } finally {
      // Removes the loading screen.
      setLoading(false);
    }
  }

  /**
   * 
   * @param {integer} id - The tour id.
   * Removes a tour from the list, based on it's id.
   */
  const removeTour = (id) => {
    // Creates a new array, without selected tour.
    const newTours = tours.filter( (tour) => tour.id !== id);
    // Sets the tour state to the new array.
    setTours(newTours);
  }

  // Calls the fetchTours function on first load
  useEffect( () => {
    fetchTours();
  }, []);

  // If the tour list is laoding, displays a loading screen
  if(loading) {
    return (
      <main>
        <Loading/>
      </main>
    );
  }

  // If all tours are removed, displays a "No tours left" message, with the option to reload the tour list. 
  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    )
  }
  // If everything is ok, displays the tour list
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}

export default App
