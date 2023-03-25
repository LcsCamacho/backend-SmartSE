//imports
import express from 'express'
import cors from 'cors'
import { routerUsuario } from './routes/usuarioRoute';
import { routerAbastecimento } from './routes/abastecimentoRoute';
import { routerVeiculo } from './routes/veiculoRoute';

//app
const app = express();
app.use(cors());
app.use(express.json());

//rotas
app.use(routerUsuario)
app.use(routerAbastecimento)
app.use(routerVeiculo)

app.listen(3000, () => {
    console.log('Server running on port 3000')
});