// TODO: Show real user data

import React from 'react'
import {
    StyleSheet,
    View,
    Image,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    RefreshControl,
    Alert
} from "react-native";
import { CommonActions } from '@react-navigation/native';

import { navigate } from '../../../navigation/RootNavigation';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import MyText from '../../../components/UI/MyText';
import i18n, { t } from '../../../i18next';
// modal 
// import { Edit } from './Edit';
// fakeData
import { user } from '../../../fakeData';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../reducers';

const { height, width } = Dimensions.get('screen');

export const ProfileBody = ({ navigation }) => {
    const dispatch = useDispatch();

    const user = useSelector(state => state.auth.user);
    // console.log(user)

    const onLogoutPrissed = () => {
        Alert.alert(t('logoutTitle'), t('logoutMessage'), [
            {
                text: t('cancel'),
                style: 'cancel'
            },
            {
                text: t('logout'),
                onPress: () => {
                    dispatch(logout());
                    navigation.dispatch(
                        CommonActions.reset({
                          index: 1,
                          routes: [{ name: 'Auth' }],
                        })
                    );                      
                }
            }
        ])
    }

    return (
        <View style={styles.container}>
            <Image source={{ uri : user.coverImage}} style={{ width, height: 205 }} />
            <View style={styles.nameAndImageContainer}>
                <View style={styles.editContainer}>
                    <TouchableOpacity onPress={() => navigate('EditScreen', { user: user, lang: i18n.dir })}>
                        <Feather name={'edit'} size={20} color={'white'} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onLogoutPrissed}>
                        <MaterialCommunityIcons name={'logout'} size={20} color={'white'} />
                    </TouchableOpacity>
                </View>
                
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri : user.profileImage}}
                        style={{ width: 90, height: 90, borderRadius: 45 }} />
                </View>
                <View style={styles.nameContainer}>
                    <MyText text={user?.firstName + ' ' + user?.lastName} />
                </View>
            </View>
            <ScrollView
                style={{ flex: 1, width: '100%', marginTop: 110, paddingBottom: 5, }}
                contentContainerStyle={{ alignItems: 'center' }}
                showsVerticalScrollIndicator={false}>
                <View style={styles.detailsContainer}>
                    <MyText style={{ textDecorationLine: 'underline', fontWeight: 'bold'}} text={'email'}/>
                    <MyText text={user.email}/>
                </View>
                <View style={styles.detailsContainer}>
                    <MyText style={{ textDecorationLine: 'underline', fontWeight: 'bold'}} text={'phone'}/>
                    <MyText text={user?.phoneNumber}/>
                </View>
                <View style={styles.detailsContainer}>
                    <MyText style={{ textDecorationLine: 'underline', fontWeight: 'bold'}} text={'password'}/>
                    <MyText hide={true} text={user.password} />
                </View>
                <View style={styles.detailsContainer}>
                    <MyText style={{ textDecorationLine: 'underline', fontWeight: 'bold'}} text={'language'}/>
                    <MyText text={i18n.dir.toUpperCase() === 'RTL' ? 'العربية' : 'English'}/>
                </View>
                {user?.location &&
                    <View style={styles.detailsContainer}>
                        <MyText style={{ textDecorationLine: 'underline', fontWeight: 'bold'}} text={'location'}/>
                        <MyText text={user.location}/>
                    </View>
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 8,
    },
    editContainer: {
        marginTop: -15,
        paddingHorizontal: 15,
        borderRadius: 20,
        alignItems: 'flex-end',
        width: '100%',
        height: 25,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    nameAndImageContainer: {
        height: 205,
        width: '100%',
        // marginTop: -(210 / 2),
        // marginBottom: 5,
        backgroundColor: '#0B1B32',
        borderRadius: 8,
        elevation: 10,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 105
    },
    imageContainer: {
        borderWidth: 1,
        width: 90, height: 90,
        borderRadius: 45,
        elevation: 10, 
        alignItems: 'baseline',
        paddingEnd: 10,
    },
    nameContainer: {
        borderWidth: 0.3,
        borderRadius: 5,
        elevation: 2,
        backgroundColor: '#f2f2f2',
        marginTop: 25,
        paddingHorizontal: 10,
        paddingVertical: 10,
        alignItems: 'center'
    },
    detailsContainer: {
        height: 60,
        width: '100%',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 2,
        paddingHorizontal: 20,
        borderRadius: 4,
        elevation: 2,
    },
})