import React from 'react';
import './header.css';


function Dashboard() {
    return (
      <nav class="container">
            <h1>Atendimento</h1>
            <div id="menu"  >
            <ul id="ul">
              <li><a href="#">Home</a></li>
              <li><a href="../SignUp">Logout</a></li>
              <li><a href="../usuario">Cadastro</a></li>
            </ul>
            </div>
        </nav>
      
    );
  }
  
  export default Dashboard;