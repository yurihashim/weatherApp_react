import React, {useState} from "react"; 
import axios from "axios"; 
import Context from "../Context"
import Header from "./Header"; 
import Content from "./Content"; 
import WeatherSearch from "./weatherSearch"; 
import WeatherData from "./weatherData"; 
import Error from "./Error"; 



const Main = () => {

    const [weather, setWeather] = useState()
    const [city, setCity] = useState()
    const [error, setError] = useState()

    const api_call = async e => {
        e.preventDefault()
        
        const location = e.target.elements.location.value

        if (!location) return setError ("Please Enter The Name Correctly"), setWeather(null)
        const API_KEY = "e2091dcc0e42dfe6d6e0ba849440766b"
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY }&units=metric`
        const request = axios.get(URL)
        const response = await request
        setWeather(response.data.main)
        setCity(response.data.name)

    }
    weather && console.log(weather)
    
    

    return (
        <div className="main">
            <Header />
            <Content>
                <Context.Provider value ={{ api_call, weather, city}}>
                    <WeatherSearch />
                    {weather && <WeatherData/> }
                    {error && <Error error={error}/>}
                </Context.Provider>
            </Content>
        </div>
    )
}

export default Main; 
