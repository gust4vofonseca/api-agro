import { Router } from "express";
import { CreateVehiclesController } from "../controllers/CreateVehiclesController";
import { UpdateVehiclesController } from "../controllers/UpdateCehiclesController";
import { DeleteVehiclesController } from "../controllers/DeleteVehiclesController";
import { ListAllVehiclesController } from "../controllers/ListAllVehiclesController";
import { FreightController } from "../controllers/FreightController";
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";
import { ensureAdmin } from "@shared/infra/http/middlewares/ensureAdmin";


const vehiclesRouter = Router();


const createVehiclesController = new CreateVehiclesController();
const updateVehiclesController = new UpdateVehiclesController();
const deleteVehiclesController = new DeleteVehiclesController();
const listAllVehiclesController = new ListAllVehiclesController();
const freightController = new FreightController();


vehiclesRouter.post('/create', ensureAuthenticated, ensureAdmin, createVehiclesController.handle);
vehiclesRouter.post('/update', ensureAuthenticated, ensureAdmin, updateVehiclesController.handle);
vehiclesRouter.post('/delete/:id', ensureAuthenticated, ensureAdmin, deleteVehiclesController.handle);
vehiclesRouter.get('/', listAllVehiclesController.handle);
vehiclesRouter.post('/freight', freightController.handle);

export {
    vehiclesRouter
}