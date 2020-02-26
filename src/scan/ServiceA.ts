import { injectable,inject } from "inversify";
import { Types } from "./Types";
import { provide, buildProviderModule, fluentProvide } from "inversify-binding-decorators";
import { ServiceB } from "./ServiceB";

//@injectable()
//@provide(Types.ServiceA)
//@fluentProvide(Types.ServiceA).inSingletonScope().done()
@fluentProvide(Types.ServiceA).inSingletonScope().done()
export class ServiceA {
    private count = 0;
    @inject(Types.ServiceB)
    private serviceB: ServiceB;

    /*constructor() {
        console.debug(`ComponentSingleton.constructor`);
    }*/
    public test() {
        console.debug(`ServiceA.test : ${this.count}`);
        this.count++;
        this.serviceB.test();
    }

}
