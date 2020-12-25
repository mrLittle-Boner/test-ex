import React from 'react';
import TableHead from './TableHead.js';
import TableRow from './TableRow.js';
import UserInfo from './UserInfo.js';

export default function Table() {
  const [users, setUsers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [userInfo, setuserInfo] = React.useState('');

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(data => {
        setTimeout(() => {
          setUsers(data);
          setIsLoading(false);
        }, 3000)
      })
      .catch(err => console.log("The Error is : " + err));
  }, []);

  function showUserInfo(id) {
    let searchebleUser = users.find(user => user.id === id);

    setuserInfo(searchebleUser);
  }

  return (
    <>
      <table className="table table-bordered table-hover">
        <TableHead />
        <tbody>
          {
            users.map(user => {
              return (
                <TableRow
                  key={user.id.toString()}
                  id={user.id}
                  name={user.name}
                  website={user.website}
                  email={user.email}
                  phone={user.phone}
                  clickEvent={showUserInfo}
                />)
            })
          }
        </tbody>
      </table>
      {isLoading && <div>Loading data</div>}
      {userInfo && <UserInfo
        name={userInfo.name}
        catchPhrase={userInfo.company.catchPhrase}
        address={userInfo.address}
      />}
    </>
  )

}