import React from 'react';

export default function TableHead(props) {

  let arrowId = props.isSortedType.id ? <span>&#8595;</span> : <span>&#x2191;</span>;
  let arrowFirstName = props.isSortedType.firstName ? <span>&#8595;</span> : <span>&#x2191;</span>;
  let arrowLastName = props.isSortedType.lastName ? <span>&#8595;</span> : <span>&#x2191;</span>;
  let arrowPhone = props.isSortedType.phone ? <span>&#8595;</span> : <span>&#x2191;</span>;
  let arrowEmail = props.isSortedType.email ? <span>&#8595;</span> : <span>&#x2191;</span>;

  return (
    <thead className="table-dark">
      <tr onClick={e => props.handleClick(e.target.id)}>
        <th scope="col" id="id" >id {arrowId}</th>
        <th scope="col" id="firstName" >firstName {arrowFirstName}</th>
        <th scope="col" id="lastName">lastName {arrowLastName}</th>
        <th scope="col" id="email">email {arrowEmail} </th>
        <th scope="col" id="phone">phone {arrowPhone}</th>
      </tr>
    </thead>
  )
}
