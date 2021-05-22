import React from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Keyboard,
    ActivityIndicator
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const Footer = ({ isLoading, setIsLoading }) => {
    const [value, onChangeText] = React.useState('');
    let textInputRef = null;

    React.useEffect(() => {
        Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
        Keyboard.addListener("keyboardDidHide", _keyboardDidHide);
    
        // cleanup function
        return () => {
          Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
          Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
        };
    }, []);

    const _keyboardDidShow = () => {};
    
    const _keyboardDidHide = () => {};

    const _addNewItem = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 1500)
    }

    return (
        <View style={styles.textInputContainer}>
            <TextInput
                ref={ref => textInputRef = ref}
                style={styles.textInput}
                onChangeText={text => onChangeText(text)}
                placeholder={'Add item you want to buy...'}
                onSubmitEditing={Keyboard.dismiss}
                value={value}
                editable={!isLoading}
            />
            <TouchableOpacity style={styles.addStuff} onPress={() => _addNewItem() }>
                {isLoading ?
                <ActivityIndicator size={'small'} color={'white'} />
                :
                <Ionicons name={'add'} size={30} color={'#fff'} />
                }
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    textInputContainer: {
        width: '100%',
        backgroundColor: '#eee',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#ddd',
        paddingVertical: 3,
        paddingHorizontal: 2,
        alignItems: 'center'
    },
    textInput: {
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: '90%',
        borderWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#fff'
    },
    addStuff: {
        width: 32,
        height: 32,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4d4dff'
    },
})