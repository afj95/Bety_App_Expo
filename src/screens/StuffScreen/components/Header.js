// TODO: DELETE IT NOT USED ANYMORE

import React from 'react'
import {
    StyleSheet,
    Dimensions,
    View,
    TouchableOpacity
} from 'react-native';
import { Ionicons } from "@expo/vector-icons";

// components
import CustomText from "../../../components/UI/CustomText";
import { HeaderBottom } from "../../../components/UI/HeaderBottomSeperator";
// CONSTANTS
const { width } = Dimensions.get("screen");

export const Header = ({ name, navigation }) => (
    <>
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()} >
                <Ionicons name='ios-arrow-back' size={25} />
            </TouchableOpacity>
            <CustomText style={{ fontSize: 25, fontWeight: 'bold' }} text={name} />
            <View/>
        </View>
        <HeaderBottom />
    </>
)


const styles = StyleSheet.create({
    headerContainer: {
        paddingTop: 10,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        marginBottom: 5,
        paddingHorizontal: 10,
        top: 0,
        right: 0,
        left: 0,
        width,
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        elevation: 4,
        alignItems: 'center',
    },
})