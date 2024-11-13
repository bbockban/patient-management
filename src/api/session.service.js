import HTTP_FETCH from '@api/HTTP';

const baseURL = import.meta.env.VITE_PUBLIC_USERS_API;

const fetchPatients = () => HTTP_FETCH(baseURL, {
  method: 'GET',
}).then((data) => data);

export default fetchPatients;