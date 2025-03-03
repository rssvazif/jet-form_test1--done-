
const express = require('express');
const path = require('path');


const app = express();

app.use(express.static(path.join(__dirname,'public')));

app.use(express.json());

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname ,'html_files', 'jet-form.html'));
});

app.get('/jet-form_blog',(req,res)=>{
    res.sendFile(path.join(__dirname,'html_files', 'jet-form_blog.html'));
});

app.get('/jet-form_about',(req,res)=>{
    res.sendFile(path.join(__dirname,'html_files', 'jet-form_about.html'));
});

app.get('/jet-form_sign-up',(req,res)=>{
    res.sendFile(path.join(__dirname,'html_files', 'jet-form_sign-up.html'));
});

app.get('/jet-form_myform',(req,res)=>{
    res.sendFile(path.join(__dirname,'html_files', 'jet-form_myform.html'));
});

app.post('/api',(req,res)=>{
    const data_from_user = req.body;
    console.log(data_from_user);
});

app.listen(3000,()=>{
    console.log('server is listening to 3000 port ...');
});


