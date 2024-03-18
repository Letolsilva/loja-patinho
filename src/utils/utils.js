import Cookies from 'js-cookie';

export const isAuthenticated = () => {
  const token = Cookies.get('jwt');
  console.log(token);
  return !!token; 
};
