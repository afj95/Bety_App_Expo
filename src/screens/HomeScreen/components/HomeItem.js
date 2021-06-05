import React, { useState } from 'react'
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Modal
} from 'react-native';
import { MaterialIcons, Entypo, Ionicons } from "@expo/vector-icons";

import CustomText from '../../../components/UI/CustomText';
import moment from "moment";
// navigate fun ref
import { navigate } from "../../../navigation/RootNavigation";

const deleteHome = () => {
    alert('delete')
}

export const HomeItem = ({ home }) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <TouchableOpacity style={styles.itemContainer}
            onPress={() => navigate('Stuff', {
                screen: "StuffScreen",
                params: {
                    home: home.name
                }
            })}>
            <View style={styles.nameContainer}>
                {/* <Ionicons name={'options'} size={22} onPress={() => console.log('dsdsd')} /> */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(!modalVisible)}>
                    <View
                        style={styles.centeredView}>
                        <TouchableOpacity
                            style={{ height: '75%' }}
                            onPress={() => setModalVisible(!modalVisible)}>
                        </TouchableOpacity>
                        <View style={styles.modalView}>
                            {/* The content of modal */}
                            <TouchableOpacity style={styles.optionContainer} onPress={() => {
                                // TODO: add function for the action
                                alert(home.name)
                            }} >
                                <CustomText text={'homeInfo'} />
                                <CustomText text={'infoDesc'} style={{ color: 'gray', fontSize: 10 }} />
                            </TouchableOpacity>
                            <View style={{ width: '100%', alignItems: 'center' }}>
                                <View style={{ width: '95%', height: 1, backgroundColor: '#cdcdcd' }} />
                            </View>
                            <TouchableOpacity style={styles.optionContainer} onPress={() => {
                                // TODO: add function for the action
                                // Deleting home
                                deleteHome()
                            }} >
                                <CustomText text={'deleteHome'} style={{ color: 'red' }} />
                                <CustomText text={'deleteDesc'} style={{ color: 'gray', fontSize: 10 }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                <Entypo
                    name={'dots-three-vertical'}
                    size={15}
                    style={{ padding: 2.5 }}
                    // showing modal
                    onPress={() => setModalVisible(!modalVisible)} />
                <CustomText style={{ fontSize: 18, fontWeight: 'bold' }} text={home.name}/>
                <View />
            </View>
            <View style={styles.detailsContainer}>
                <View style={{ width: '50%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
                    <CustomText style={{ fontSize: 10 }} text={moment(home.created).format("D MMM  YYYY, h:mm a ")}/>
                </View>
                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
                        <CustomText style={{ fontSize: 10, paddingHorizontal: 10 }} text={home.stuffs.members || '1'}/>
                        <MaterialIcons name={'groups'} size={18}/>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
                        <CustomText style={{ fontSize: 10, paddingHorizontal: 10 }} text={home.stuffs.length || '0'}/>
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
        marginHorizontal: 20,        
        marginTop: 10,
        marginBottom: 30,
        paddingTop: 2,
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: 90,
        elevation: 4,
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
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: "flex-end",
    },
    modalView: {
        height: '20%',
        width: '100%',
        backgroundColor: "white",
        borderTopEndRadius: 8,
        borderTopStartRadius: 8,
    },
    optionContainer: {
        height: '50%',
        marginBottom: 5,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
})