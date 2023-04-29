import { productosRouter } from '@modules/productos/infra/http/routes/productos.routes';
import { userRouter } from '@modules/users/infra/http/routes/user.routes';
import { vehiclesRouter } from '@modules/vehicles/infra/http/routes/vehicles.routes';
import { Router } from 'express';


const router = Router();

router.use('/vehicle', vehiclesRouter);
router.use('/products', productosRouter);
router.use('/user', userRouter);

export default router;
