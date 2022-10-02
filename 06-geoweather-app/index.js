import 'dotenv/config';
import { inquirerMenu, pause, readInput, selectPlace } from "./inquirer.js"
import Search from "./models/search.js";

const main = async () => {
  let selectedOption;
  const searches = new Search();
  do {
    selectedOption = await inquirerMenu();
    switch (selectedOption) {
      case 1: {
        // Buscar ciudad
        const cityName = await readInput('Please write a city name: ');
        const places = await searches.city(cityName);
        const selectedId = await selectPlace(
          places,
          'Please select a place: \n',
        );

        const { name, long, lat } = places.find(place => place.id === selectedId);
        searches.savePlaceToHistory(name);
        const { temp, temp_min, temp_max } = await searches.weather(lat, long);
        console.log('\nInformation\n');
        console.log('City: ', name);
        console.log('Lat: ', lat);
        console.log('Long: ', long);
        console.log('Temperature: ', temp, ' ºC');
        console.log('Min: ', temp_min, ' ºC');
        console.log('Max: ', temp_max, ' ºC');
        await pause();
        break;
      }
      case 2: {
        // Historial
        searches.history.forEach((place, index) => {
          console.log(`${index + 1}. ${place}`);
        })
        await pause();
        break;
      }
    }
  } while (selectedOption !== 0)
}

main();