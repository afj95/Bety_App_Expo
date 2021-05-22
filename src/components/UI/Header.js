import React from 'react'
import {
    StyleSheet,
    Dimensions,
    View,
    TouchableOpacity,
} from 'react-native';
// components
import CustomText from "./CustomText";
import { HeaderBottom } from "./HeaderBottomSeperator";
import { AntDesign } from "@expo/vector-icons";

// CONSTANTS
const { height } = Dimensions.get("screen");

export const Header = ({ navigation, text, showGoBackButton }) => {
    return (
        <>
            <View style={{...styles.headerContainer, paddingTop: height > 600 ? 20 : 10, justifyContent: showGoBackButton? 'space-between' : 'center',}}>
            {showGoBackButton?
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <AntDesign name={'arrowleft'} size={25} color={'black'} />
            </TouchableOpacity>
                :<></>
            }
                <CustomText style={{ fontSize: 25, fontWeight: 'bold' }} text={text}/>
                <View/>
            </View>
            <HeaderBottom />
        </>
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