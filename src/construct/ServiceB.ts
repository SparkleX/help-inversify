import "reflect-metadata";
import {injectable } from "inversify";



@injectable()
export class ServiceB {

    public test() {
        console.debug(`ServiceB.test `);
    }

}