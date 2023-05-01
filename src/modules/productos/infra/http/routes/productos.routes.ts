import { Router } from "express";
import { CreateProductosController } from "../controllers/CreateProductosController";
import { UpdateProductosController } from "../controllers/UpdateProductosController";
import { DeleteProductosController } from "../controllers/DeleteProductosController";
import { ListAllProductosController } from "../controllers/ListAllProductosController";
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";
import { ensureAdmin } from "@shared/infra/http/middlewares/ensureAdmin";


const productosRouter = Router();


const createProductosController = new CreateProductosController();
const updateProductosController = new UpdateProductosController();
const deleteProductosController = new DeleteProductosController();
const listAllProductosController = new ListAllProductosController();


productosRouter.post('/create', ensureAuthenticated, ensureAdmin, createProductosController.handle);
productosRouter.post('/update', ensureAuthenticated, ensureAdmin, updateProductosController.handle);
productosRouter.post('/delete/:id', ensureAuthenticated, ensureAdmin, deleteProductosController.handle);
productosRouter.get('/', ensureAuthenticated, listAllProductosController.handle);

export {
    productosRouter
}