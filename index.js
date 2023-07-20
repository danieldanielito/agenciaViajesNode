import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

let app = express();

// //Conectar la base de datos
db.authenticate()
    .then(()=>{console.log('base de datos conectada')})
    .catch(error=>console.log(error));



//Definir puerto
let port = process.env.PORT || 4000;

//habilitar pug
app.set('view engine','pug');

//obtener el anio actual
app.use((req,res,next)=>{
    let year = new Date()
    res.locals.actualYear = year.getFullYear();
    console.log(res.locals);
    next();
})
//agregar body parser
app.use(express.urlencoded({extended:true}));


//Definir la carpeta publica
app.use(express.static('public'));

//agregar router
app.use('/',router)


app.listen(port, () => {
    console.log(`el servidor esta funcionando en el puerto ${port}`)
})