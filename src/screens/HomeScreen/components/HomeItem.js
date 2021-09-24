// TODO: 
// Change styles

import React, { useRef } from 'react'
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Dimensions,
    Alert
} from 'react-native';
import { MaterialIcons, Entypo } from "@expo/vector-icons";

import MyText from '../../../components/UI/MyText';
import moment from "moment";
// navigate fun ref
import { navigate } from "../../../navigation/RootNavigation";
// import { schedulePushNotification } from '../../../components/notifications/constructor';
import { useDispatch } from 'react-redux';
import { deleteHome  } from '../../../reducers/home/homesActions';
import { Portal } from "react-native-portalize";
import { Modalize } from "react-native-modalize";
import { t } from '../../../i18next';

const { height } = Dimensions.get("window");

export const HomeItem = ({ home }) => {
    const dispatch = useDispatch();
    const _modalizeRef = useRef(null);
    
    const _openModal = () => _modalizeRef.current?.open();

    const _addMemberToHome = () => {
        // navigate to add member screen
        navigate('AddMember', {id: home?._id})
        _modalizeRef.current?.close();
    }

    const _deleteHome = () => {
        Alert.alert(t('deleteHomeTitle'), t('deleteHomeMessage'),
        [
            {
                style: 'cancel',
                text: t('cancel')
            },
            {
                text: t('yes'),
                onPress: () => {
                    dispatch(deleteHome(home?._id))
                }
            }
        ])
    }

    return (
        <TouchableOpacity style={styles.itemContainer}
            onPress={() => navigate('Stuff', {
                screen: "StuffScreen",
                params: {
                    name: home.name
                }
            })}>
            <View style={styles.nameContainer}>
                <Entypo
                    name={'dots-three-vertical'}
                    size={15}
                    style={{ padding: 10 }}
                    onPress={_openModal}
                />
                <Portal>
                    <Modalize ref={_modalizeRef} modalHeight={height - (height / 1.5)} snapPoint={height - (height / 1.5)}>
                        <View style={styles.centeredView}>
                            <TouchableOpacity style={styles.optionContainer} onPress={() => _addMemberToHome()} >
                                <MyText text={'addmemberToHome'} />
                                <MyText text={'addMemberInfoDesc'} style={{ color: 'gray', fontSize: 10 }} />
                            </TouchableOpacity>
                            <View style={{ width: '100%', alignItems: 'center' }}>
                                <View style={{ width: '95%', height: 0.5, backgroundColor: '#cdcdcd' }} />
                            </View>
                            <TouchableOpacity style={styles.optionContainer} onPress={_deleteHome}>
                                <MyText text={'deleteHome'} style={{ color: 'red' }} />
                                <MyText text={'deleteDesc'} style={{ color: 'gray', fontSize: 10 }} />
                            </TouchableOpacity>
                        </View>
                    </Modalize>
                </Portal>
                
                <MyText style={{ fontSize: 18, fontWeight: 'bold' }} text={home.name}/>
                <View />
            </View>
            <View style={styles.detailsContainer}>
                <View style={{ width: '50%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
                    <MyText style={{ fontSize: 10 }} text={moment(home.created).format("D MMM  YYYY, h:mm a ")} />
                </View>
                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
                        <MyText style={{ fontSize: 10, paddingHorizontal: 10 }} text={home.members?.length} />
                        <MaterialIcons name={'groups'} size={18}/>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
                        <MyText style={{ fontSize: 10, paddingHorizontal: 10 }} text={home.stuffs.length} />
                        <Entypo name={'shopping-cart'} size={18} />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#ddd',
        borderRadius: 10,
        marginHorizontal: 0,
        // marginTop: 10,
        marginBottom: 20,
        paddingTop: 2,
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: 90,
        // shadow
        shadowColor: '#999999',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5
    },
    nameContainer: {
        marginHorizontal: 20,
        width: '100%',
        height: '50%',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignItems: 'center',
        flexDirection: 'row',
    },
    detailsContainer: {
        marginHorizontal: 20,
        width: '100%',
        height: '50%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 10,
        alignItems: 'flex-end',
    },
    centeredView: {
        height: height - (height / 1.5),
        // justifyContent: "center",
    },
    optionContainer: {
        height: '50%',
        marginBottom: 5,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
})