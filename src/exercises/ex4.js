// ex4.js

export const fetchData = async () => {
  let latitude = 48.1173; // La latitude de Rennes
  let longitude = -1.6778; // La longitude de Rennes
  let api_key = '891fcaaa0f613df11046ed15bd1a4607'; // Clé API
  let api_url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}`;

  try {
    const response = await fetch(api_url);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    const tempCelsius = data.main.temp - 273.15;
    return tempCelsius;
  } catch (err) {
    console.error('Error fetching data:', err);
    return null;
  }
};

export async function displayData() {
  const tempCelsius = await fetchData();
  if (tempCelsius !== null) {
    document.getElementById('paragraph').textContent = `Temperature: ${tempCelsius.toFixed(2)}°C`;
  } else {
    document.getElementById('paragraph').textContent = 'Error fetching data';
  }
}

export function removeParagraphContent() {
  document.getElementById('paragraph').textContent = '';
}

document.addEventListener('DOMContentLoaded', displayData);
// removeParagraphButton.addEventListener('click', removeParagraphContent);