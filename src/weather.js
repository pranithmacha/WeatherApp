import React from "react";

class Weather extends React.Component {
    render() {
        return(
            <div>
                {this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p>}
                {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
                {this.props.humidity &&  <p>Humidity: {this.props.humidity}</p>}
                {this.props.description &&  <p>Conditions: {this.props.description}</p>}
                {this.props.error &&  <p>Please enter the values</p>}
            </div>
        );
    }
}

export default Weather;