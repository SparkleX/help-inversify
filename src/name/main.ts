import "reflect-metadata";
import { Container, injectable, inject } from "inversify";
import {global} from "./Global"
const container = new Container();
global.container = container;
import {IService} from "./IService"
import {TYPE} from "./TYPE"
import {ServiceB} from "./ServiceB"
import {ServiceA} from "./ServiceA"

container.bind<IService>(TYPE.Service).to(ServiceA).whenTargetNamed("A");
container.bind<IService>(TYPE.Service).to(ServiceB).whenTargetNamed("B");

console.debug("--1");
const serviceA:IService = container.getNamed(TYPE.Service,"A");
serviceA.test();

console.debug("--2");
const serviceB:IService = container.getNamed(TYPE.Service,"B");
serviceB.test();