import "reflect-metadata";
import {container} from "./Inversify.config";
import {ServiceA} from "./ServiceA"
import {ServiceB} from "./ServiceB";
import { Types } from "./Types";

console.debug(Types.ServiceA);

console.debug("--1");
let a1:ServiceA = container.get(Types.ServiceA);
a1.test();
console.debug("--2");
let a2:ServiceA = container.get(Types.ServiceA);
a2.test();
console.debug("--3");
let b1:ServiceB = container.get(Types.ServiceB);
b1.test();

