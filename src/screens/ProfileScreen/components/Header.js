// TODO: DELETE IT NOT USED ANYMORE

import React from 'react'
import {
    StyleSheet,
    Dimensions,
    View,
} from 'react-native';
// components
import CustomText from "../../../components/UI/CustomText";
import { HeaderBottom } from "../../../components/UI/HeaderBottomSeperator";
// CONSTANTS
const { width, heigth } = Dimensions.get("screen");

export const Header = () => {
    return (
        <>
            <View style={styles.headerContainer}>
                <CustomText style={{ fontSize: 25, fontWeight: 'bold' }} text={'Profile'} />
            </View>
            <HeaderBottom />
        </>
    )
    
}

const styles = StyleSheet.create({
    headerContainer: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        width,
        height: 70,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        backgroundColor: '#fff',
        elevation: 4,
        // marginTop: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
})