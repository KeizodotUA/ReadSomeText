import axios from 'axios';

const headers = { 'Content-Type': 'application/json' };

const base = {
    baseURL: "https://baconipsum.com/api",
    headers,
  };
  
  const APIInstance = axios.create(base);

  export default APIInstance;