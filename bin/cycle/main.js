"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const Inversify_config_1 = require("./Inversify.config");
const Types_1 = require("./Types");
console.debug(Types_1.Types.ServiceA);
console.debug("--1");
let a1 = Inversify_config_1.container.get(Types_1.Types.ServiceA);
a1.test();
console.debug("--2");
let a2 = Inversify_config_1.container.get(Types_1.Types.ServiceA);
a2.test();
console.debug("--3");
let b1 = Inversify_config_1.container.get(Types_1.Types.ServiceB);
b1.test();
//# sourceMappingURL=main.js.map