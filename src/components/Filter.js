import React, { useState } from 'react';

export default function Filter(props) {
  const [filterInputValue, setFilterInputValue] = useState('');

  return (
    <form className='filter w-100 mb-3 d-flex' onSubmit={(e) => props.handleSubmit(e, filterInputValue)}>
      <input className='input filter__input p-2' placeholder='Type here to find user' value={filterInputValue} type="text" onChange={e => setFilterInputValue(e.target.value)} />
      <button className='filter__btn px-2' style={{ width: 100 + 'px' }} type="submit">Find</button>
    </form>
  )
}