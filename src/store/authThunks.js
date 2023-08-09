import { httpGetAuthToken } from 'hooks/requests';
import jwtDecode from 'jwt-decode';
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
      const decodedToken = jwtDecode(response.token); // Decode token
      dispatch({ type: 'LOGIN', user: decodedToken }); // update user
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
      const decodedToken = jwtDecode(token);
      dispatch({ type: 'LOGIN', user: decodedToken }); // update user
    }
  };
};
export const logoutUser = () => {
  return (dispatch) => {
    // Eliminar el token de las cookies
    Cookies.remove('token');

    // Despachar la acción de LOGOUT para actualizar el estado
    dispatch({ type: 'LOGOUT' });
  };
};
