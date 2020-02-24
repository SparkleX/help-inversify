import "reflect-metadata";
import {injectable, inject, postConstruct } from "inversify";
import {TYPE} from "./TYPE"
import { ServiceB } from "./ServiceB";

@injectable()
export class ServiceA 
{
    @inject(TYPE.ServiceB) 
    public serviceB: ServiceB;

    public test() {
        console.debug(`ServiceA.test`);
        //this.serviceB.test();
    }
    @postConstruct()
    public init() {
        console.debug(`ServiceA.init`);
        this.serviceB.test();
    }
}
