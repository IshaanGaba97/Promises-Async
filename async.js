//api to fetch weather details of any city
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=mumbai&appid=c9ecb145b94f24b0bb9e454f6476291f";

const fetchData = async () => {
    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log("Fetched data:", data);
    }catch(err){
        console.log(err);
    }
    
}

fetchData();

