import React from 'react'
import {
    StyleSheet,
    Dimensions,
    View,
    TouchableOpacity,
    Text
} from 'react-native';
// components
import CustomText from "../../../components/UI/CustomText";
import { HeaderBottom } from "../../../components/UI/HeaderBottomSeperator";
import { Feather } from "@expo/vector-icons";

// CONSTANTS
const { width, heigth } = Dimensions.get("screen");

export const Header = ({ navigation }) => {
    return (
        <>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                    {/* <Feather name={'align-justify'} size={25} color={'black'} /> */}
                </TouchableOpacity>
                <CustomText style={{ fontSize: 25, fontWeight: 'bold' }} text={'Homes'}/>
                <View/>
            </View>
            <HeaderBottom />
        </>
    )
    
}

const styles = StyleSheet.create({
    headerContainer: {
        position: 'absolute',
        width,
        height: 70,
        paddingHorizontal: 10,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        backgroundColor: '#fff',
        elevation: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
})