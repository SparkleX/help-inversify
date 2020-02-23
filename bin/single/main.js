"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const Inversify_config_1 = require("./Inversify.config");
const ServiceA_1 = require("./ServiceA");
const ServiceB_1 = require("./ServiceB");
let a = Inversify_config_1.container.get(ServiceA_1.ServiceA);
a.test();
let a2 = Inversify_config_1.container.get(ServiceA_1.ServiceA);
a2.test();
let b1 = Inversify_config_1.container.get(ServiceB_1.ServiceB);
b1.test();
//# sourceMappingURL=main.js.map