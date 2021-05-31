import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Geolocation from '@react-native-community/geolocation';

navigator.geolocation = require('@react-native-community/geolocation');
import Weather from './components/Weather';
import { API_KEY } from './utils/WeatherAPIkey';

export default class App extends React.Component {
    state = {
        isLoading: false,
        temperature: '--',
        weatherCondition: 'Clear',
        error: null,
    };

    componentDidMount() {
      // console.log('@@@@ ', position.coords.latitude);
        navigator.geolocation.getCurrentPosition(
            position => {
                this.getWeather(position.coords.latitude, position.coords.longitude);
            },
            error => {
                this.setState({ error: 'Error While Getting Weather Update' });
            },
        );
    }

    getWeather(lat, lon) {
        console.log('@@@@ ', lat, lon);

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&cnt={cnt}&APPID=${API_KEY}&units=metric`)
            .then(res => res.json())
            .then(json => {

                console.log('@@@@ json', json);

                this.setState({
                    temperature: Math.round(json.main.temp).toFixed(),
                    weatherCondition: json.weather[0].main,
                    isLoading: false,
                });
            });
    }

    render() {
        const { isLoading, temperature, weatherCondition } = this.state;
        return (
            <View style={s.container}>
                {isLoading
                    ? <Text>Getting Weather Data</Text>
                    : <Weather weather={weatherCondition} temperature={temperature} />}
            </View>
        );
    }
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

