import React from 'react'
import {
    View,
    Dimensions,
    StyleSheet,
    Image
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import MyText from '../../../components/UI/MyText';
import i18n from '../../../i18next';
import { EditContainer } from './EditContainer';
// fakeData
import { user } from '../../../fakeData';

const { width, height } = Dimensions.get("screen");

export const Body = ({ lang, user }) => {
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
                <EditContainer text={'name'} data={user.name} separator={true} />
                <EditContainer text={'email'} data={user.email} separator={true} />
                <EditContainer text={'password'} data={user.password} separator={true} hide={true} />
                <EditContainer text={'language'} data={lang == 'RTL' ? 'العربية' : 'English'} separator={true} />
                <EditContainer text={'location'} data={user.location} separator={false} />
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