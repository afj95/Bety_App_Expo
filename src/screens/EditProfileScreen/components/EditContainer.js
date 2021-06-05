import React from 'react'
import {
    View,
    StyleSheet,
    Text,
} from 'react-native'
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import CustomText from '../../../components/UI/CustomText';
import i18n, { t } from '../../../i18next';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { navigate } from '../../../navigation/RootNavigation';

export const EditContainer = ({ text, data, separator }) => {
    return (
        <View>
        {/* <View style={styles.separator} /> */}
            <TouchableWithoutFeedback
                onPress={() => {
                    // navigate to settings page
                    navigate('EditScreen', {text, data})
                }}
                style={styles.container}>
                <View>
                    <CustomText text={text} />
                    <Text style={{ color: 'gray' }} >{data}</Text>
                </View>
                {/* This icon is arrow like google products */}
                <MaterialIcons name={i18n.locale == 'en' ? 'keyboard-arrow-right' : 'keyboard-arrow-left'} size={22} />
                {/* This icon is 'edit pin' */}
                {/* This icon no need to detect language and change the side */}
                {/* <FontAwesome name={'edit'} size={22} /> */}
            </TouchableWithoutFeedback>
            {separator &&
                <View style={{ alignItems: 'center', justifyContent: 'center'}}>
                    <View style={styles.separator} />
                </View>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 70,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 20
    },
    separator: {
        height: 1,
        backgroundColor: '#cfcfcf',
        width: '90%'
    },
})