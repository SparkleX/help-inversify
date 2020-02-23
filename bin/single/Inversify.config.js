"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const inversify_1 = require("inversify");
const ServiceA_1 = require("./ServiceA");
const ServiceB_1 = require("./ServiceB");
const container = new inversify_1.Container();
exports.container = container;
//container.bind<ServiceA>(Types.ServiceA).to(ServiceA);
container.bind(ServiceA_1.ServiceA).toSelf().inSingletonScope();
container.bind(ServiceB_1.ServiceB).toSelf().inSingletonScope();
//# sourceMappingURL=Inversify.config.js.map