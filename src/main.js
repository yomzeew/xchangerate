import { mydate,mytime } from "./dateandtime.js";
import countryData from './countryjson/CountryCodes.json' with {type:'json'}
const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=indonesia`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '87bd68a168msh30aa9fcf5429bcep1e29b6jsnae9732ebf2d2',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
    console.log(result)
    const getdate=mydate(result.location.localtime)
const gettime=mytime(result.location.localtime)
document.getElementById('dateid').innerHTML=getdate
document.getElementById('timeid').innerHTML=gettime
	
    console.log(result.location.localtime_epoch)
} catch (error) {
	console.error(error);
}
console.log(countryData)


