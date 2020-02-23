import "reflect-metadata";
import { Container } from "inversify";
import { provide, buildProviderModule,autoProvide } from "inversify-binding-decorators";

import { Types } from "./Types";
import { ServiceA} from "./ServiceA";
import { ServiceB} from "./ServiceB";



const container = new Container();

//container.bind<ServiceA>(Types.ServiceA).to(ServiceA);
container.bind<ServiceA>(ServiceA).toSelf().inSingletonScope();
container.bind<ServiceB>(ServiceB).toSelf().inSingletonScope();

//globalContainer.bind<ComponentA>(Types.ComponentA).to(ComponentA);

//globalContainer.bind<ComponentB>(Types.ComponentB).to(ComponentB);

//myContainer.bind<Weapon>(TYPES.Weapon).to(Katana);
//myContainer.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken);

export { container };