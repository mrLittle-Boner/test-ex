import React, { useState, useEffect } from 'react';
import TableHead from './TableHead.js';
import TableRow from './TableRow.js';
import UserInfo from './UserInfo.js';
import Pagination from './Pagination.js';

export default function Table() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userInfo, setuserInfo] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [showingUsers, setShowingUsers] = useState([]);
  const userPerPage = 50;

  useEffect(() => {
    fetch('http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')
      .then(resp => resp.json())
      .then(data => setUsers(data))
      .catch(err => console.log('The Error is : ' + err));

    setIsLoading(false);

  }, []);

  useEffect(() => {
    const indexOfLastUser = currentPage * userPerPage;
    const indexOfFirstUser = indexOfLastUser - userPerPage;
    let showUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    setShowingUsers(showUsers)
  }, [users, currentPage])

  const [isSortedType, setIsSortedType] = useState({
    id: true,
    firstName: true,
    lastName: true,
    phone: true,
    email: true
  });

  function getValueAndSort(value) {
    let sortedUsers = [];
    let newObjext = Object.assign({}, isSortedType);

    isSortedType[value]
      ? sortedUsers = showingUsers.sort((a, b) => a[value] > b[value] ? 1 : -1)
      : sortedUsers = showingUsers.sort((a, b) => a[value] < b[value] ? 1 : -1)

    newObjext[value] = !isSortedType[value];

    setIsSortedType(newObjext);
    setShowingUsers(sortedUsers);
  }

  function showUserInfo(id) {
    let searchebleUser = users.find(user => user.id === id);
    setuserInfo(searchebleUser);
  }

  function paginateUsers(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return (
    <>
      <table className='table table-bordered table-hover'>
        <TableHead
          handleClick={getValueAndSort}
          isSortedType={isSortedType}
        />
        <tbody>
          {
            showingUsers.map(user => {
              return (
                <TableRow
                  key={user.id.toString()}
                  id={user.id}
                  firstName={user.firstName}
                  lastName={user.lastName}
                  email={user.email}
                  phone={user.phone}
                  clickEvent={showUserInfo}
                />)
            })
          }
        </tbody>
      </table>

      <Pagination pages={Math.ceil(users.length / userPerPage)} handleClick={paginateUsers} />

      {isLoading && <div>Loading data</div>}

      {userInfo &&
        <UserInfo
          firstName={userInfo.firstName}
          description={userInfo.description}
          address={userInfo.address}
        />}
    </>
  )
}