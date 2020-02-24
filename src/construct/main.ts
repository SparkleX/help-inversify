import "reflect-metadata";
import { Container, injectable, inject } from "inversify";
import {global} from "./Global"
const container = new Container();
global.container = container;
import {TYPE} from "./TYPE"
import {ServiceB} from "./ServiceB"
import {ServiceA} from "./ServiceA"

container.bind<ServiceA>(TYPE.ServiceA).to(ServiceA);
container.bind<ServiceB>(TYPE.ServiceB).to(ServiceB);

console.debug("--1");
const serviceA:ServiceA = container.getNamed(TYPE.ServiceA,"A");
serviceA.test();
