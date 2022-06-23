const express= require ('express');
const app= express();


app.get('/', (req,rest)=> rest.send("¡Hola Mundo!")) 
app.get('/salida', (req,rest)=> rest.send("¡Adiós!"))
app.listen(3030, () =>console.log('server running in port 3030'))