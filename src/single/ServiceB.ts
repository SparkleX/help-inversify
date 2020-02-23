import { injectable } from "inversify";

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
