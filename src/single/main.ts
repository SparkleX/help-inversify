import "reflect-metadata";
import {container } from "./Inversify.config";
import {ServiceA} from "./ServiceA"
import { ServiceB } from "./ServiceB";

let a:ServiceA = container.get(ServiceA);
a.test();

let a2:ServiceA = container.get(ServiceA);
a2.test();

let b1:ServiceB = container.get(ServiceB);
b1.test();