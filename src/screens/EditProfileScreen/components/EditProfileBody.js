import React, { useRef, useEffect } from 'react'
import {
    View,
    Dimensions,
    StyleSheet,
    Image,
    ActivityIndicator,
} from 'react-native'
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import { EditContainer } from './EditContainer';
import ActionSheet from 'react-native-actionsheet'
import { addProfileImage, resetUser } from '../../../reducers/user/userActions';
import { useDispatch, useSelector } from 'react-redux';
import ImagePicker from '../../../utils/imagePicker';
import _ from 'underscore';
import { t } from '../../../i18next';
import Colors from '../../../utils/Colors';
import { showMessage } from 'react-native-flash-message';

const { width, height } = Dimensions.get("screen");

export const EditProfileBody = ({ lang }) => {
    const dispatch = useDispatch();
    let _actionSheetRef = useRef(null);

    const userStatus = useSelector((state) => state?.userReducer?.userStatus)
    const userLoading = useSelector((state) => state?.userReducer?.userLoading)
    
    const user = useSelector(state => state?.authReducer?.user);

    // useEffect(() => {
    //     switch(userStatus) {
    //         case 200:
    //             showMessage({
    //                 message: t('uploadedSuccessfully'),
    //                 titleStyle: { textAlign: 'left' },
    //                 type: 'success',
    //                 duration: 800
    //             })
    //         break;
    //         // case 403:
    //         //     showMessage({
    //         //         message: t('wrongPassword'),
    //         //         titleStyle: { textAlign: 'left' },
    //         //         type: 'danger',
    //         //         duration: 800
    //         //     })
    //         // break;
    //         case 400:
    //             showMessage({
    //                 message: t('notFoundedUser'),
    //                 titleStyle: { textAlign: 'left' },
    //                 type: 'danger',
    //                 duration: 800
    //             })
    //         break;
    //         // case 500:
    //         //     showMessage({
    //         //         message: t('serverError'),
    //         //         titleStyle: { textAlign: 'left' },
    //         //         type: 'danger',
    //         //         duration: 500
    //         //     })
    //         // break;
    //     }
    //     return () => {
    //         dispatch(resetUser());
    //     }
    // }, [userStatus])

    const changeImageProfile = async () => {
        _actionSheetRef.show();
    }

    const onActionSheetChoosed = async (index) => {
        if(index === 2) {
            return
        }

        ImagePicker.init((image) => {
            const formData = new FormData();
            const name = _.last(image?.uri.split('/'));
            formData.append('image', {
                uri: image.uri,
                name: name,
                type: 'image/jpeg'
            })
            dispatch(addProfileImage(formData))
        }, index === 0 ? 'camera' : 'gallery')
    }

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ alignItems: 'center' }}>
            <View style={styles.container}>
                {/* TODO: Add image here */}
                <TouchableHighlight onPress={changeImageProfile} style={styles.profileImage} >
                    {userLoading ? <ActivityIndicator size={'large'} color={Colors.white} /> : <Image source={{uri: user?.profileImage || 'https://picsum.photos/90/90'}} style={styles.profileImage} />}
                </TouchableHighlight>
            </View>
            <View style={styles.editsContainer}>
                {/* TODO: User details here */}
                <EditContainer text={'name'} data={user?.firstName + ' ' + user?.lastName} separator={true} />
                <EditContainer text={'email'} data={user?.email} separator={true} />
                {/* <EditContainer text={'password'} data={user?.password} separator={true} hide={true} /> */}
                <EditContainer text={'language'} data={lang == 'RTL' ? 'العربية' : 'English'} separator={true} />
                {/* <EditContainer text={'location'} data={user?.location || '-'} separator={false} /> */}
            </View>
            <ActionSheet
                ref={o => _actionSheetRef = o}
                title={'Which one do you like ?'}
                options={[t('camera'), t('gallery'), t('cancel')]}
                cancelButtonIndex={2}
                destructiveButtonIndex={2}
                onPress={onActionSheetChoosed}
            />
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