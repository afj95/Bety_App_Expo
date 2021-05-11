import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    ScrollView,
    FlatList,
    TouchableOpacity
} from "react-native";
import { navigate } from '../../../navigation/RootNavigation';
import { Feather } from '@expo/vector-icons';
import CustomText from '../../../components/UI/CustomText';
// modal 
// import { Edit } from './Edit';

const { height, width } = Dimensions.get('screen');

export const ProfileBody = () => {
    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            ListHeaderComponentStyle={{ marginBottom: 20 }}
            ListHeaderComponent={
                <View style={styles.container}>
                <Image source={{ uri : 'https://picsum.photos/205/731'}} style={{ width, height: 205 }} />
                <View style={styles.nameAndImageContainer}>
                    <View style={styles.editContainer}>
                        {/* <Edit /> */}
                        <TouchableOpacity onPress={() => navigate('Edit', {sceen: 'EditScreen'})}>
                            <Feather name={'edit'} size={20} />
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.imageContainer}>
                        <Image source={{ uri : 'https://picsum.photos/90/90'}} style={{ width: 90, height: 90, borderRadius: 45 }} />
                    </View>
                    <View style={styles.nameContainer}>
                        <Text>Ahmad Jamous</Text>
                    </View>
                </View>
                <ScrollView style={{ paddingHorizontal: 8, paddingTop: 10 }} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                    <View style={styles.detailsContainer}>
                        <CustomText style={{ textDecorationLine: 'underline', fontWeight: 'bold'}} text={'email'}/>
                        <CustomText text={'Afjamous.95@gmail.com'}/>
                        <View/>
                    </View>
                    <View style={styles.detailsContainer}>
                        <CustomText style={{ textDecorationLine: 'underline', fontWeight: 'bold'}} text={'password:'}/>
                        <Text>***************</Text>
                        <View/>
                    </View>
                    <View style={styles.detailsContainer}>
                        <CustomText style={{ textDecorationLine: 'underline', fontWeight: 'bold'}} text={'language:'}/>
                        <CustomText text={'English'}/>
                        <View />
                    </View>
                </ScrollView>
            </View>
        }
        />
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 70.5
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
        width: width / 1.08,
        marginTop: -(210 / 2.8),
        marginBottom: 5,
        backgroundColor: 'white',
        borderRadius: 20,
        elevation: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageContainer: {
        borderWidth: 1,
        width: 90, height: 90,
        borderRadius: 45,
        elevation: 10, 
        flexDirection: 'row',
        alignItems: 'baseline',
        paddingEnd: 10
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
        width: width / 1.08,
        height: 60,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 10,
        paddingHorizontal: 25,
        borderRadius: 30,
        elevation: 5,
    },
})