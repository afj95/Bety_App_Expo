import React from 'react'
import {
    Image,
    View,
    StyleSheet,
} from 'react-native';

export const EmptyList = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/images/empty-friends.gif')} resizeMode={'center'} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    }
})