import React from 'react';

import { Appbar as RNAppbar } from 'react-native-paper';
import { StyleSheet, View, Text } from 'react-native';
import { goBack } from '../navigation/RootNavigation';
import MyText from './UI/MyText';
// import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

// import Colors from '../constants/Colors';
// import { useNavigation } from '@react-navigation/core';

export const Appbar = ({ title, rightActionButtons, initBack, children, transparent }) => {
    return (
        <RNAppbar.Header style={styles.contanier(transparent ? "transparent" : 'white')}>

            <RNAppbar style={styles.innerView}>
                {initBack && <RNAppbar.BackAction size={25} style={{ padding: 2 }} color={"#000"} onPress={() => goBack()} />}
            </RNAppbar>

            {title ? <MyText style={styles.titleStyle('black')}>{title}</MyText> : null}

            <View style={styles.rightActionView}>
                {rightActionButtons}
            </View>

            {children}

        </RNAppbar.Header>
    )
}

const styles = StyleSheet.create({
    contanier: (color) => ({
        backgroundColor: color,
        justifyContent: 'center',
        height: 70,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        // shadow
        shadowColor: '#999999',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 4,
    }),
    titleStyle: (color) => ({
        fontWeight: "bold",
        fontSize: 22,
        textAlign: 'center',
        alignSelf: 'center',
        color
    }),
    rightActionView: {
        position: 'absolute',
        right: 0,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    innerView: {
        backgroundColor: 'transparent',
        elevation: 0,
        position: 'absolute',
        left: 0
    }
});