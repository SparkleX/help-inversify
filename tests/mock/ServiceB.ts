import { injectable } from "inversify";

@injectable()
export class ServiceB {

    public test(i:number):number {
        console.debug(`ServiceB.test`);
        return 3;
    }

}
