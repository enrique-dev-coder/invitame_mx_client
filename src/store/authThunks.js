import { httpGetAuthToken } from 'hooks/requests';

import Cookies from 'js-cookie';

// Acción Thunk para el inicio de sesión
// la idea es que se modifique el estado global de manera asincrona con el login del usuario
export const loginUser = (loginData) => async (dispatch) => {
  try {
    const { email, password } = loginData;
    const response = await httpGetAuthToken({ email, password });

    if (response.token) {
      dispatch({ type: 'LOGIN' }); // Despacha la acción de LOGIN
      Cookies.set('token', response.token, { expires: 30, secure: true, sameSite: 'strict' });
    } else {
      console.error('Inicio de sesión fallido:', response.error);
    }
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
  }
};

export const checkAuthentication = () => {
  return (dispatch) => {
    const token = Cookies.get('token'); // Lee el token de la cookie
    if (token) {
      dispatch({ type: 'LOGIN' }); // Actualiza el estado a autenticado
    }
  };
};
