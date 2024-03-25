async function getrate(){
    const basecurrency='USD'
    const url = `https://exchange-rate-api1.p.rapidapi.com/latest?base=${basecurrency}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '87bd68a168msh30aa9fcf5429bcep1e29b6jsnae9732ebf2d2',
		'X-RapidAPI-Host': 'exchange-rate-api1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result.rates.NGN);
} catch (error) {
	console.error(error);
}

}
async function getcountry(){
	try{
		const response=await fetch('./countryjson/CountryCodes.json')
		let result=await response.json()
		console.log(result)
		// const html=result.map((item,index)=>
		// 	{
		// 		let country= item.name
		// 	return('<div class="pt-3 border-b border-b-slate-300 w-64">'+country+'</div>')

		// 	}
		// 	)
		// document.getElementById('showcountry').innerHTML=html
		let html=''
		for (let index = 0; index < result.length; index++) {
			html=html+'<div class="pt-3 border-b border-b-slate-300 w-64">'+result[index].name+'</div>'
			
		}
		document.getElementById('showcountry').innerHTML=html


	} catch(error){
		console.error(error)
	}

}
