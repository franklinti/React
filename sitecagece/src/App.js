import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './context/auth';
import Rota from './rotas';

function App() {
  return(
    <AuthProvider>
        <BrowserRouter>
          <Rota/>
        </BrowserRouter>
    </AuthProvider>
   
        
  )
 
}

export default App;
