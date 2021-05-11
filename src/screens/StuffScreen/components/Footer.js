import React from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Keyboard
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const Footer = () => {
    const [value, onChangeText] = React.useState('');
    const [buttons, showButtons] = React.useState(false);
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

    const _keyboardDidShow = () => {
        showButtons(true);
    };
    
      const _keyboardDidHide = () => {
        showButtons(false);
    };

    return (
        <View style={styles.textInputContainer}>
            <TextInput
                ref={ref => textInputRef = ref}
                style={styles.textInput}
                onChangeText={text => onChangeText(text)}
                placeholder={'Add item you want to buy...'}
                onSubmitEditing={Keyboard.dismiss}
                value={value}
            />
            <TouchableOpacity onPress={() => { textInputRef.clear() } }>
                <Ionicons name={'add-circle'} size={40} color={'#4d4dff'} />
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
})