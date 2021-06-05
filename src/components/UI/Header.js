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
import i18n from '../../i18next';
import Colors from '../../utils/Colors';

// CONSTANTS
const { width, height } = Dimensions.get("screen");

export const Header = ({ navigation, text, showGoBackButton }) => {
    return (
        <>
            <View style={{...styles.headerContainer,  justifyContent: showGoBackButton? 'space-between' : 'center',}}>
                {showGoBackButton?
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <AntDesign name={i18n.locale === 'en' ? 'arrowleft' : 'arrowright'} size={25} color={'black'} />
                    </TouchableOpacity>
                : <></>
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
        paddingTop: height > 600 ? 20 : 10,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        paddingHorizontal: 10,
        top: 0,
        right: 0,
        left: 0,
        width,
        height: 70,
        marginBottom: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Colors.white,
        elevation: 4,
        alignItems: 'center',
    },
})