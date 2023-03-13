import React from 'react'

interface WeatherState {
    weather: string;
}

export default class Weather extends React.PureComponent {

    state: WeatherState = {
        weather: 'Loading...',
    }

    City: string = 'Xian';

    async componentDidMount(): Promise<void> {
        this.getWeather();
    }

    getWeather = async () => {
        const weather = await fetch(`https://wttr.in/${this.City}?format=4`).then(response => response.text());
        this.setState({ weather });
    }

    render() {
        return (
            <div>
                <p>
                    {this.state.weather}
                </p>
                <a
					className="App-link"
					href="https://wttr.in/Xian"
					target="_blank"
					rel="noopener noreferrer"
				>
					Get more weather
				</a>
            </div>
        )
    }
}
