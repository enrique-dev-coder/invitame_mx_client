import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRoutes, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

// routes
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const tokenExists = async () => {
    return new Promise((resolve, reject) => {
      const token = Cookies.get('token');
      if (token) {
        resolve(true); // Resuelve true si el token existe
      } else {
        reject(new Error('Token does not exist')); // Rechaza con un error si el token no existe
      }
    });
  };

  // estar al pendiente si es autenticado para ejecutar la funcion
  // en el logout es solo cambiar el selector de redux a false
  useEffect(() => {
    const checkToken = async () => {
      tokenExists()
        .then(() => {
          navigate('/');
        })
        .catch(() => navigate('/login'));
    };
    checkToken();
  }, [isAuthenticated]);

  return useRoutes([MainRoutes, AuthenticationRoutes]);
}
