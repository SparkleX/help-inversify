import "reflect-metadata";
import { Container } from "inversify";

import { Types } from "./Types";
import { ServiceA} from "./ServiceA";
import { ServiceB} from "./ServiceB";


const container = new Container();

container.bind<ServiceA>(Types.ServiceA).to(ServiceA).inSingletonScope();
container.bind<ServiceB>(Types.ServiceB).to(ServiceB).inSingletonScope();

export { container };