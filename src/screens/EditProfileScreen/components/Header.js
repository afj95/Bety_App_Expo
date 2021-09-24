import React from 'react'
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import MyText from '../../../components/UI/MyText';
import { AntDesign } from '@expo/vector-icons';
import i18n from '../../../i18next';

const { height, width } = Dimensions.get('screen');

export const Header = ({ text, navigation }) => {
    return (
        <View style={styles.contaienr}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <AntDesign name={i18n.locale === 'en' ? 'arrowleft' : 'arrowright'} size={25} color={'black'} />
            </TouchableOpacity>
            <MyText text={text} style={{ fontSize: 25, }} />
            <View/>
        </View>
    );
};

const styles = StyleSheet.create({
    contaienr: {
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
        backgroundColor: 'white',
        elevation: 4,
        alignItems: 'center',
    }
})