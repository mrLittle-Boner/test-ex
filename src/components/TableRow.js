import React from 'react';

export default function TableRow(props) {
  return (
    <tr onClick={() => { props.clickEvent(props.id) }}>
      <th scope="row">{props.id}</th>
      <td>{props.name}</td>
      <td>{props.website}</td>
      <td>{props.email}</td>
      <td>{props.phone}</td>
    </tr>
  )
}