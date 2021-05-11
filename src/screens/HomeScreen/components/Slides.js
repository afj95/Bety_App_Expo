import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';

export const Slides = ({ image }) => {
    return (
        <View style={styles.container}>
            <View style={styles.background}>
                <Image source={{ uri: image }} style={{ width: '100%', height: '100%', borderRadius: 8 }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 220,
        borderRadius: 8,
        // marginVertical: 18,
        padding: 5,
    },
    background: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
        backgroundColor: '#FFF'
    },
})