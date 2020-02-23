import "reflect-metadata";
import { Container } from "inversify";
import { provide, buildProviderModule,autoProvide } from "inversify-binding-decorators";

import { Types } from "./Types";
//import { ComponentA} from "./CircleDep/ComponentA";
//import { ComponentB} from "./CircleDep/ComponentB";
import * as ComponentSingleton from "./single/ServiceA";



const container = new Container();
autoProvide(container, ComponentSingleton);

//container.load(buildProviderModule());


//globalContainer.bind<ComponentSingleton>(Types.ComponentSingleton).to(ComponentSingleton);\
//globalContainer.bind<ComponentSingleton>(Types.ComponentSingleton).toSelf().inSingletonScope();
//globalContainer.bind<ComponentA>(Types.ComponentA).to(ComponentA);
//globalContainer.bind<ComponentB>(Types.ComponentB).to(ComponentB);

//myContainer.bind<Weapon>(TYPES.Weapon).to(Katana);
//myContainer.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken);

export { container };