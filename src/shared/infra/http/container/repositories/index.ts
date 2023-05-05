import { IProductosRepository } from "@modules/productos/infra/repositories/IProductosRepository";
import { ProductosRepository } from "@modules/productos/infra/typeorm/repositories/ProductosRepository";
import { ISaleProductRepository } from "@modules/sale/infra/repositories/ISaleProductRepository";
import { ISaleRepository } from "@modules/sale/infra/repositories/ISaleRepository";
import { SaleProductRepository } from "@modules/sale/infra/typeorm/repositories/SaleProductRepository";
import { SaleRepository } from "@modules/sale/infra/typeorm/repositories/SaleRepository";
import { IUserRepository } from "@modules/users/infra/repositories/IUserRepository";
import { IUserTokensRepository } from "@modules/users/infra/repositories/IUserTokensRepository";
import { UserRepository } from "@modules/users/infra/typeorm/repositories/UserRepository";
import { UserTokensRepository } from "@modules/users/infra/typeorm/repositories/UserTokensRepositoty";
import { IVehiclesRepository } from "@modules/vehicles/infra/repositories/IVehiclesRepository";
import { VehiclesRepository } from "@modules/vehicles/infra/typeorm/repositories/VehiclesRepository";
import { container } from "tsyringe";


container.registerSingleton<IUserRepository>(
    'UserRepository',
    UserRepository,
);

container.registerSingleton<IUserTokensRepository>(
    'UserTokensRepository',
    UserTokensRepository,
);

container.registerSingleton<IProductosRepository>(
    'ProductosRepository',
    ProductosRepository,
);

container.registerSingleton<IVehiclesRepository>(
    'VehiclesRepository',
    VehiclesRepository,
);

container.registerSingleton<ISaleRepository>(
    'SaleRepository',
    SaleRepository,
);

container.registerSingleton<ISaleProductRepository>(
    'SaleProductRepository',
    SaleProductRepository,
);