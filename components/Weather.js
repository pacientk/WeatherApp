import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Proptypes from 'prop-types'
import { weatherConditions } from '../utils/WeatherCondition';

const Weather = ({ weather, temperature }) => {
    return (
        <View style={[s.weatherContainer, { backgroundColor: weatherConditions[weather].color }]}>
            <View style={s.headerContainer}>
                <Text style={s.tempText}>{temperature}º</Text>
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
    weather: Proptypes.string
}

const s = StyleSheet.create({
    weatherContainer: {
        flex: 1,
    },
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    tempText: {
        fontSize: 72,
        color: '#fff',
    },
    bodyContainer: {
        flex: 2,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft: 25,
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
