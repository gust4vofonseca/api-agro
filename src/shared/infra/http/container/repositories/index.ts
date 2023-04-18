import { IProductosRepository } from "@modules/productos/infra/repositories/IProductosRepository";
import { ProductosRepository } from "@modules/productos/infra/typeorm/repositories/ProductosRepository";
import { IUserRepository } from "@modules/users/infra/repositories/IUserRepository";
import { UserRepository } from "@modules/users/infra/typeorm/repositories/UserRepository";
import { IVehiclesRepository } from "@modules/vehicles/infra/repositories/IVehiclesRepository";
import { VehiclesRepository } from "@modules/vehicles/infra/typeorm/repositories/VehiclesRepository";
import { container } from "tsyringe";


container.registerSingleton<IUserRepository>(
    'UserRepository',
    UserRepository,
);

container.registerSingleton<IProductosRepository>(
    'ProductosRepository',
    ProductosRepository,
);

container.registerSingleton<IVehiclesRepository>(
    'VehiclesRepository',
    VehiclesRepository,
);