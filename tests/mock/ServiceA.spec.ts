import "reflect-metadata";
import {container } from "./Inversify.config";
import { ServiceA } from "./ServiceA"
import { ServiceB } from "./ServiceB";
import { Types } from "./Types";
import * as mockito from "ts-mockito"

var MockServiceB:any;
var mockServiceB:ServiceB;

beforeAll(() => {
    MockServiceB = mockito.mock(ServiceB);
    mockServiceB = mockito.instance(MockServiceB);
    container.rebind<ServiceB>(Types.ServiceB).toConstantValue(mockServiceB);
});
  
test("ServiceA Test", async () => {

    let a:ServiceA = container.get(Types.ServiceA);
    mockito.when(MockServiceB.test(1)).thenReturn(2);
    a.test();
    mockito.verify(MockServiceB.test(1)).called();		
});

test("ServiceA Test2", async () => {

    let a:ServiceA = container.get(Types.ServiceA);
    mockito.when(MockServiceB.test(1)).thenReturn(2);
    a.test();
    mockito.verify(MockServiceB.test(1)).called();		
});