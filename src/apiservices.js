export async function apidata (value){
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${value}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '87bd68a168msh30aa9fcf5429bcep1e29b6jsnae9732ebf2d2',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	
    return result
} catch (error) {
	console.error(error);
}
}