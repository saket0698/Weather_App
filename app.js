const api_key= "721b3eb82854dbedcd0c9cd1837342d9"

const form = document.querySelector("form")
const weather = document.querySelector("#weather")
const search = document.querySelector("#search")


const getWeather = async(city) =>{
    weather.innerHTML = `<h2>Loading...<h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
    const response = await fetch(url)
    
    const data = await response.json()
    console.log(data)
    return showWeather(data)
}

const showWeather = (data) =>{
    if (data.cod == 200){
        weather.innerHTML = `
                    <div>
                        <img src="" alt="">
                    </div>
                    <div>
                        <h2>${data.main.temp} °C</h2>
                        <h4>${data.weather[0].main}</h4>
                    </div>`
    }
    else{
        weather.innerHTML = `<h2>City Not Found<h2>`
    }
}

form.addEventListener("submit", function(e){
    getWeather(search.value)
    e.preventDefault(); 
})