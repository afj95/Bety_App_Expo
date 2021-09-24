import React, { useCallback, useState } from 'react'
import { View, StyleSheet, TouchableOpacity, } from 'react-native';

import { Ionicons } from "@expo/vector-icons";
import MyText from '../../../components/UI/MyText';

export const StuffItem = ({ stuff, index, value }) => {
    const [checked, isChecked] = useState(false);
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    const onDeleteStuffPressed = useCallback(() => {
        console.log('dsd')
    }, [])

    return (
        <View style={{ marginTop: 2 }}>
            <TouchableOpacity
                style={styles.container(toggleCheckBox)}
                onPress={() => setToggleCheckBox(!toggleCheckBox)}>
                <View style={{ alignItems: 'flex-start' }}>
                    <MyText
                        style={styles.stuffName(toggleCheckBox)}
                        text={stuff.name}/>
                    <MyText style={styles.note(toggleCheckBox)} text={stuff.notes}/>
                </View>
                <View style={styles.deleteContainer}>
                    <TouchableOpacity onPress={onDeleteStuffPressed}>
                        <Ionicons name={'ios-trash-bin'} size={20} color={'#ff0000'} />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: (toggleCheckBox) => ({
        borderRadius: 8,
        marginHorizontal: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 0.8,
        paddingStart: 20,
        paddingEnd: 10,
        paddingVertical: 4,
        backgroundColor: toggleCheckBox ? '#e9e9e9' : '#ddd'
    }),
    stuffName: (toggleCheckBox) => ({
        width: 80,
        textDecorationStyle: 'solid',
        textDecorationLine: toggleCheckBox ? 'line-through' : 'none',
        color: toggleCheckBox ? 'gray' : 'black'
    }),
    note: (toggleCheckBox) => ({
        fontSize: 10,
        marginVertical: 8,
        color: toggleCheckBox ? 'gray' : 'black'
    }),
    deleteContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '20%',
        alignItems: 'center'
    },
})