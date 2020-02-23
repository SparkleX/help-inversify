import "reflect-metadata";
import { Container } from "inversify";

import { Types } from "./Types";
import { ServiceA} from "./ServiceA";
import { ServiceB} from "./ServiceB";

const container = new Container();

container.bind<ServiceA>(Types.ServiceA).to(ServiceA);
container.bind<ServiceB>(Types.ServiceB).to(ServiceB);

//container.bind<ServiceA>(ServiceA).toSelf().inSingletonScope();
//container.bind<ServiceB>(ServiceB).toSelf().inSingletonScope();

export { container };