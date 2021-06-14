import React, {useContext} from "react"; 
import Context from "../Context"; 



const WeatherSearch = () => {

    const {api_call} = useContext(Context)

    return (
        <div className="weather-search">
            <form onSubmit={api_call} className="search-form">
                <input name="location" type="text" className="search-input" placeholder="search a city :)"/>
                <div className="submit">
                    <button className="search-button">search</button>
                </div>
            </form>
        </div>
    )
}

export default WeatherSearch; 