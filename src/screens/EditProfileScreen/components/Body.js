import React from 'react'
import {
    View,
    Dimensions,
    StyleSheet,
    Image
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import CustomText from '../../../components/UI/CustomText';
import i18n from '../../../i18next';
import { EditContainer } from './EditContainer';

const { width, height } = Dimensions.get("screen");

export const Body = () => {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ alignItems: 'center' }}>
            <View style={styles.container}>
                {/* TODO: Add image here */}
                <Image source={{uri: 'https://picsum.photos/90/90'}} style={{ width: 120, height: 120, borderRadius: 60 }} />
            </View>
            <View style={styles.editsContainer}>
                {/* TODO: User details here */}
                <EditContainer text={'name'} data={'your name'} separator={true} />
                <EditContainer text={'email'} data={'example@example.com'} separator={true} />
                <EditContainer text={'password'} data={'password'} separator={true} />
                <EditContainer text={'language'} data={'العربية'} separator={false} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        width,
        height: height / 3.33,
        backgroundColor: '#0B1B32',
        justifyContent: 'center',
        alignItems: 'center'
    },
    editsContainer: {
        backgroundColor: '#fff',
        height: '100%',
        width: '100%',
    },
})