import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

const BackgroundControl = ({ children, color }) => {
    const [bgColor, setBgColor] = useState('red');

    const getRandomColor = () => {
        setBgColor('rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')');
    };

    return (
        <View style={{ flex: 1, backgroundColor: bgColor }}>
            {children}
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => color ? setBgColor(color) : getRandomColor()}
                style={s.buttonHolder}>
                <Image
                    resizeMode={'contain'}
                    style={{ width: 50, height: 50, borderWidth: 2, borderRadius: 35, borderColor: 'white' }}
                    source={require('../assets/btn_icon.png')} />
                <Text style={{ color: '#fff', textAlign: 'center', fontSize: 12, lineHeight: 14, marginTop: 4 }}>Change color</Text>
            </TouchableOpacity>
        </View>
    );
};

const s = StyleSheet.create({
    buttonHolder: {
        position: 'absolute',
        bottom: 63,
        right: 20,
        // width: 70,
        // height: 70,
        // borderRadius: 35,
        // backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999,
        // borderWidth: 2,
        // borderColor: 'white'
    },
});
export default BackgroundControl;
