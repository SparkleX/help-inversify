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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const inversify_1 = require("inversify");
const inversify_inject_decorators_1 = require("inversify-inject-decorators");
const container = new inversify_1.Container();
const { lazyInject } = inversify_inject_decorators_1.default(container);
const TYPE = {
    Dom: Symbol.for("Dom"),
    DomUi: Symbol.for("DomUi")
};
let DomUi = class DomUi {
    constructor(dom) {
        this.dom = dom;
        this.name = "DomUi";
    }
};
DomUi = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(TYPE.Dom)),
    __metadata("design:paramtypes", [Dom])
], DomUi);
let Dom = class Dom {
    constructor() {
        this.name = "Dom";
    }
};
__decorate([
    lazyInject(TYPE.DomUi),
    __metadata("design:type", DomUi)
], Dom.prototype, "domUi", void 0);
Dom = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [])
], Dom);
let Test = class Test {
    constructor(dom) {
        this.dom = dom;
    }
};
Test = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(TYPE.Dom)),
    __metadata("design:paramtypes", [Dom])
], Test);
container.bind(TYPE.Dom).to(Dom).inSingletonScope();
container.bind(TYPE.DomUi).to(DomUi).inSingletonScope();
const test = container.resolve(Test); // Works!
//# sourceMappingURL=test.js.map