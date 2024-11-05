const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const page = require('./public/data/pages.json');
dotenv.config();

const PORTA = process.env.PORTA || 3000;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'view')));
app.use('/components', express.static(path.join(__dirname, 'src', 'components')));
app.use('/scripts', express.static(path.join(__dirname, 'src', 'scripts')));


app.get('/:page', (req, res) =>{
    if (page[req.params.page]){
        res.sendFile(path.join(__dirname, 'view', page[req.params.page]));
    } else{
        res.render('404');
    }
});

app.listen(PORTA, () =>{
    console.log(`Servidor rodando na porta ${PORTA}`);
});
