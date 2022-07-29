const express = require('express');
const app = express();

app.use(logger)

app.get('/', (req, res) => {
    res.send('This is the root page')
})

app.get('/user', auth, (req, res) => {
    console.log('user page');
    res.send('This is the user page')
})

function logger(req, res, next){
    console.log('log');
    next()
} 

function auth(req, res, next){
    if(req.query.admin === 'true'){
    next()
     } else { 
        res.send('No Auth')
    }
    
} 

app.listen(3000, () => console.log('server started'))