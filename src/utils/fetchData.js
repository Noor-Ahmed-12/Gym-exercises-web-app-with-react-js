export const exerciseOptions =  {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const youtubeOptions =  {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '06fabe01bbmsh190500788201173p15bdcejsn4b87b08dbe22',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const BMIOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '06fabe01bbmsh190500788201173p15bdcejsn4b87b08dbe22',
		'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
	}
};



export const fetchData = async (url, options) => {
    const response  = await fetch(url, options);
    const data = await response.json();
    return data;
};