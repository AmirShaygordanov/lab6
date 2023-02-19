import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Login({ account, setLogin }) {

  const [name, setName] = React.useState("");
  const [password, setPassword] =  React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name, password);
    account.map((elem) => {
      if (name === elem.name && password === elem.password) {
        setLogin(true);
      }
    });
  }

  function onPasswordChange(e) {
    let val = e.target.value;
    setPassword(val);
  }
  function onNameChange(e) {
    let val = e.target.value;
    setName(val);
  }

  let colorName

  if (name.length >= 4){
    colorName = "green"
  } else if (name.length == 0) {
    colorName = 'black'
  } else {
    colorName = "red"
  }

  let colorPass

  if (password.length >= 4){
    colorPass = "green"
  } else if (password.length == 0) {
    colorPass = 'black'
  } else {
    colorPass = "red"
  }

  const navigate = useNavigate();

  return (
    <div >
      
      <form className='Forms' onSubmit={handleSubmit}>
        <button className='btnICON' onClick={() => navigate(-1)}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke-width='1.5'
          stroke='currentColor'
          class='w-6 h-6'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75'
          />
        </svg>
      </button>
        <p>
          <label>Имя:<br/>
          <input className = "inputs" value={name} onChange={onNameChange}/>
          </label>
        </p>
        <p>
          <label>Пароль:<br/>
          <input className = "inputs" value={password} onChange={onPasswordChange}/>
          </label>
        </p>
        <input type="submit" className = "btnTITLE" value="Авторизоваться" />
      </form>
    </div>
  );
}

export default Login