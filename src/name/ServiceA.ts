import "reflect-metadata";
import {injectable, inject, named } from "inversify";
import {TYPE} from "./TYPE"
import { IService } from "./IService";

@injectable()
export class ServiceA implements IService
{
    @inject(TYPE.Service) 
    @named("B")
    public serviceB: IService;

    public test() {
        console.debug(`ServiceA.test`);
        this.serviceB.test();
    }
}
