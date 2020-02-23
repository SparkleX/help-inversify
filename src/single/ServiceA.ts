import { injectable,inject } from "inversify";
import { ServiceB } from "./ServiceB";
import { Types } from "./Types";

@injectable()
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
