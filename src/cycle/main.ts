import "reflect-metadata";
import { Container, injectable, inject } from "inversify";
import {global} from "./Global"
const container = new Container();
global.container = container;

import {TYPE} from "./TYPE"
import {ServiceB} from "./ServiceB"
import {ServiceA} from "./ServiceA"

container.bind<ServiceA>(TYPE.ServiceA).to(ServiceA).inSingletonScope();
container.bind<ServiceB>(TYPE.ServiceB).to(ServiceB).inSingletonScope();

console.debug("--1");
const serviceA:ServiceA = container.get(TYPE.ServiceA);
serviceA.test();

console.debug("--2");
const serviceB:ServiceB = container.get(TYPE.ServiceB);
serviceB.test();