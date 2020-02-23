import "reflect-metadata";
import { Container } from "inversify";
import { provide, buildProviderModule,autoProvide } from "inversify-binding-decorators";

import { Types } from "./Types";
import { ServiceA} from "./ServiceA";
import { ServiceB} from "./ServiceB";



const container = new Container();

//container.bind<ServiceA>(ServiceA).toSelf().inSingletonScope();
//container.bind<ServiceB>(ServiceB).toSelf().inSingletonScope();

container.bind<ServiceA>(Types.ServiceA).to(ServiceA).inSingletonScope();
container.bind<ServiceB>(Types.ServiceB).to(ServiceB).inSingletonScope();

export { container };