import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
navigator.geolocation = require('@react-native-community/geolocation');
import RNRandomBgColor from 'react-native-random-bg-color';
import { Weather } from './components';
import { API_KEY } from './utils/WeatherAPIkey';


const App = () => {
    const [weatherState, setWeatherState] = useState({
        isLoading: false,
        cityName: '',
        temperature: '--',
        weatherCondition: 'Clear',
        error: null,
    });

    const { isLoading, temperature, weatherCondition, cityName } = weatherState;

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            position => {
                getWeather(position.coords.latitude, position.coords.longitude);
            },
            error => {
                setWeatherState({ ...weatherState, error: 'Error While Getting Weather Update' });
            },
        );
    }, []);

    const getWeather = (lat, lon) => {
        return new fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&cnt={cnt}&APPID=${API_KEY}&units=metric`)
            .then(res => res.json())
            .then(json => {
                setWeatherState({
                    ...weatherState,
                    temperature: Math.round(json.main.temp).toFixed(),
                    weatherCondition: json.weather[0].main,
                    isLoading: true,
                    cityName: json.name,
                });
            })
            .catch(function (e) {
                console.log('Error >>>>', e);
            });
    };

    return (
        <View style={s.container}>
            <RNRandomBgColor
                // color={'red'} // optionally usage
            >
                {!isLoading
                    ? <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#00d2ff' }}><Text>Getting Data...</Text></View>
                    : <Weather weather={weatherCondition} cityName={cityName} temperature={temperature} />}
            </RNRandomBgColor>
        </View>
    );
};

const s = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#706D90',
    },
});

export default App;
