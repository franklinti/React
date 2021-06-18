import logo from '../../assets/cagece.jpg';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../pages/SignUp/signup.css';

function SignUp() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [senha1, setSenha1] = useState('');

  function registrar(e) {
      if(senha !== senha1){
          alert("Senhas diferentes");
      }else{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
    
        var raw = JSON.stringify({
            "nome": nome,
            "email": email,
            "senha": senha,
            "senha1":senha1,
        });
    
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
    
        fetch("http://localhost:3001/usuario", requestOptions)
            .then(response => response.json())
            .then(response => {
                if (response === "existe") {
                    alert('email ja cadastrado!')
                } else {
                    alert('Cadastrado com sucesso')
                }
            })
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
      }

}
  return (
    <div className="container-center">
        <div className="login">
            <div className="login-area">
                <img src={logo} alt="logomarca" />
            </div>
            <form onSubmit={registrar}>
                <h1>Cadastro</h1>
                <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder="senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
                <input type="text" placeholder="senha" value={senha1} onChange={(e) => setSenha1(e.target.value)} />
                <button type="submit">Cadastrar</button>
            </form>
            <Link to="/">Ja possui conta? Entre.</Link>
        </div>
    </div>
);
}

export default SignUp;