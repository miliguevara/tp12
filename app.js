const express = require('express');
const app = express();
app.use(express.json());
app.get('/', (req,res)=> res.send('API de prueba - Milagros - TP12'));
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log('Server Milagros running on', PORT));
