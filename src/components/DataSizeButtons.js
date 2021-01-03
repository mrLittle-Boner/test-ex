import React from 'react';

export default function DataSizeButtons({ handleClick }) {
  return (
    <div className='data-size d-flex mb-3'>
      <button className='py-2 w-100' onClick={() => handleClick(true)}>Load Big Data</button>
      <button className='py-2 w-100' onClick={() => handleClick(false)}>Load Small Data</button>
    </div>
  )
}