import { injectable,inject} from "inversify";
import "reflect-metadata";
import { ServiceA } from "./ServiceA";
import { Types } from "./Types";
import getDecorators from "inversify-inject-decorators";
import {container} from "./Inversify.config"

let { lazyInject } = getDecorators(container);

@injectable()
export class ServiceB {
    private count = 0;
    
    @lazyInject(Types.ServiceA)
    public serviceA: ServiceA;

    public test() {
        console.debug(`ServiceB.test : ${this.count}`);
        console.debug('a');
        console.debug(this.serviceA==undefined);
        this.serviceA.method();
        console.debug('b');
        this.count++;
    }
    public method() {
        console.debug('ServiceB.method');
    }
}
