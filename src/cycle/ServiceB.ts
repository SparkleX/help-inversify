import "reflect-metadata";
import {injectable, inject } from "inversify";
import getDecorators from "inversify-inject-decorators";
import {TYPE} from "./TYPE"
import {global} from "./Global"
//import {IServiceA} from "./IServiceA"
import {ServiceA} from "./ServiceA"

const { lazyInject } = getDecorators(global.container);


@injectable()
export class ServiceB {
    @lazyInject(TYPE.ServiceA)
    public dom: ServiceA;
    public count:number = 0;

    constructor (
    ) {
        console.debug(`ServiceB.constructor`);

    }
    public test() {
        console.debug(`ServiceB.test  - ${this.count}`);
        this.count++;
        this.dom.method();
    }
    method(): void {
        console.debug(`ServiceB.method - ${this.count}`);
        this.count++;

    }
}