import React from 'react'
import {
    StyleSheet,
    View,
    TouchableOpacity,
} from 'react-native';
import { MaterialIcons, Entypo } from "@expo/vector-icons";

import CustomText from '../../../components/UI/CustomText';
import moment from "moment";
// navigate fun ref
import { navigate } from "../../../navigation/RootNavigation";

export const HomeItem = ({ home }) => {
    return (
        <TouchableOpacity style={styles.itemContainer}
            onPress={() => navigate('Stuff', {
                screen: "StuffScreen",
                params: {
                    home: home.name
                }
            })}>
            <View style={styles.nameContainer}>
                <CustomText style={{ fontSize: 18, fontWeight: 'bold' }} text={home.name}/>
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
})