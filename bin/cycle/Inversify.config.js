"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const inversify_1 = require("inversify");
const Types_1 = require("./Types");
const ServiceA_1 = require("./ServiceA");
const ServiceB_1 = require("./ServiceB");
const container = new inversify_1.Container();
exports.container = container;
container.bind(Types_1.Types.ServiceA).to(ServiceA_1.ServiceA);
container.bind(Types_1.Types.ServiceB).to(ServiceB_1.ServiceB);
//# sourceMappingURL=Inversify.config.js.map