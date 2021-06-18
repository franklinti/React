import logo from '../../assets/cagece.jpg';
import React, { useState} from 'react';
import { Link,Redirect } from 'react-router-dom';
import '../../pages/SignIn/signin.css';

function SignIn() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function registrar(e) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Coolie","$2b$04$qBwXjUB9v2Da00Z0VEOjwuHXa2Sgqri5RM54lwv4c.//eJ9kiCf2u")
    var raw = JSON.stringify({
        "email":email,
        "senha":senha
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://localhost:3001/login", requestOptions)
        .then(response => response.json())
       // .then(response => { setUsuarioSession({usuarioSession:response || [],redirect:true})})
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
        
        e.preventDefault();//evitar varias resusicoes
    }
  return (
    
    <div className="container-center">
        <div className="login">
            <div className="login-area">
                <img src={logo} alt="logomarca" />
            </div>
            <form onSubmit={registrar}>
                <h1>Autenticar</h1>
                <input type="text" placeholder="e-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
               
                <button type="submit">Entrar</button>
            </form>
            <Link to="/registrar">Nao possui conta? Cadastre-se.</Link>
        </div>
    </div>
);
}

export default SignIn;