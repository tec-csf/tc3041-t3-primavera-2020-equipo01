const path = require('path')
const express = require('express')
const {config, engine} = require('express-edge')
const app = new express()

app.use(engine)
app.set('views', `${__dirname}/views`)

app.get('/', (req, res) => {
    //res.sendFile(path.resolve(__dirname, 'paginas/index.html'))
    res.render('index')
})

app.get('/ingresar', (req, res) => {
    //res.sendFile(path.resolve(__dirname, 'paginas/ingresar.html'))
    res.render('ingresar')
})

app.get('/editar', (req, res) => {
    //res.sendFile(path.resolve(__dirname, 'paginas/editar.html'))
    res.render('editar')
})

app.listen(4000, () => {
    console.log('Aplicación corriendo en el puerto 4000')
})
