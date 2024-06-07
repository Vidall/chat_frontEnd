import { FaUser, FaLock } from 'react-icons/fa'
import { useState } from 'react'

import "./Login.css"
import { login } from '../../useCases/login';

function Login() {
    const [userName, setUserName] = useState("");
    // const [password, setPassword] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = {
          userName: event.target.elements.userName.value,
          password: event.target.elements.userName.password
        }
        alert('Bem vindo ' + formData.userName)
    }

    const handleChangeUsername = (event) => {
        setUserName(event.target.value);

    }
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleClear = (event) => {
        event.preventDefault()
        setUserName('')
        setPassword('')
    }


    const handleClick = async (event) => {
        event.preventDefault();
        if (userName === ''){
          alert('Nome de usuário obrigatório')
        }else {
          login(userName)
        }
    }

  return (
    <div className="login">
        <div className='container'>
        <form onSubmit={handleSubmit}>
            <h1>Acesse o chat {name}</h1>
            <div className='input-field'>
                <input type="text" placeholder='Usuário'
                onChange={handleChangeUsername}
                value={userName}/>
                <FaUser className='icon'/>
            </div>

            {/* Password Field - resources */}
            {/* <div className='input-field'>
                <input type="password" placeholder='Senha'
                onChange={handleChangePassword}
                value={password}/>
                <FaLock className='icon'/>
            </div> */}

            {/* <div className="recall-forget">

                <label>
                    <input type="checkbox" id='lembrar'/>Lembre de mim
                </label>
                <a href="#">Esqueceu a senha?</a>
            </div> */}

            <div className='buttons'>
                <button className='button-cancel'
                onClick={handleClear} type='reset'>Cancelar</button>

                <button className='button-login' onClick={handleClick} type='submit'>Login</button>
            </div>

            {/* Create account - resources */}
            {/* <div className="signup-link">
                <p>
                    Não tem uma conta?
                    <a href="#">Registrar</a>
                </p>
            </div> */}
        </form>
    </div>
    </div>
  )
}

export default Login

