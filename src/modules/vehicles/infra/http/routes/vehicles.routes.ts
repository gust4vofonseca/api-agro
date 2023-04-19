import { Router } from "express";
import { CreateVehiclesController } from "../controllers/CreateVehiclesController";
import { UpdateVehiclesController } from "../controllers/UpdateCehiclesController";
import { DeleteVehiclesController } from "../controllers/DeleteVehiclesController";
import { ListAllVehiclesController } from "../controllers/ListAllVehiclesController";
import { FreightController } from "../controllers/FreightController";


const vehiclesRouter = Router();


const createVehiclesController = new CreateVehiclesController();
const updateVehiclesController = new UpdateVehiclesController();
const deleteVehiclesController = new DeleteVehiclesController();
const listAllVehiclesController = new ListAllVehiclesController();
const freightController = new FreightController();


vehiclesRouter.post('/create', createVehiclesController.handle);
vehiclesRouter.post('/update', updateVehiclesController.handle);
vehiclesRouter.post('/delete/:id', deleteVehiclesController.handle);
vehiclesRouter.get('/', listAllVehiclesController.handle);
vehiclesRouter.post('/freight', freightController.handle);

export {
    vehiclesRouter
}