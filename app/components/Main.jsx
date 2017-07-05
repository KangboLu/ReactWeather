// import modules
var React = require("react");
var Nav = require("Nav");
var Weather = require("Weather");

// main component definition
var Main = (props) => {
    return (
        <div>
            <Nav/>
            <h2>Main</h2>
            {props.children}
        </div>
    );
}

// exports Main component
module.exports = Main;