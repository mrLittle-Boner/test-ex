import React from 'react';
import TableHead from './TableHead.js';
import TableRow from './TableRow.js';

export default function Table() {
  const [users, setUsers] = React.useState(
    [
      {
        id: 101,
        firstName: 'Sue',
        lastName: 'Corson',
        email: 'DWhalley@in.gov',
        phone: '(612)211-6296'
      },
      {
        id: 101,
        firstName: 'Lor',
        lastName: 'Ipsumd ',
        email: 'DWhalley@in.gov',
        phone: '(612)211-6296'
      },
      {
        id: 101,
        firstName: 'Ips',
        lastName: 'Umdolo',
        email: 'DWhalley@in.gov',
        phone: '(612)211-6296'
      },

    ]
  );

  return (
    <table className="table table-bordered table-hover">
      <TableHead />
      <tbody>
        {
          users.map(user => {
            return (
              <TableRow
                id={user.id}
                firstName={user.firstName}
                lastName={user.lastName}
                email={user.email}
                phone={user.phone}
              />)
          })
        }
      </tbody>
    </table>
  )
}