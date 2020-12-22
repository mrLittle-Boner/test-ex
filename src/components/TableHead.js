import React from 'react';

export default function TableHead() {
  return (
    <thead className="table-dark">
      <tr>
        <th scope="col">id</th>
        <th scope="col">firstName</th>
        <th scope="col">lastName</th>
        <th scope="col">email</th>
        <th scope="col">phone</th>
      </tr>
    </thead>
  )
}