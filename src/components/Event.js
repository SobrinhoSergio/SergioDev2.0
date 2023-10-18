import React from 'react';

const Event = ({ title, description, date, isReverse }) => {
  const containerClass = isReverse
    ? 'flex md:contents flex-row-reverse'
    : 'flex md:contents';

  return (
    <div className={containerClass}>
      <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
        <h3 className="text-lg font-semibold lg:text-xl">{title}</h3>
        <p className="mt-2 leading-6">{description}</p>
        <span className="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">{date}</span>
      </div>
      <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
        <div className="flex items-center justify-center w-6 h-full">
          <div className="w-1 h-full bg-indigo-300"></div>
        </div>
        <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
      </div>
    </div>
  );
};

export default Event;
