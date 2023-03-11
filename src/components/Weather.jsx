import React from 'react'


export default class Weather extends React.PureComponent {

    getWeather = () => {
        return 'Xian: ☀️   🌡️+16°C 🌬️→27km/h';
    }

    render() {
        return (
            <div>{this.getWeather()}</div>
        )
    }
}