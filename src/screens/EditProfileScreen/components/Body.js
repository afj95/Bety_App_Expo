import React, { useState, useRef, useEffect } from 'react'
import {
    View,
    Dimensions,
    StyleSheet,
    Image,
    Platform
} from 'react-native'
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import MyText from '../../../components/UI/MyText';
import i18n from '../../../i18next';
// import ActionSheet from 'react-native-actions-sheet'
import { EditContainer } from './EditContainer';
// fakeData
import { user } from '../../../fakeData';
import * as ImagePicker from 'expo-image-picker';

const { width, height } = Dimensions.get("screen");

export const Body = ({ lang, user }) => {
    const [image, setImage] = useState(null);

    // useEffect(() => {
    //     (async () => {
    //       if (Platform.OS !== 'web') {
    //         const { status } = await ImagePicker.requestCameraPermissionsAsync();
    //         if (status !== 'granted') {
    //           alert('Sorry, we need camera roll permissions to make this work!');
    //         }
    //       }
    //     })();
    // }, []);

    const changeImageProfile = async () => {

        

        // alert('sdsd')
        // const data = new FormData();
        // data.append("image", {
        //     name: photo.fileName
        // })
        // let result = await ImagePicker.launchCameraAsync({
        //     mediaTypes: ImagePicker.MediaTypeOptions.Images,
        //     allowsEditing: true,
        //     aspect: [4, 3],
        //     quality: 1,
        //   });
      
        // console.log(result);
      
        // if (!result.cancelled) {
        //     setImage(result.uri);
        // }
    }

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ alignItems: 'center' }}>
            <View style={styles.container}>
                {/* TODO: Add image here */}
                <TouchableHighlight onPress={() => {}} style={styles.profileImage} >
                    <Image source={{uri: user?.profileImage || 'https://picsum.photos/90/90'}} style={styles.profileImage} />
                </TouchableHighlight>
            </View>
            <View style={styles.editsContainer}>
                {/* TODO: User details here */}
                <EditContainer text={'name'} data={user?.firstName + ' ' + user?.lastName} separator={true} />
                <EditContainer text={'email'} data={user?.email} separator={true} />
                <EditContainer text={'password'} data={user?.password} separator={true} hide={true} />
                <EditContainer text={'language'} data={lang == 'RTL' ? 'العربية' : 'English'} separator={true} />
                <EditContainer text={'location'} data={user?.location || '-'} separator={false} />
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
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60
    },
})