import { ChatCompletionFunctions } from "openai";


type weatherProps = {
    lat: number;
    lon: number;
}
export async function getCurrentWeather(props: weatherProps) {
    const { lat, lon } = props;
    const URL = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_API_KEY}`
    console.log(URL)
    const res = await fetch(URL)
    const data = await res.json();
    return JSON.stringify({
        temp: data.current.temp,
        feels_like: data.current.feels_like,
        humidity: data.current.humidity,
        wind_speed: data.current.wind_speed,
    });
}

const functionsForModel: ChatCompletionFunctions[] = [
    {
        name: 'getCurrentWeather',
        description: 'Gives the current weather at a location',
        parameters: {
            type: 'object',
            properties: {
                lat: {
                    type: 'number',
                },
                lon: {
                    type: 'number',
                },
            },
            required: ['lat', 'lon'],
        },
    },
]

async function main() {
    console.log("TODO");
}

main();