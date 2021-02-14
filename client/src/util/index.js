import jwtDecode from 'jwt-decode';

const decodeUser = () => {
  const token = localStorage.getItem("token");
  if(token) {
    return jwtDecode(token);
  }
};

export { decodeUser };