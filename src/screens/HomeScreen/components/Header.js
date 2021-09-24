import React from 'react'
import {
    StyleSheet,
    Dimensions,
    View,
} from 'react-native';
// components
import MyText from "../../../components/UI/MyText";
import { AddHome } from './AddHome';

const { width, height } = Dimensions.get("screen");

export const Header = ({ headerHeight, text }) => {
    return (
        <>
            <View>
                <View style={[styles.subHeader, { height: headerHeight / 2 },]}>
                    <View />
                    <View />
                    <MyText style={{ fontSize: 20, fontWeight: 'bold' }} text={text}/>
                    <AddHome/>
                </View>
            </View>
        </>
    )   
}

const styles = StyleSheet.create({
    subHeader: {
        width: '100%',
        paddingHorizontal: 10,
        paddingTop: height > 600 ? 20 : 10,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        // shadow
        shadowColor: '#999999',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 4
    },
})