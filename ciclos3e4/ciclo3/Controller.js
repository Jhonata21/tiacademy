const express=require('express');
const cors=require('cors');

const models=require('./models');

const app=express();
app.use(cors());
app.use(express.json());

let cliente=models.Cliente;
let servico=models.Servico;
let pedido=models.Pedido;

app.get('/', function(req,res){
    res.send('Olá Mundo!');
})

app.get('/models/cliente.js', function(req,res){
    res.send('Olá cliente!');
})

app.get('/models/pedido.js', function(req,res){
    res.send('Olá pedido!');
})

app.get('/models/servico.js', function(req,res){
    res.send('Olá serviços!');
})

app.post('/servicos', async(req,res)=>{
    await aguardar(3000);

    function aguardar(ms){
        return new Promise((resolve)=>{
            setTimeout(resolve.ms);
        });
    };

    await servico.create(
        req.body
    );
    res.send('Serviço foi inserido!');
});

app.post('/clientes', async(req,res)=>{
    await aguardar(3000);

    function aguardar(ms){
        return new Promise((resolve)=>{
            setTimeout(resolve.ms);
        });
    };

    await cliente.create(
        req.body
    );
    res.send('cliente foi inserido!');
});


app.get('/clientes', async(req,res)=>{
    let create=await cliente.create({
        nome: "Jhonata Palhares",
        endereco: "Rua tupanssi 149",
        cidade: "Maringá",
        uf: "PR",
        nascimento: "1993-01-21"
    });
    res.send('Um novo cliente foi cadastrado');
});

app.get('/pedidos', async(req,res)=>{
    let create=await pedido.create({
        idCliente: 18,
        idServico: 2,
        valor: 4000,
        data: "2021-08-02"
    });
    res.send('Um novo pedido foi realizado!');
});

//Desafio aula 26/08 inserir 5 novos cliente e 10 novos pedidos

app.get('/cliente/9', async(req,res)=>{
    let create=await cliente.create({
        nome: "Maria Rodrigues",
        endereco: "Rua Campo Limpo, 184",
        cidade: "Maringá",
        uf: "PR",
        nascimento: "1994-05-25"
    });
    res.send('Um novo cliente foi cadastrado');
});

app.get('/cliente/10', async(req,res)=>{
    let create=await cliente.create({
        nome: "Julio de Souza",
        endereco: "Rua Maranhão, 178",
        cidade: "Maringá",
        uf: "PR",
        nascimento: "1990-09-26"
    });
    res.send('Um novo cliente foi cadastrado');
});

app.get('/cliente/11', async(req,res)=>{
    let create=await cliente.create({
        nome: "Roberta Melo",
        endereco: "Rua Uruguai, 123",
        cidade: "Maringá",
        uf: "PR",
        nascimento: "1991-08-17"
    });
    res.send('Um novo cliente foi cadastrado');
});

app.get('/cliente/12', async(req,res)=>{
    let create=await cliente.create({
        nome: "Bruno Guimarães",
        endereco: "Rua Francisco Dias, 85",
        cidade: "Maringá",
        uf: "PR",
        nascimento: "1987-02-22"
    });
    res.send('Um novo cliente foi cadastrado');
});

app.get('/cliente/13', async(req,res)=>{
    let create=await cliente.create({
        nome: "Sandra Domingues",
        endereco: "Rua Copacabana, 156",
        cidade: "Maringá",
        uf: "PR",
        nascimento: "1980-08-09"
    });
    res.send('Um novo cliente foi cadastrado');
});

app.get('/pedidos/12', async(req,res)=>{
    let create=await pedido.create({
        idCliente: 20,
        idServico: 1,
        valor: 3000,
        data: "2021-09-07"
    });
    res.send('Um novo pedido foi realizado!');

});

app.get('/pedidos/13', async(req,res)=>{
    let create=await pedido.create({
        idCliente: 22,
        idServico: 2,
        valor: 4000,
        data: "2021-09-07"
    });
    res.send('Um novo pedido foi realizado!');

});

app.get('/pedidos/14', async(req,res)=>{
    let create=await pedido.create({
        idCliente: 24,
        idServico: 3,
        valor: 5000,
        data: "2021-09-07"
    });
    res.send('Um novo pedido foi realizado!');

});

app.get('/pedidos/15', async(req,res)=>{
    let create=await pedido.create({
        idCliente: 25,
        idServico: 1,
        valor: 3000,
        data: "2021-09-07"
    });
    res.send('Um novo pedido foi realizado!');

});

app.get('/pedidos/16', async(req,res)=>{
    let create=await pedido.create({
        idCliente: 18,
        idServico: 2,
        valor: 4000,
        data: "2021-09-07"
    });
    res.send('Um novo pedido foi realizado!');

});

app.get('/pedidos/17', async(req,res)=>{
    let create=await pedido.create({
        idCliente: 20,
        idServico: 3,
        valor: 5000,
        data: "2021-09-07"
    });
    res.send('Um novo pedido foi realizado!');

});

app.get('/pedidos/18', async(req,res)=>{
    let create=await pedido.create({
        idCliente: 22,
        idServico: 2,
        valor: 4000,
        data: "2021-09-07"
    });
    res.send('Um novo pedido foi realizado!');

});

app.get('/pedidos/19', async(req,res)=>{
    let create=await pedido.create({
        idCliente: 24,
        idServico: 2,
        valor: 4000,
        data: "2021-09-07"
    });
    res.send('Um novo pedido foi realizado!');

});

app.get('/pedidos/20', async(req,res)=>{
    let create=await pedido.create({
        idCliente: 18,
        idServico: 3,
        valor: 5000,
        data: "2021-09-07"
    });
    res.send('Um novo pedido foi realizado!');

});

app.get('/pedidos/21', async(req,res)=>{
    let create=await pedido.create({
        idCliente: 25,
        idServico: 1,
        valor: 3000,
        data: "2021-09-07"
    });
    res.send('Um novo pedido foi realizado!');

});

app.get('/pedidos/22', async(req,res)=>{
    let create=await pedido.create({
        idCliente: 25,
        idServico: 2,
        valor: 4000,
        data: "2021-09-08"
    });
    res.send('Um novo pedido foi realizado!');

});

//fim do desafio
app.get('/cliente11', async(req,res)=>{
    let create=await cliente.create({
        nome: "Julio dos Santos",
        endereco: "Rua Paraguai, 325",
        cidade: "Maringá",
        uf: "PR",
        nascimento: "1990-07-17"
    });
    res.send('Um novo cliente foi cadastrado');
});

app.get('/listaservicos', async(req,res)=>{
    await servico.findAll({
        order:[['nome', 'DESC']]
    }).then(function(servicos){
        res.json({servicos})
    });   
});

app.get('/listarclientes', async(req,res)=>{
    await cliente.findAll({
        order:[['nome', 'DESC']]
    }).then(function(clientes){
        res.json({clientes})
    });   
});

app.get('/listarpedido', async(req,res)=>{
    await pedido.findAll({
        order:[['Clienteid', 'DESC']]
    }).then(function(pedido){
        res.json({pedido})
    });   
});


/*app.get('/listapedido', async(req,res)=>{
    await pedido.findAll({
        raw:true
    }).then((pedido)=>{
        res.json({
            pedido
        });
    });   
});
*/


app.get('/ofertas', async(req,res)=>{
    await servico.count('id')
    .then(function(servicos){
        res.json({servicos})
    });   
});

app.get('/servico/:id', async(req,res)=>{
    servico.findByPk(req.params.id)
    .then(servico =>{
        return res.json({
            error:false,
            servico
    });
}).catch(function(erro){
        return res.status(400).json({
            error:true,
            message: "Código não está cadastrado!"
        });
    });
});

app.get('/atualizaservico', async(req, res)=>{
    await servico.findByPk(1)
    .then(servico =>{
        servico.nome='HTML/CSS/JS';
        servico.descricao='Paginas estaticas e dinâmicas estilizadas'
        servico.save();
        return res.json({servico});
    });
});

app.put('/editarservico', (req,res)=>{
    servico.update(req.body,{
        where:{id: req.body.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Serviço foi alterado com sucesso."
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro na alteração do serviço."
        });
    });
});

app.get('/servicospedidos', async(req,res)=>{
    await servico.findByPk(1, {
        include:[{all:true}]
    }).then(servico =>{
        return res.json({servico});
    });
});

app.put('/editarpedido',(req,res)=>{
    pedido.update(req.body,{
       where: {ServicoId: req.body.ServicoId}
    }).then(function(){
        return res.json({
            error: false,
            message: "Pedido modificado com sucesso."
        });
    }).catch(function(erro){
        return res.status(400).json({
        error: true,
        message: "Não foi possivel modificar o pedido."
        });
    });
});

app.get('/excluircliente', async(req,res)=>{
    cliente.destroy({
        where: {id: 2}
    });
});

app.delete('/apagarcliente/:id',(req,res)=>{
    cliente.destroy({
        where: {id: req.params.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Cliente foi excluido com sucesso."
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Não foi possível excluir o cliente."
        });
    });
});

let port=process.env.PORT || 3001;

app.listen(port,(req,res)=>{
    console.log('Servidor ativo');
}) 

