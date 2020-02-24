import { injectable,inject } from "inversify";
import { ServiceB } from "./ServiceB";
import { Types } from "./Types";

@injectable()
export class ServiceA {
    
    @inject(Types.ServiceB)
    private serviceB: ServiceB;

    public test():number {
        console.debug(`ServiceA.test`);
        return this.serviceB.test(1);
    }

}
