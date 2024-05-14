const express = require('express');//Requires the Express library and initializes an Express application.
const app = express();

const {infoCursos} = require('./datos/cursos.js');//Requires a file called cursos.js from a datos folder, presumably containing information about courses.

// Routers
const routerProgramacion = require('./routers/programacion.js');
app.use('/api/cursos/programacion', routerProgramacion);   
                                                                //Sets up routers for different types of courses (programacion and matematicas) by requiring
const routerMatematicas = require('./routers/matematicas.js');  //router modules from respective files (programacion.js and matematicas.js) and mounting
app.use('/api/cursos/matematicas', routerMatematicas);          //them on specific paths (/api/cursos/programacion and /api/cursos/matematicas).

// Routing
app.get('/', (req, res) => {
  res.send('Sevidor Microproyecto 3 💻.');   //message initial page
});

app.get('/api/cursos', (req, res) => { //Defines a route handler for the root path /, which responds with a simple message.     
  res.json(infoCursos);
});

const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () => {
  console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);   //Sets up the server to listen on a specified port (either from the environment variable PORT or defaulting to port 3000), and logs a message indicating that the server is running.   
});