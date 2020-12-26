import React from 'react';

export default function TableHead(props) {
  return (
    <thead className="table-dark">
      <tr onClick={e => props.handleClick(e.target.id)}>
        <th scope="col" id="id">id</th>
        <th scope="col" id="name">firstName</th>
        <th scope="col" id="name">lastName</th>
        <th scope="col" id="email">email</th>
        <th scope="col" id="phone">phone</th>
      </tr>
    </thead>
  )
}

// <th scope="col" onclick={sortRowById}>id</th>
// <th scope="col" onclick={sortRowByName}>firstName</th>
// <th scope="col" onclick={sortRowByLastName}>lastName</th>
// <th scope="col" onclick={sortRowByEmail}>email</th>
// <th scope="col" onclick={sortRowByPhone}>phone</th>