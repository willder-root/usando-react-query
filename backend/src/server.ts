import  express from 'express';
require('@dotenvx/dotenvx').config();
import routes  from './route';
import cors from 'cors';
import "./loadConfig"
import "./database"

//config();
const app = express();
app.use(cors({
    origin:'*'
}))


const port = process.env.API_PORT || 9000

app.use(routes);
app.listen(port,()=>{
    console.log(`Servico rodando na porta ${port}`);    
})