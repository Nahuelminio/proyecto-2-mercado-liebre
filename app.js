const express = require('express')
const { read } = require('fs')
const path = require('path')

const app=express()

app.use(express.static(path.join(__dirname,'/public')))


app.get('/',(req,res) => {
    res.sendFile(path.resolve(__dirname,'./views/home.html'))
})
app.get('/login',(req,res) => {
    res.sendFile(path.resolve(__dirname,'./views/login.html'))
})
app.get('/registro' , (req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/registro.html'))
})
app.get('/producto' , (req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/producto.html'))
})
app.listen(process.env.PORT || 3009, () => { 
    console.log('servidor corriendo en el puerto 3009')
})

