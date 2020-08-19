import React, {useState, useEffect} from 'react';
import data from './assets/data.json'
import JobBoardComponent from './components/JobBoardComponent';


console.log(data);

function App() {

  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect (() => setJobs(data), []);

  const attrFilter = ({role, level, tools, languages}) => {
    if(filters.length === 0) {
      return true;
    }
    const details = [role, level];
    if(tools) {
      details.push(...tools);
    }
    if(languages) {
      details.push(...languages);
    }
    return filters.every(filter => details.includes(filter));
  }

  const handleAttrClick = (detail) => {
    if(filters.includes(detail)) return;
    setFilters([...filters, detail]);
  }

  const handleFilterClick = (passedFilter) => {
    setFilters(filters.filter((attr) => attr !== passedFilter));
  }

  const clearFilters = () => {
    setFilters([]);
  }

  const jobFilter = jobs.filter(attrFilter);

  return (
    <>
      <header className="bg-teal-500 mb-12">
        <img src="./images/bg-header-desktop.svg" alt="page header"/>
      </header>
      <div className="container m-auto">
        {filters.length > 0 && (
          <div className="flex items-center bg-white shadow-md -mt-24 mb-16 mx-10 px-6 pt-6 pb-2 rounded z-10 relative">
              {filters.map((filter) => (
              <span
              className="ltspan text-teal-500 font-bold mr-4 p-2 mb-4"
              >
              {filter}
                <span
                onClick={() => handleFilterClick(filter)}
                className="ml-1 p-2 text-white cursor-pointer rounded-r bg-teal-700">
                X
                </span>
              </span>
            ))}
            <button
            onClick={clearFilters}
            className="font-bold text-gray-600 mb-4 ml-auto">
            Clear
            </button>
          </div>
        )}

        {
          jobs.length > 0 ?
          (jobFilter.map(job =>
            (<JobBoardComponent job={job} key={job.id} handleAttrClick={handleAttrClick}/>)
          )) :
          (<h1>Fetching Jobs</h1>)
        }
      </div>
    </>
  );
}

export default App;