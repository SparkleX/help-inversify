"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const inversify_1 = require("inversify");
const inversify_binding_decorators_1 = require("inversify-binding-decorators");
//import { ComponentA} from "./CircleDep/ComponentA";
//import { ComponentB} from "./CircleDep/ComponentB";
const ComponentSingleton = require("./single/ServiceA");
const container = new inversify_1.Container();
exports.container = container;
inversify_binding_decorators_1.autoProvide(container, ComponentSingleton);
//# sourceMappingURL=Inversify.config.js.map