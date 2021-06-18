import React from 'react';
import './header.css';


function Home() {
    return (
      <nav class="container">
            <h1>Atendimento</h1>
            <div id="menu"  >
            <ul id="ul">
              <li><a href="#">Home</a></li>
              <li><a href="../login">Login</a></li>
              <li><a href="../usuario">Cadastro</a></li>
            </ul>
            </div>
        </nav>
      
    );
  }
  
  export default Home;