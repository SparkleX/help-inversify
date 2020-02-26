import "reflect-metadata";
import { container } from "./Inversify.config";
import { ServiceA } from "./ServiceA";
import { ServiceB } from "./ServiceB";
import { Types } from "./Types";

let a:ServiceA = container.get(Types.ServiceA);
a.test();

let a2:ServiceA = container.get(Types.ServiceA);
a2.test();

let b1:ServiceB = container.get(Types.ServiceB);
b1.test();