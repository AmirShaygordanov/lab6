import React from 'react'
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';

function Reg({ propName, propPassword, propEmail, account, setAccount }) {
  const [name, setName] = React.useState(propName);
  const [password, setPassword] = React.useState(propPassword);
  const [email, setEmail] = React.useState(propEmail);
  const [nameIsValid, setNameIsValid] = React.useState(validateName(name));
  const [passwordIsValid, setPasswordIsValid] = React.useState(validatePassword(password));
  const [emailIsValid, setEmailIsValid] = React.useState(validateEmail(propEmail));

  function validateEmail(email) {
    const regExp = /.+@.+\..+/i;
    if (email.match(regExp)) {
      return true;
    }
  }

  function validateName(name) {
    return name.length >= 4;
  }
  function validatePassword(password) {
    return +password.length >= 4;
  }
  function onNameChange(e) {
    const val = e.target.value;
    const valid = validateName(val);
    setName(val);
    setNameIsValid(valid);
  }
  function onPasswordChange(e) {
    const  val = e.target.value;
    const  valid = validatePassword(val);
    setPassword(val);
    setPasswordIsValid(valid);
  }
  function onEmailChange(e) {
    const  val = e.target.value;
    const  valid = validateEmail(val);
    setEmail(val);
    setEmailIsValid(valid);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (nameIsValid === true && passwordIsValid === true && emailIsValid === true) {
      setAccount([...account, { id: uuid(), name: name, password: password }]);
    }
  }



const navigate = useNavigate();
  return (
    <div className='container'>
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
      <form onSubmit={handleSubmit}>
        <p><label>Имя:<br />
          <input className = "inputs" value={name} onChange={onNameChange} />
        </label>
        </p>
        <p>
          <label>Почта:<br />
          <input className = "inputs" value={email} onChange={onEmailChange} />
          </label>
        </p>
        <p>
          <label>Пароль:<br />
          <input className = "inputs" value={password} onChange={onPasswordChange} />
          </label>
        </p>
        <input type="submit" className = "btnTITLE" value="Зарегистрироваться" />
      </form>
    </div>
  );
}

export default Reg;
