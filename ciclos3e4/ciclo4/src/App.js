import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Home} from './pages/Home/';
import {VisualizarCliente} from './pages/Cliente/VisualizarCliente';
import { Menu } from './pages/components/Menu';
import { VisualizarServico } from './pages/Servico/VisualizarServico';
import {Servico} from './pages/Servico/Servico';
import { Cadastrar } from './pages/Servico/Cadastrar';
import { Editar } from './pages/Servico/Editar';
import { VisualizarPedido } from './pages/Pedido/VisualizarPedido';
import { Cliente } from './pages/Cliente/Cliente';
import { Editarcliente } from './pages/Cliente/Editar';
import { Cadastrarcliente } from './pages/Cliente/Cadastrar';
import { Cadastrarpedido } from './pages/Pedido/Cadastrar';
import { Editarpedido } from './pages/Pedido/Editar';
import { Pedido } from './pages/Pedido/Pedido';



function App() {
  return (
    <div> 
    <Menu/>
     <Router>
       <Switch>
         <Route exact path="/" component={Home} />
         <Route  path="/visualizarcliente" component={VisualizarCliente} />
         <Route path="/visualizarservico" component={VisualizarServico}/>
         <Route path="/servico/:id" component={Servico}/>
         <Route path="/cadastrarservico" component={Cadastrar}/>
         <Route path="/editarservico/:id" component={Editar}/>
         <Route path="/visualizarpedido/" component={VisualizarPedido}/>
         <Route path="/cliente/:id" component={Cliente}/>
         <Route path="/editarcliente/:id" component={Editarcliente}/>
         <Route path="/cadastrarcliente" component={Cadastrarcliente}/>
         <Route path="/cadastrarpedido" component={Cadastrarpedido}/>
         <Route path="/pedido/:id" component={Pedido}/>
         <Route path="/editarpedido" component={Editarpedido}/>
        
         
         
       </Switch>
     </Router>
    </div>
  );
}

export default App;
