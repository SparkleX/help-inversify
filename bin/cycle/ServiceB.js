"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
require("reflect-metadata");
const ServiceA_1 = require("./ServiceA");
const Types_1 = require("./Types");
const inversify_inject_decorators_1 = require("inversify-inject-decorators");
const Inversify_config_1 = require("./Inversify.config");
let { lazyInject } = inversify_inject_decorators_1.default(Inversify_config_1.container);
let ServiceB = class ServiceB {
    constructor() {
        this.count = 0;
    }
    test() {
        console.debug(`ServiceB.test : ${this.count}`);
        console.debug('a');
        console.debug(this.serviceA == undefined);
        this.serviceA.method();
        console.debug('b');
        this.count++;
    }
    method() {
        console.debug('ServiceB.method');
    }
};
__decorate([
    lazyInject(Types_1.Types.ServiceA),
    __metadata("design:type", ServiceA_1.ServiceA)
], ServiceB.prototype, "serviceA", void 0);
ServiceB = __decorate([
    inversify_1.injectable()
], ServiceB);
exports.ServiceB = ServiceB;
//# sourceMappingURL=ServiceB.js.map