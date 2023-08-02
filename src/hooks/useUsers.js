import { useState, useEffect, useCallback } from 'react';

import { httpGetAllUsers } from './requests';

const useUsers = () => {
  const [users, setUsers] = useState([]);

  const getUsers = useCallback(async () => {
    const data = await httpGetAllUsers();
    setUsers(data);
  }, []);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return {
    users
  };
};

export default useUsers;
