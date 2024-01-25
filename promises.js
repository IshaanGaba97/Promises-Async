function fetchData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

//api to fetch weather details of any city
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=pune&appid=c9ecb145b94f24b0bb9e454f6476291f";

fetchData(apiUrl)
  .then((data) => {
    console.log("Fetched data:", data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
