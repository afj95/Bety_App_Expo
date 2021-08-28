// TODO: Show real user adata

import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    RefreshControl
} from "react-native";
import { navigate } from '../../../navigation/RootNavigation';
import { Feather } from '@expo/vector-icons';
import MyText from '../../../components/UI/MyText';
import i18n from '../../../i18next';
// modal 
// import { Edit } from './Edit';
// fakeData
import { user } from '../../../fakeData';

const { height, width } = Dimensions.get('screen');

export const ProfileBody = () => {
    return (
        <View style={styles.container}>
            <Image source={{ uri : user.coverImage}} style={{ width, height: 205 }} />
            <View style={styles.nameAndImageContainer}>
                <View style={styles.editContainer}>
                    <TouchableOpacity onPress={() => navigate('EditScreen', { user: user, lang: i18n.dir })}>
                        <Feather name={'edit'} size={20} color={'white'} />
                    </TouchableOpacity>
                </View>
                
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri : user.profileImage}}
                        style={{ width: 90, height: 90, borderRadius: 45 }} />
                </View>
                <View style={styles.nameContainer}>
                    <MyText text={user.name} />
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
                    <MyText style={{ textDecorationLine: 'underline', fontWeight: 'bold'}} text={'password'}/>
                    <MyText hide={true} text={user.password} />
                </View>
                <View style={styles.detailsContainer}>
                    <MyText style={{ textDecorationLine: 'underline', fontWeight: 'bold'}} text={'language'}/>
                    <MyText text={i18n.dir.toUpperCase() === 'RTL' ? 'العربية' : 'English'}/>
                </View>
                <View style={styles.detailsContainer}>
                    <MyText style={{ textDecorationLine: 'underline', fontWeight: 'bold'}} text={'location'}/>
                    <MyText text={user.location}/>
                </View>
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
        marginEnd: 15,
        borderRadius: 20,
        alignItems: 'flex-end',
        width: '100%',
        height: 25
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