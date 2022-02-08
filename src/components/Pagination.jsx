import React from 'react';

export default function Pagination({ goToNext, goToPrevious }) {
  return (
  <div>
      {goToPrevious && <button onClick={goToPrevious}>Previous</button>}
      {goToNext && <button onClick={goToNext}>Next</button>}


  </div>
  )
}


// passing goToNext and goToPrevious props to the pagination functiuon 