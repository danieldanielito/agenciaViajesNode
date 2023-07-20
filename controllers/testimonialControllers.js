import { Testimoniales } from "../models/testimoniales.js";

let guardarTestimonial =async (req,res)=>{
    //validar...
    let errores = []; 
    let{nombre,correo,mensaje}=req.body;

    if (nombre.trim()===''){
        errores.push({mensaje:'el nombre esta vacio'})
    }      
    if (correo.trim()===''){
        errores.push({mensaje:'el correo esta vacio'})
    }
    if (mensaje.trim()===''){
        errores.push({mensaje:'el mensaje esta vacio'})
    }
    if(errores.length>0){
        let testimoniales=await Testimoniales.findAll()
        //mostrar la vista con errores
        res.render('testimoniales',{
            pagina:'testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        })
    } else {
        //almacenar en la base de datos
        try {
            await Testimoniales.create({
                nombre,correo,mensaje
            })
            res.redirect('/testimoniales')
        } catch (error) {
            console.log(error)
        }

    }

    console.log(req.body)
}

export{
    guardarTestimonial
}
