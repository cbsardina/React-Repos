import axios from 'axios';


export function getVehicleData() {
	// return axios.get('https://swapi.co/api/vehicles/?format=json')
	// 	.then((response) => {
	// 		console.log(response);
	// 	})
	// 	.catch((err) => {
	// 		console.log(err)
	// 	})

	return axios.get('https://swapi.co/api/vehicles/?format=json')
}