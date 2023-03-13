import { LightPowerCommand } from "./light-power-command";
import { SmartHouseLight } from "./smart-house-light";

const bedroomLight = new SmartHouseLight('Luz Quarto');
const lightPowerCommand = new LightPowerCommand(bedroomLight);
lightPowerCommand.execute();