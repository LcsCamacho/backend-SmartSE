//imports
import express from 'express'
import cors from 'cors'
import { routerExample } from './routes/router';

//app
const app = express();
app.use(cors());
app.use(express.json());
app.use(routerExample)


//teste
app.listen(3000, () => {
    console.log('Server running on port 3000')
});