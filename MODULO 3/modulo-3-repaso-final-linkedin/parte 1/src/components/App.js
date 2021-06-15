import React, { useState, useEffect } from 'react';
import UserList from './UserList';
import Filters from './Filters';
import getApiData from '../services/api';
import ls from '../services/local-storage';

const App = () => {
  const [users, setUsers] = useState(ls.get('users', []));
  const [filterText, setFilterText] = useState(/*ls.get('filterText', '')*/ 'Maricarmen');
  const [filterGender, setFilterGender] = useState(ls.get('filterGender', ''));
  // const [filterCity, setFilterCity] = useState(ls.get('filterCity', ''));

  useEffect(() => {
    if (users.length === 0) {
      getApiData().then(usersData => {
        setUsers(usersData);
      });
    }
  }, []);

  useEffect(() => {
    ls.set('users', users);
  }, [users]);

  const filteredUsers = users;

  return (
    <>
      <h1 className="title--big">Directorio de personas</h1>
      <div className="col2">
        <Filters />
        <UserList users={filteredUsers} />
      </div>
    </>
  );
};

export default App;
