import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";
import LogOut from '../LogOut/LogOut';


export default function LogIn() {

  let navigate = useNavigate();

  const [input, setInput] = useState({
    username:'',
    password:''
  })
  
  const [error, setError] = useState('');

  function handleChange(e){
    setInput({
      ...input,
      [e.target.name]:e.target.value
    })
  }

  async function onSubmit(e){
    e.preventDefault()

    if(input.username && input.password){
      const login = await axios({
        method: "post",
        url: "http://localhost:3001/authentication/login",
        data: input,
        headers: { "X-Requested-With": "XMLHttpRequest" },
        withCredentials: true,
      })
      .then((res) => {
        return res;
      })
      .catch((error) => console.log(error));

      
      let {log_in, id, name, lastname, type, profile_pic} = login.data
      
      
      if(log_in){
        localStorage.setItem("id", id)
        localStorage.setItem('name', name)
        localStorage.setItem('lastname', lastname)
        localStorage.setItem('type', type)
        localStorage.setItem('profile_pic', profile_pic)
        navigate('/home')
      }

      if(typeof login.data === 'string'){
        setError(login.data)
      }



    }else{
      setError('Faltan datos')
    }

  }

    return (
        <div>
          <form onSubmit={onSubmit}>
            <div>
              <p>Usuario: </p>
              <input 
                type='text' 
                name='username' 

                value={input.username}
                onChange={handleChange}
              />
            </div>
            <div>
              <p>Contraseña: </p>
              <input 
                type='password' 
                name='password' 

                value={input.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <button type="submit">Ingresar</button>
            </div>
            <div>
              <p>¿Todavia no sos usuario? <Link to='/sign_up'>Registrate ahora!</Link></p>
            </div>
          </form>
          <p>{error}</p>
          <Link to='/home'>
           O entra como invitado
          </Link>
          <LogOut />
        </div>
  )
}
// OPCION "Sign Up" abajo de todo
