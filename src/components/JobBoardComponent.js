import React from 'react';

const JobBoardComponent= ({job: {
  company,
  logo,
  newStatus,
  featured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools
}, handleAttrClick}) => {

  const details = [role, level];
  if(languages) {
    details.push(...languages);
  }
  if(tools) {
    details.push(...tools);
  }

  return (
  <div className={`flex flex-col items-center bg-white shadow-md rounded my-16 mx-10 p-6
    ${featured && 'border-l-8 border-teal-500 border-solid'}
    lg:flex-row lg:my-4`}>
    <div>
      <img className="-mt-16 mb-4 lg:my-0"
      src={logo}
      alt={company}
      />
    </div>
    <div className="flex flex-col justify-between ml-5 mr-10">
      <h3 className="font-bold text-teal-500">
        <span className="text-lg">{company}</span>
        {newStatus && (
          <span className="bg-teal-500 text-xs text-teal-100 uppercase rounded-full m-3 py-1 px-2">
            New!
          </span>
        )}
        {featured && (
          <span className="bg-gray-800 text-xs text-white uppercase rounded-full py-1 px-3">
            Featured
          </span>
        )}
      </h3>
      <h2 className="font-bold text-xl my-2">{position}</h2>
      <p className="text-gray-700">
        {postedAt} • {contract} • {location}
      </p>
    </div>
    <div className="flex flex-wrap items-center mt-4 mx-4 pt-4 border-t border-gray-500 lg:ml-auto lg:border-0 lg:p-0 lg:mb-0">
      {
        details ?
        (details.map((detail) =>
          <span
          onClick={() => handleAttrClick(detail)}
          className="ltspan cursor-pointer text-teal-500 font-bold rounded mr-3 mb-4 p-2">
          {detail}
          </span>
        )): ''
      }
    </div>
  </div>
)}

export default JobBoardComponent;