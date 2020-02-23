import { injectable } from "inversify";
import { Types } from "./Types";

@injectable()
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
