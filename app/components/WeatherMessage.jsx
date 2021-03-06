// import modules
var React = require("react");

// WeatherMessage component definition
var WeatherMessage = ({temp, location}) => {
    return (
        <h3 className="text-center">It's {temp} in {location}</h3>
    );
}

// exports WeatherMessage component
module.exports = WeatherMessage