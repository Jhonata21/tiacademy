import axios from 'axios';
import { Alert, Container, Table } from "reactstrap"
import { api } from '../../../config';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const VisualizarPedido = () => {

    const [data, setData] = useState([]);
    
    const [status, setStatus] = useState({
        type:'',
        message: ''
    });

    const getPedidos = async() =>{
        await axios.get(api+"/listarpedido")
        .then((response) => {
            console.log(response.data.pedido);
            setData(response.data.pedido);
        })
        .catch(()=>{
            setStatus({
                type:'error',
                message: 'Erro: Não foi possível conectar a API.'
            })    
        });   
    }

    useEffect(()=>{
        getPedidos();
    },[]);

    
    const apagarPedido = async(id) =>{
        console.log(id)

        const headers = {
            'Content-type':'application/jason'
            };        

        await axios.delete(api+"/apagarpedido/"+id,{headers})
        .then((response) => {
            console.log(response.data.error);
            getPedidos();
        })
        .catch(()=>{
            setStatus({
                type:'error',
                message: 'Erro: Não foi possível conectar a API.'
            })    
        });   
    }



    return (
        <div className="p-3">
            <Container>

                <div className="d-flex">
                    <div className="mr-auto p-2">
                        <h1>Informações do Pedido</h1>
                    </div>

                    <div className="p-2">
                        <Link to="/cadastrarpedido" className="btn btn-outline-primary btn-sm">Cadastrar</Link>
                    </div>
                </div>
                <Table striped>

                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>ClienteId</th>
                            <th>ServiçoId</th>
                            <th>Valor</th>
                            <th>Data</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.ClienteId}</td>
                                <td>{item.ServicoId}</td>
                                <td>{item.valor}</td>
                                <td>{item.data}</td>
                                <td className="text-center">
                                    <Link to={"/pedido/" + item.id}
                                        className="btn btn-outline-primary btn-sm mr-1">Consultar</Link>
                                    <Link to={"/editarpedido/" + item.id}
                                        className="btn btn-outline-warning btn-sm mr-1">Editar</Link>
                                    <span className="btn btn-outline-danger btn-sm mr-1" onClick={()=> apagarPedido(item.id)}>Excluir</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}


