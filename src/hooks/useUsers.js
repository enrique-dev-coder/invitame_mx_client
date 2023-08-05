import { useState, useEffect, useCallback } from 'react';

import { httpGetAllUsers, httpPostUser } from './requests';

const useUsers = () => {
  const [users, setUsers] = useState([]);

  const getUsers = useCallback(async () => {
    const data = await httpGetAllUsers();
    setUsers(data);
  }, []);

  const addUser = useCallback(
    async (newUserData) => {
      try {
        // Realizar la solicitud POST para agregar el nuevo usuario
        const response = await httpPostUser(newUserData);
        if (response.ok) {
          // Si la solicitud fue exitosa, actualizar la lista de usuarios
          getUsers();
        } else {
          console.error('Error al agregar el usuario:', response);
        }
      } catch (error) {
        console.error('Error al agregar el usuario:', error);
      }
    },
    [getUsers]
  );

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return {
    users,
    addUser
  };
};

export default useUsers;
