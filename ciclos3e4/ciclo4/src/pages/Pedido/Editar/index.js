import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {Alert, Button, Container, Form, FormGroup, Input, Label, Spinner} from 'reactstrap'
import { api } from '../../../config';

export const Editarpedido= (props) =>{

    const [id] = useState(props.match.params.id);
    const [idCliente, setIdCliente] =useState('');
    const [idServico, setIdServico] =useState('');
    const [valor, setValor] =useState('');
    const [data, setData] =useState('');

    const [status, setStatus] = useState({
        formSave: false,
        type: '',
        message: ''
    });

    const edtPedido = async e =>{
        e.preventDefault();
        console.log("Editar")
    

        const headers = {
        'Content-type':'application/jason'
        };

        await axios.put(api+"editarpedido",{id,idCliente,idServico,valor,data},{headers})
        .then((response)=>{
            //console.log(response.data.error);
            //console.log(response.data.message);
            if(response.data.error){
                setStatus({
                    formSave: false,
                    type: 'error',
                    message: response.data.message
                });
            }else{
                setStatus({
                    formSave: false,
                    type: 'success',
                    message: response.data.message
                });
            }
        })
        .catch(()=>{
            setStatus({
            type:'error',
            message:'Erro:Não foi possível conectar a API.'
            });
        });
    }

    useEffect(() => {
        const getPedido = async () => {
            await axios.get(api + "/pedido/" + id)
                .then((response) => {
                    console.log(response.data.pedido);
                    
                    setIdCliente(response.data.pedido.idcliente);
                    setIdServico(response.data.pedido.idservico);
                    setValor(response.data.pedido.valor);
                    setData(response.data.pedido.data);
                    
                }).catch(() => {
                    console.log("Erro: Não foi possível conectar a API.")

                })
        }
        getPedido();

    }, [id]);

    return(
        <div>
            <Container>
                <div className="d-flex">
                    <div className="m-auto p-2">
                        <h1>Editar um pedido</h1>
                    </div>

                    <div className="p-2">
                    <Link to={"/visualizarpedido/"}
                     className="btn btn-outline-primary btn-sm mr-1">Listar</Link>
                     <Link to={"/pedido/"+id}
                     className="btn btn-outline-primary btn-sm mr-1">Consultar</Link>
                    </div>
                </div>

                {status.type ==='error' ? <Alert color="danger">{status.message}</Alert>:""}
                {status.type ==='sucsess' ? <Alert color="success">{status.message}</Alert>:""}
                
                <Form className="p-2" onSubmit={edtPedido}>
                    
                        

                    <FormGroup className="p-2">
                        <Label>IdCliente</Label>
                        <Input type="text" name="idcliente" placeholder="Id do cliente"  value={idCliente} onChange={e => setIdCliente(e.target.value)}/>
                    </FormGroup>

                    <FormGroup className="p-2">
                        <Label>IdServiço</Label>
                        <Input type="text" name="idserviço" placeholder="Id do serviço"  value={idServico} onChange={e => setIdCliente(e.target.value)}/>
                    </FormGroup>

                    <FormGroup className="p-2">
                        <Label>Valor</Label>
                        <Input type="text" name="valor" placeholder="Valor do pedido"  value={valor} onChange={e => setValor(e.target.value)}/>
                    </FormGroup>

                    <FormGroup className="p-2">
                        <Label>Data</Label>
                        <Input type="text" name="data" placeholder="Data do pedido"  value={data} onChange={e => setIdCliente(e.target.value)}/>
                    </FormGroup>

                    {status.formSave ?
                    <Button type="submit" outline color="warning" disabled>Salvando...
                    <Spinner size="sm" color="warning"/></Button>:
                    <Button type="submit" outline color="warning">Salvar</Button>}
                </Form>


            </Container>
        </div>
    )

}