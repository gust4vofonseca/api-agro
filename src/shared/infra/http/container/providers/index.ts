import { IDateProvider } from "@shared/providers/DateProvider/IDateProvider";
import { DayjsDateProvider } from "@shared/providers/DateProvider/implementations/DaysjsDateProvider";
import { container } from "tsyringe";



container.registerSingleton<IDateProvider>("DateProvider", DayjsDateProvider);
