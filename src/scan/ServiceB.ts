import { injectable } from "inversify";
import { Types } from "./Types";
import { provide, buildProviderModule, fluentProvide } from "inversify-binding-decorators";

@fluentProvide(Types.ServiceB).inSingletonScope().done()
export class ServiceB {
    private count = 0;

    /*constructor() {
        console.debug(`ComponentSingleton.constructor`);
    }*/
    public test() {
        console.debug(`ServiceB.test : ${this.count}`);
        this.count++;
    }

}
