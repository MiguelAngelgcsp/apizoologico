const express = require('express')
const app = express()
const port = 3000

app.get('/prueba', (req, res)=>{
res.send('¡Hola Briyid Tatiana, Debes tener paciencia! ')

})

app.listen(port, ()=>{
    console.log('La aplicacion se esta ejecutando por el puerto')
})
