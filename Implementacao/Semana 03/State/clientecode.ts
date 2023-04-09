import { LightSwitch } from "./Light/LightSwitch";
import { OffState } from "./Light/StateObject/OffState";
import { OnState } from "./Light/StateObject/OnState";

const lightSwitch = new LightSwitch(new OffState());
lightSwitch.toggle()
lightSwitch.toggle()
lightSwitch.toggle()
lightSwitch.toggle()