import React from 'react'
import {
    StyleSheet,
    Dimensions,
    View,
} from 'react-native';
// components
import CustomText from "../../../components/UI/CustomText";
import { HeaderBottom } from "../../../components/UI/HeaderBottomSeperator";
import { AddHome } from './AddHome';

// CONSTANTS
const { height } = Dimensions.get("screen");

export const Header = ({ text }) => {
    return (
        <View>
            <View style={{...styles.headerContainer, paddingTop: height > 600 ? 20 : 10, justifyContent: 'space-between',}}>
                <View />
                <View />
                <CustomText style={{ fontSize: 20, fontWeight: 'bold' }} text={text}/>
                <AddHome/>
            </View>
            <HeaderBottom />
        </View>
    )   
}

const styles = StyleSheet.create({
    headerContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 70,
        paddingHorizontal: 10,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        backgroundColor: '#fff',
        elevation: 4,
        flexDirection: 'row',
        alignItems: 'center',
    },
})