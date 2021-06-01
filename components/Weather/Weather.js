import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Proptypes from 'prop-types';
import { weatherConditions } from '../../utils/WeatherCondition';

const Weather = ({ weather, temperature, cityName }) => {
    return (
        <View style={[s.weatherContainer,
            // { backgroundColor: weatherConditions[weather].color }
            ]}>
            <View style={s.headerContainer}>
                <Text style={s.tempText}>{temperature}º</Text>
                <Text style={s.cityName}>{cityName}</Text>
            </View>
            <View style={s.bodyContainer}>
                <Text style={s.title}>{weatherConditions[weather].title}</Text>
                <Text style={s.subtitle}>{weatherConditions[weather].subtitle}</Text>
            </View>
        </View>
    );
};

Weather.Proptypes = {
    temperature: Proptypes.number.isRequired,
    weather: Proptypes.string,
    cityName: Proptypes.string
};

const s = StyleSheet.create({
    weatherContainer: {
        flex: 1,
        padding: 20,
    },
    headerContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    tempText: {
        fontSize: 90,
        lineHeight: 90,
        fontWeight: '700',
        color: '#fff',

    },
    cityName: {
        fontSize: 54,
        color: '#fff',
        marginTop: -20,
    },
    bodyContainer: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        marginBottom: 40,
    },
    title: {
        fontSize: 60,
        color: '#fff',
    },
    subtitle: {
        fontSize: 24,
        color: '#fff',
    },
});

export default Weather;
