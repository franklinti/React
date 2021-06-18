import React, { useState, useEffect } from 'react';
import './registro.css';
import logo from '../../assets/cagece.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Registro() {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [estado, setEstado] = useState([]);
    carregarEstados()
    
    //funcao assincrona
    async function carregarEstados() {
        const response = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
        //console.log(response.data) 

        const estados = response.data
        //recebendo componente da lista 
        const lista = document.getElementById('lista-estados')

        //percorrendo lista e inserindo estados no option
        estados.forEach(estado => {
            //criando componente option
            const item = document.createElement('option')
            item.innerText = estado.sigla
            lista.appendChild(item)

        })



    }
    function registrar(e) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "nome": nome,
            "cpf": cpf,
            "dataNascimento": dataNascimento,
            "estado": estado
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:3001/atendimento", requestOptions)
            .then(response => response.json())
            .then(response => {
                if (response == "existe_cpf") {
                    alert("CPF ja cadastrado!")
                } else {
                    alert("Cadastrado com sucesso")
                }
            })
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
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
                    <input type="text" placeholder="CPF" value={cpf} onChange={(e) => setCpf(e.target.value)} />
                    <input type="date" placeholder="01/01/2021" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} />
                    <label>Estados: 
                    <select id="lista-estados">
                    </select>
                    </label>
                    <br></br>
                    <button type="submit">Cadastrar</button>
                </form>
                <Link to="/">Ja possui conta? Entre.</Link>
            </div>
        </div>
    );

}




export default Registro;