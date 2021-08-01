import React, { useRef, useState } from 'react'
import {
    StyleSheet,
    View,
    Dimensions,
    TextInput,
    ActivityIndicator,
} from 'react-native';
// used this library the native library doesn't handle press
// on position: 'absolute' container
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Portal } from "react-native-portalize";
import { Modalize } from "react-native-modalize";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import MyText from '../../../components/UI/MyText';
import Colors from '../../../utils/Colors';
import { showMessage } from 'react-native-flash-message';
import { t } from '../../../i18next';

const { width, height } = Dimensions.get("window");

export const AddHome = () => {
    const modalizeRef = useRef(null);
    let textInputRef = useRef(null);
    const [value, onChangeText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(value !== '');

    const _onOpen = () => {
        modalizeRef.current?.open();
    };

    const _onClosed = () => {
        // cleaning functions
        onChangeText('');
        setError(false);
    };

    const _addNewHome = () => {
        if(value === '') {
            setError(true);
        } else {
            // backend simulation
            // TODO: dispath redux
            const homeName = value;
            // cleaning functions
            onChangeText('');
            setError(false)
            // starting of sending data
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
                modalizeRef.current?.close();
                setTimeout(() => {
                    showMessage({
                        message: 'Added home sucessfully',
                        type: 'success',
                        duration: 1000,
                        style:{ borderBottomRightRadius: 8, borderBottomLeftRadius: 8 }
                    })
                }, 110)
            }, 1000)
        }
    };

    return (
        <>
            <TouchableOpacity onPress={_onOpen} style={{ alignItems: 'center', justifyContent: 'space-around' }}>
                <Ionicons name={'md-add-circle'} size={22} color={Colors.buttons} />
                <MyText text={'addHome'} style={{ fontSize: 9, color: Colors.text }}  />
            </TouchableOpacity>
            <Portal>
                <Modalize onClosed={_onClosed} ref={modalizeRef} snapPoint={height - (height / 3)} >
                    <View style={styles.container}>
                        <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                                <MyText text={'Add home name:'} />
                                {isLoading ?
                                    <ActivityIndicator size={'small'} color={'black'} />
                                :
                                    <TouchableOpacity onPress={() => modalizeRef.current?.close()}>
                                        <AntDesign name={'close'} size={20} />
                                    </TouchableOpacity>
                                }
                            </View>
                            <TextInput
                                ref={ref => textInputRef = ref}
                                style={{...styles.textInput, backgroundColor: isLoading ? '#cfcfcf' : 'white', borderColor: error ? 'red' : 'black', borderWidth: error ? 1 : 0.5}}
                                onChangeText={text => { setError(false); onChangeText(text);}}
                                placeholder={'Home name'}
                                returnKeyType={'done'}
                                value={value}
                                editable={!isLoading}
                                onSubmitEditing={_addNewHome}
                            />
                            {/* Error message will be shown if TextInput is empty */}
                            {error ? <MyText text={'Home name should not be an empty string'} style={styles.errorMessage} /> : null}
                            {/* TODO: add members to the home */}
                            <View style={{ alignItems: 'center' }}>
                                <MyText
                                    style={{ textAlign: 'center', marginTop: 10, color: 'gray', fontSize: 12 }}
                                    text={'Add home name\nyou want to show in your homes list'} />
                            </View>
                        </View>
                        <TouchableOpacity disabled={isLoading} onPress={_addNewHome} style={styles.submit}>
                            <MyText style={{ color: 'white', fontSize: 22 }} text={'Add new home'} />
                        </TouchableOpacity>
                    </View>
                </Modalize>
            </Portal>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        height: height - (height / 3),
        width,
        paddingVertical: 10,
        paddingHorizontal: 10,
        justifyContent: 'space-between'
    },
    textInput: {
        borderWidth: 0.5,
        padding: 5,
        marginVertical: 5,
        borderRadius: 8,
    },
    errorMessage: {
        color: 'red',
        fontSize: 12,
        textAlign: 'center'
    },
    submit: {
        height: 50,
        borderWidth: 1,
        borderRadius: 8,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.buttons
    }
})