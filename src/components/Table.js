import React, { useState, useEffect } from 'react';
import TableHead from './TableHead.js';
import TableRow from './TableRow.js';
import UserInfo from './UserInfo.js';
import Pagination from './Pagination.js';
import Loader from './Loader.js';
import Filter from './Filter.js';
import AddRow from './AddRow.js';
import DataSizeButtons from './DataSizeButtons.js';

export default function Table() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userInfo, setuserInfo] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [showingUsers, setShowingUsers] = useState([]);
  const userPerPage = 10;
  const [isSortedType, setIsSortedType] = useState({
    id: true,
    firstName: true,
    lastName: true,
    phone: true,
    email: true
  });
  const [isFilter, setIsFilter] = useState(false);
  const [isBigDataLoading, setIsBigDataLoading] = useState(false);

  //Handling Form
  const [idValue, setIdValue] = useState('');
  const [firsNameValue, setFirsNameValue] = useState('');
  const [lastNameValue, setLastNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  //Handling Form


  useEffect(() => {
    setIsLoading(true);
    let dataSize = '';

    isBigDataLoading
      ? dataSize = 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'
      : dataSize = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';

    fetch(dataSize)
      .then(resp =>
        resp.json()
      )
      .then(data => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch(err => alert('Error ' + err));
  }, [isBigDataLoading]);


  useEffect(() => {
    const indexOfLastUser = currentPage * userPerPage;
    const indexOfFirstUser = indexOfLastUser - userPerPage;
    let showUsers = [];

    if (!isFilter) {
      showUsers = users.slice(indexOfFirstUser, indexOfLastUser);
    } else {
      showUsers = showingUsers.slice(indexOfFirstUser, indexOfLastUser);
    }
    setShowingUsers(showUsers);
  }, [users, currentPage, isFilter]);

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

  function paginateUsers(e, pageNumber) {
    setCurrentPage(pageNumber);
  }

  function filterRows(e, text) {
    e.preventDefault();
    let re = new RegExp(text, 'ig');
    // eslint-disable-next-line
    let filteredArrayUsers = users.filter(user => {
      for (const prop in user) {
        if (prop !== 'description' && re.test(user[prop])) {
          return user
        }
      }
    });
    setIsFilter(!isFilter);
    setShowingUsers(filteredArrayUsers);
  }

  function clearForm() {
    setIdValue('');
    setFirsNameValue('');
    setLastNameValue('');
    setEmailValue('');
    setPhoneValue('');
  }

  function showMeMagick(e) {
    e.preventDefault();

    let newRow = [{
      id: idValue,
      firstName: firsNameValue,
      lastName: lastNameValue,
      email: emailValue,
      phone: phoneValue,
      description: "Not specified",
      address: {
        city: 'Not specified',
        zip: 'Not specified',
        streetAddress: 'Not specified',
        state: 'Not specified'
      }
    }];

    let withNewUser = [...newRow, ...users];

    setUsers(withNewUser);
    clearForm();
  }

  let pages = 0;
  isFilter
    ? pages = Math.ceil(showingUsers.length / userPerPage)
    : pages = Math.ceil(users.length / userPerPage)

  return (
    <>
      <Filter handleSubmit={filterRows} />
      <AddRow
        idValue={idValue}
        changeId={setIdValue}
        firsNameValue={firsNameValue}
        changeFName={setFirsNameValue}
        lastNameValue={lastNameValue}
        changeLName={setLastNameValue}
        emailValue={emailValue}
        changeEmail={setEmailValue}
        phoneValue={phoneValue}
        changePhone={setPhoneValue}
        showMeMagick={showMeMagick}
      />
      <DataSizeButtons handleClick={setIsBigDataLoading} />
      {isLoading && <Loader />}
      <table className='table table-bordered border-white table-hover'>
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

      <Pagination pages={pages} currentPage={currentPage} handleClick={paginateUsers} />

      {userInfo &&
        <UserInfo
          firstName={userInfo.firstName}
          description={userInfo.description}
          address={userInfo.address}
        />}
    </>
  )
}