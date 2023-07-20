import  express  from "express";
import { guardarTestimonial } from "../controllers/testimonialControllers.js";
import { paginaInicio,
     paginaNosotros,
     paginaTestimoniales,
     paginaViajes,
     paginaDetalleViaje,
} 
from "../controllers/paginasControllers.js";

let router = express.Router();

router.get('/',paginaInicio );
router.get('/nosotros', paginaNosotros); 
router.get('/viajes',paginaViajes);
router.get('/viajes/:slug',paginaDetalleViaje);
router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales', guardarTestimonial);

export default router;