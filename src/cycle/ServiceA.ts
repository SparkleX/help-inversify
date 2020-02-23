import "reflect-metadata";
import {injectable, inject } from "inversify";
import getDecorators from "inversify-inject-decorators";
import {TYPE} from "./TYPE"
import {global} from "./Global"
//import {IServiceA} from "./IServiceA"
import {ServiceB} from "./ServiceB"

const { lazyInject } = getDecorators(global.container);

@injectable()
export class ServiceA //implements IServiceA
{

    @lazyInject(TYPE.ServiceB) 
    public domUi: ServiceB;
    public count:number = 0;
    public constructor() {
        console.debug(`ServiceA.constructor`);

    }

    public test() {
        console.debug(`ServiceA.test - ${this.count}`);
        this.count++;
        this.domUi.method();
    }

    method(): void {
        console.debug(`ServiceA.method - ${this.count}`);
        this.count++;

    }
}
