import { productosRouter } from '@modules/productos/infra/http/routes/productos.routes';
import { vehiclesRouter } from '@modules/vehicles/infra/http/routes/vehicles.routes';
import { Router } from 'express';


const router = Router();

router.use('/vehicles', vehiclesRouter);
router.use('/productos', productosRouter);

export default router;
