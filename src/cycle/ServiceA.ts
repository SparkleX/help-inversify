import { injectable,inject, LazyServiceIdentifer } from "inversify";
import { ServiceB } from "./ServiceB";
import { Types } from "./Types";

@injectable()
export class ServiceA {
    private count = 0;
    
    @inject(Types.ServiceB)
    public serviceB: ServiceB;

    public test() {
        console.debug(`count : ${this.count}`);
        this.count++;
        this.serviceB.method();
    }
    public method() {
        console.debug('ServiceA.method');
    }
}
