import { injectable, Container } from "inversify";
import { provide, buildProviderModule } from "inversify-binding-decorators";
import "reflect-metadata";

@provide(Katana)
class Katana /*implements Weapon*/ {
    public hit() {
        return "cut!";
    }
}

@provide(Shuriken)
class Shuriken /*implements ThrowableWeapon*/ {
    public throw() {
        return "hit!";
    }
}

var container = new Container();
// Reflects all decorators provided by this package and packages them into 
// a module to be loaded by the container
container.load(buildProviderModule());

var a:Katana = container.get<Katana>(Katana);
a.hit();