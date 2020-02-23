import { container } from "./Inversify.config";
import { Types } from "./Types";
import { ComponentSingleton } from "./single/ServiceA";
//import { ComponentB } from "./CircleDep/ComponentB";
//import { ComponentA } from "./CircleDep/ComponentA";

var component:ComponentSingleton = container.get<ComponentSingleton>(ComponentSingleton);
component.test();

/*var component2:ComponentSingleton = globalContainer.get<ComponentSingleton>(Types.ComponentSingleton);
component2.test();*/


//var componentA:ComponentA = globalContainer.get<ComponentA>(Types.ComponentA);
//componentA.test();
//var componentB:ComponentB = globalContainer.get<ComponentB>(Types.ComponentB);
//componentB.test();