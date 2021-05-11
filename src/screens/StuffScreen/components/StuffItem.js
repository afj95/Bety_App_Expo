import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import { Ionicons } from "@expo/vector-icons";
import CustomText from '../../../components/UI/CustomText';
import { navigate } from '../../../navigation/RootNavigation';

export const StuffItem = ({ stuff, index, value }) => {
    const [checked, isChecked] = useState(false);
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return (
        <View style={{ marginTop: 2 }}>
            <TouchableOpacity
                style={{...styles.container, backgroundColor: toggleCheckBox ? '#e9e9e9' : '#ddd'}}
                onPress={() => setToggleCheckBox(!toggleCheckBox)}>
                <View style={{ alignItems: 'flex-start' }}>
                    <CustomText
                        style={{ width: 80, textDecorationStyle: 'solid', textDecorationLine: toggleCheckBox ? 'line-through' : 'none', color: toggleCheckBox ? 'gray' : 'black' }}
                        text={stuff.name}/>
                    <CustomText style={{...styles.note, color: toggleCheckBox ? 'gray' : 'black' }} text={stuff.notes}/>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '20%', alignItems: 'center'}}>
                    <CheckBox
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    />
                    <TouchableOpacity onPress={() => {console.log(index)}}>
                        <Ionicons name={'ios-trash-bin'} size={20} color={'#ff0000'} />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        marginHorizontal: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 0.8,
        paddingStart: 20,
        paddingEnd: 10,
        paddingVertical: 1
    },
    note: {
        fontSize: 10,
        color: '#000',
        marginVertical: 8,
    },
})