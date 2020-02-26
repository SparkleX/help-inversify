import "reflect-metadata";
import { Container } from "inversify";
import { provide, buildProviderModule,autoProvide,fluentProvide } from "inversify-binding-decorators";
import * as entities from "./entites";
//import { ServiceB} from "./ServiceB";
//import { ServiceA} from "./ServiceA";

const container = new Container();
//autoProvide(container, ServiceA);
//autoProvide(container, ServiceB);

for(var key in entities ) {
    autoProvide(container, (entities as any)[key]);
}


container.load(buildProviderModule());
export { container };