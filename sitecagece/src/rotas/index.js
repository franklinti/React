//switch para chamar uma pagina por vez
import {Switch} from 'react-router-dom';

//import o arquivo Rotas.js
import Route from './Rotas'

//importa arquivos de login e cad_usuario dentro do seu respectivo dir
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';

export default function Rotas(){
    return(
        <Switch>
            <Route exact path="/" component={SignIn}/>
            <Route exact path="/registrar" component={SignUp}/>
            <Route exact isPrivate path="/dashboard" component={Dashboard}/>
        </Switch>
    )
}