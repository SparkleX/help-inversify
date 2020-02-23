import { injectable,inject } from "inversify";
import { ServiceB } from "./ServiceB";

@injectable()
export class ServiceA {
    private count = 0;
    @inject(ServiceB)
    private serviceB: ServiceB;

    /*constructor() {
        console.debug(`ComponentSingleton.constructor`);
    }*/
    public test() {
        console.debug(`count : ${this.count}`);
        this.count++;
        this.serviceB.test();
    }

}
