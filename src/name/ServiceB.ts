import "reflect-metadata";
import {injectable } from "inversify";
import { IService } from "./IService";



@injectable()
export class ServiceB implements IService {

    public test() {
        console.debug(`ServiceB.test `);
    }

}