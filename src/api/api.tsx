import axios from 'axios';
interface IUserProps {
  id: string,
  psword: string,
  name?: string,
}
export const login = async (props:IUserProps) => { 
  const req = {
    id: props.id,
    psword: props.psword
  }

  const response = await axios.post(`http://localhost:5000/login`, 
    req
  );  
  return response.data;
}

export const register = async (props:IUserProps) => { 
  const req = {
    id: props.id,
    name: props.name,
    psword: props.psword
  }

  const response = await axios.post(`http://localhost:5000/register`, 
    req
  );  
  return response.data;
}

