import { Router } from "express";
import { CreateProductosController } from "../controllers/CreateProductosController";
import { UpdateProductosController } from "../controllers/UpdateProductosController";
import { DeleteProductosController } from "../controllers/DeleteProductosController";
import { ListAllProductosController } from "../controllers/ListAllProductosController";


const productosRouter = Router();


const createProductosController = new CreateProductosController();
const updateProductosController = new UpdateProductosController();
const deleteProductosController = new DeleteProductosController();
const listAllProductosController = new ListAllProductosController();


productosRouter.post('/create', createProductosController.handle);
productosRouter.post('/update', updateProductosController.handle);
productosRouter.post('/delete/:id', deleteProductosController.handle);
productosRouter.get('/', listAllProductosController.handle);

export {
    productosRouter
}