import { Router } from "express";
import { CreateVehiclesController } from "../controllers/CreateVehiclesController";
import { UpdateVehiclesController } from "../controllers/UpdateCehiclesController";
import { DeleteVehiclesController } from "../controllers/DeleteVehiclesController";
import { ListAllVehiclesController } from "../controllers/ListAllVehiclesController";


const vehiclesRouter = Router();


const createVehiclesController = new CreateVehiclesController();
const updateVehiclesController = new UpdateVehiclesController();
const deleteVehiclesController = new DeleteVehiclesController();
const listAllVehiclesController = new ListAllVehiclesController();


vehiclesRouter.post('/create', createVehiclesController.handle);
vehiclesRouter.post('/update', updateVehiclesController.handle);
vehiclesRouter.post('/delete/:id', deleteVehiclesController.handle);
vehiclesRouter.get('/', listAllVehiclesController.handle);

export {
    vehiclesRouter
}