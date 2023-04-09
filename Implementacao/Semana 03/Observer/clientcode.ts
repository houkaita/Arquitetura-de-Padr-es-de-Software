import { CurrentConditionsDisplay } from "./Observers-object/CurrentConditionsDisplay";
import { WeatherData } from "./Subject/WeatherData";

const weatherData = new WeatherData()
const currentDisplay = new CurrentConditionsDisplay(weatherData)
weatherData.setMeasurments(20, 10, 30)