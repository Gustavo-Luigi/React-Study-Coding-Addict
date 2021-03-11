import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  // Setting states
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0)
  const [isLoading, setIsLoading] = useState(true);

  /**
   * Fetches the job list and updates the jobs state.
   */
  const fecthJobs = async () => {
    // Sets loading to true.
    setIsLoading(true);

    //Fetchs the job list from the API.
    const response = await fetch(url);
    const jobList = await response.json();

    setJobs(jobList);
    // Sets loading to false
    setIsLoading(false);

  };

  // Runs the fetchJobs function on page load and logs any errors.
  useEffect(() => {
    try{
      fecthJobs();
    } catch (e) {
      console.log(e);
    }
  }, [])

  // Returns a loading screen while fetching the jobs list.
  if (isLoading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    )
  }

  const { company, dates, duties, title } = jobs[value]
  return (
    <section className='section'>
      <div className='title'>
        <h2>Experience</h2>
        <div className='underline'></div>
      </div>

      <div className='jobs-center'>
        {/* Navbar */}
        <nav className='btn-container'>
          {
            jobs.map((job, index) => {
              return (
              <button
                key={index}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && 'active-btn'}`}
              >
                {job.company}
              </button>)
            })
          }
        </nav>

        {/* Job info section */}
        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>

          <p className='job-date'>{dates}</p>
            {/* Displays the list of duties */}
            {
              duties.map((duty, index) => {
                return (
                  <div key={index} className='job-desc'>
                    <FaAngleDoubleRight className='job-icon' />
                    <p>{duty}</p>
                  </div>
                )
              })
            }
        </article>
      </div>

      <button className='btn'>more info</button>
    </section>
  )
}

export default App
