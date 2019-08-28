import React from "react";
import Title from "./title";
import Form from "./form";
import Weather from "./weather";

const API_KEY = "062b2d591358c6fd1be3af0648a5ae06";

class App extends React.Component {

    // state keeps track of changing data
    // bad practice: setting state value like this.state=temperature = value. Always use setState()
    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    };

    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        if (city && country) {
            const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
            const data = await api_call.json();
            console.log(data);
            this.setState({
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: ""
            });
        } else {
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                error: "Please enter the values"
            });
        }
    };

    render() {
        return (
            <div>
                <Title/>
                <Form getWeather={this.getWeather}/>
                <Weather temperature={this.state.temperature}
                         city={this.state.city}
                         country={this.state.country}
                         description={this.state.description}
                         humidity={this.state.humidity}
                         error={this.state.error}/>
            </div>
        );
    }
}

export default App;