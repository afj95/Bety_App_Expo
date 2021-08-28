import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { Formik } from 'formik';  
import { LoginForm } from './components';
import MyText from '../../components/UI/MyText';
import { ScrollView } from 'react-native-gesture-handler';
import { CommonActions } from '@react-navigation/native';
import { login, resetAuth } from '../../reducers';
import { useDispatch, useSelector } from 'react-redux';
import { showMessage } from 'react-native-flash-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const LoginScreen = ({ navigation }) => {
    const dispatch = useDispatch();

    const error = useSelector((state) => state.auth?.error)
    const user = useSelector((state) => state.auth?.user)

    useEffect(() => {
        if(error) {
            console.log('true')
            showMessage({
                message: 'failed',
                type: 'danger'
            })
            dispatch(resetAuth());
            return;
        }

        if(error === false) {
            showMessage({
                message: 'success',
                type: 'success'
            })
            AsyncStorage.setItem('token', user?.token).then(() => {
                // ==============================
                // TODO: Remove
                // AsyncStorage.clear(error => {
                //     if(error) console.log(error);
                //     AsyncStorage.getAllKeys((error, keys) => {
                //         if(error) console.log(error)
                //         console.log(`keys`, keys)
                //     })
                //     console.log('Cleared')
                // })
                // ==============================

                navigation.dispatch(
                    CommonActions.reset({
                        index: 1,
                        routes: [ { name: 'Home' } ]
                    })
                )
            })
            return;
        }
    }, [error, user])


    const onSubmit = values => {
        dispatch(login(values.username, values.password ))
    }

    const validate = (values) => {
        const errors = {};
        if (!values.username) {
          errors.username = 'Required';
        } else if(isNaN(values.username)) {
            errors.username = 'Phone number must be numbers only'
        } else if(values.username.charAt(0) !== '0') {
            errors.username = 'Phone number must starts with 0'
        } else if(values.username.length < 10) {
            errors.username = 'Phone number must be 10 characters at least'
        }
        // Checking password
        if (!values.password) {
            errors.password = 'Required';
        } else if (values.password.length < 8) {
            errors.password = 'Password should be at least 8 characters';
        } // TODO: Complete password constraints
        return errors;
    };

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
            <View style={styles.welcomeContainer}>
                <MyText style={{ fontSize: 33 }}>welcomeBack</MyText>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ alignItems: 'center' }}>
                <View style={styles.formContainer}>
                    <View style={{ alignItems: 'center' }}>
                        <MyText style={{ marginBottom: 20, fontSize: 18 }}>login</MyText>
                    </View>
                    <Formik
                        // TODO: Add validation schema
                        validate={validate}
                        onSubmit={onSubmit}
                        initialValues={{ username: '', password: '' }}>
                        {(props) => <LoginForm props={props} /> }
                    </Formik>
                </View>
            </ScrollView>
            
            {/* <View style={{
                // borderWidth: 1,
                flex: 1,
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 20,
                marginTop: 20
            }}> */}
                {/* TODO: Add icons and complete API */}
                {/* <MyText>Facebook</MyText>
                <MyText>Google</MyText>
                <MyText>Twitter</MyText> */}
            {/* </View> */}
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    welcomeContainer: {
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    formContainer: {
        width: '90%',
        backgroundColor: 'white',
        paddingVertical: 25,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginVertical: 10,
        // shadow
        shadowColor: '#999999',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5
    },
})