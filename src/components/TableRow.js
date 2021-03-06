import React from 'react';

export default function TableRow(props) {
  return (
    <tr onClick={() => { props.clickEvent(props.id) }}>
      <th scope="row">{props.id}</th>
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td>{props.email}</td>
      <td>{props.phone}</td>
    </tr>
  )
}