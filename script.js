 const apiKey = "982386a8060d0b42a7e4726e7c595ab5";
 const apiUrl = "https://api.openweathermap.org/data/2.5/weather?unit=metric&q=";


 const weatherData = async (city) =>{
       const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
       const data = await response.json();
      console.log(data);


      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML = Math.round( data.main.temp) +"°c";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed+ " km/h ";
    }

const search = () =>{
   let searchValue = document.querySelector("#search");
    weatherData(searchValue.value);
} 






