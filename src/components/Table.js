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
  const userPerPage = 5;

  // const [sortedType, setSortedType] = useState({
  //   id: true,
  //   name: true,
  //   phone: true,
  //   email: true
  // });

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(data => setUsers(data))
      .catch(err => console.log('The Error is : ' + err));

    setIsLoading(false);
  }, []);


  function getValueAndSort(value) {
    // let sortType = sortedType[value];
    // let copiedArray = users.slice();
    // let sorteredUsers = [];
    // let newObjext = Object.assign({}, sortedType);

    // sortType
    //   ? sorteredUsers = copiedArray.sort((a, b) => a[value] > b[value] ? 1 : -1)
    //   : sorteredUsers = copiedArray.sort((a, b) => a[value] < b[value] ? 1 : -1)

    // for (let key in newObjext) {
    //   if (newObjext[key])
    //     newObjext[key] = !value
    // }

    // let updatedValues = Object.assign()
    // setUsers(sorteredUsers);
    // setSortedType();
    // console.log(newObjext);
  }

  function showUserInfo(id) {
    let searchebleUser = users.find(user => user.id === id);
    setuserInfo(searchebleUser);
  }

  const indexOfLastUser = currentPage * userPerPage;
  const indexOfFirstUser = indexOfLastUser - userPerPage;
  const showingUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  function paginateUsers(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return (
    <>
      <table className='table table-bordered table-hover'>
        <TableHead
          handleClick={getValueAndSort}
        />
        <tbody>
          {
            showingUsers.map(user => {
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

      <Pagination pages={users.length / userPerPage} handleClick={paginateUsers} />

      {isLoading && <div>Loading data</div>}

      {userInfo &&
        <UserInfo
          name={userInfo.name}
          catchPhrase={userInfo.company.catchPhrase}
          address={userInfo.address}
        />}
    </>
  )
}