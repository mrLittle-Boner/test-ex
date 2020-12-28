import React, { useState } from 'react';

export default function Filter(props) {
  const [filterInputValue, setFilterInputValue] = useState('');

  return (
    <form onSubmit={(e, text) => props.handleSubmit(e, filterInputValue)}>
      <input value={filterInputValue} type="text" onChange={e => setFilterInputValue(e.target.value)} />
      <button type="submit">Find</button>
    </form>
  )
}