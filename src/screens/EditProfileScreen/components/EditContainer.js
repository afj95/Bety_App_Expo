import React from 'react'
import {
    View,
    StyleSheet,
    Text,
} from 'react-native'
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import MyText from '../../../components/UI/MyText';
import i18n, { t } from '../../../i18next';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { navigate } from '../../../navigation/RootNavigation';

export const EditContainer = ({ text, data, separator, hide }) => {
    return (
        <View>
        {/* <View style={styles.separator} /> */}
            <TouchableWithoutFeedback
                onPress={() => {
                    // navigate to settings page
                    navigate('Edit', {text, data})
                }}
                style={styles.container}>
                <View>
                    <MyText text={text} />
                    <MyText style={{ color: 'gray' }} hide={hide}>{data}</MyText>
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