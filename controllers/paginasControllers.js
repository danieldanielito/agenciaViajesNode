import { Viaje } from '../models/Viaje.js'
import { Testimoniales } from '../models/testimoniales.js';

let paginaInicio =async (req,res)=>{

//consultar 3 viajes del modelo viaje
let promiseDB = [];
promiseDB.push( Viaje.findAll({limit:3}))
promiseDB.push( Testimoniales.findAll({limit:3}))
try {
    let resultado = await Promise.all(promiseDB);
    res.render('inicio',{
        pagina:'Inicio',
        clase: 'home',
        viajes:resultado[0],
        testimoniales:resultado[1]
    })
    console.log(viajes)
} catch (error) {
    console.log(error)
}
 
} 
let paginaNosotros = (req,res)=>{
    res.render('nosotros',{
        pagina:'nosotros'
    })
}
let paginaViajes = async (req,res)=>{
    //Consultar base de datos
    let viajes = await Viaje.findAll();
    console.log(viajes) 

    res.render('viajes',{
        pagina:'Proximos viajes',
        viajes,
    })
}
let paginaTestimoniales = async(req,res)=>{
    try {
        let testimoniales=await Testimoniales.findAll()
        res.render('Testimoniales',{
            pagina:'Testimoniales',
            testimoniales
        })  
    } catch (error) {
        console.log(error)
    }
  }
//muestra un viaje por su slug
let paginaDetalleViaje = async(req,res)=>{
    let { slug }  = req.params;
    
    try {
        let viaje = await Viaje.findOne({where:{slug}})

        res.render('viaje',{
            pagina:'Informacion viaje',
            viaje
        })
            } catch (error) {
        console.log(error)
    }

} 


export {
    paginaInicio,
    paginaTestimoniales,
    paginaViajes,
    paginaNosotros,
    paginaDetalleViaje

}