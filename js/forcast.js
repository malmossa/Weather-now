const key = "YnwJMAqui8jkAGRCksmYYDQkbZTGvnvF";

// Get weather information
const getWeather = async (id) => {
  const base = "https://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${id}?apikey=${key}`;

  const response = await fetch(base + query);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();

  return data[0];
};

// Get city information
const getCity = async (city) => {
  const base = "https://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(base + query);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();

  return data[0];
};
