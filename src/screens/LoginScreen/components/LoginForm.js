import React, { useState } from 'react'
import {
    View,
    StyleSheet,
    ActivityIndicator
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper';
import { AntDesign, Feather } from '@expo/vector-icons';
import MyText from '../../../components/UI/MyText';
import { t } from '../../../i18next';
import { useSelector } from 'react-redux';

export const LoginForm = ({ props: { handleChange, values, errors, handleBlur, handleSubmit } }) => {
    const isLoading = useSelector(state => state.auth?.isLoading);
    const [showPass, setShowPass] = useState(false);
    
    return (
        <View>
            <View style={styles.textContainer}>
                <AntDesign name={'user'} size={15} style={{ marginEnd: 5 }} color={'#000'} />
                <MyText>phone</MyText>
            </View>
            <TextInput
                style={styles.input(isLoading)}
                placeholder={'05XXXXXXXX'}
                mode={'flat'}
                onChangeText={handleChange('username')}
                value={values?.username}
                error={errors?.username}
                onBlur={handleBlur('username')}
                keyboardType="decimal-pad"
                theme={{ colors: { error: '#B22323', primary: '#595959' }, roundness: 12 }}
            />
            {errors?.username && <ErrorText error={errors?.username}/> }

            <View style={[styles.textContainer, { marginTop: 30 }]}>
                <Feather name={'lock'} size={15} style={{ marginEnd: 5 }} color={'#000'} />
                <MyText>password</MyText>
            </View>
            <TextInput
                style={styles.input(isLoading)}
                placeholder={t('password')}
                mode={'flat'}
                onChangeText={handleChange('password')}
                value={values?.password}
                error={errors?.password}
                secureTextEntry={showPass ? false : true}
                onBlur={handleBlur('password')}
                theme={{ colors: { error: '#B22323', primary: '#595959' }, roundness: 12 }}
                right={
                    <TextInput.Icon
                        name={showPass ? 'eye' : 'eye-off'}
                        size={24}
                        color={'#595959'}
                        style={{ paddingRight: 10 }}
                        onPress={() => setShowPass(!showPass)}
                    />
                }
            />
            {errors?.password && <ErrorText error={errors?.password}/> }
            <View style={styles.forgotPass}>
                <TouchableOpacity style={{ marginVertical: 20 }}>
                    <MyText>forgotPassword</MyText>
                </TouchableOpacity>
            </View>
            {isLoading ?
                <View 
                    style={styles.loginButton}>
                    <ActivityIndicator size={'large'} color={'white'} />
                </View>
            :
                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={handleSubmit}>
                    <MyText style={{ color: 'white', fontSize: 18 }}>login</MyText>
                </TouchableOpacity>
            }
            <View style={styles.newHere}>
                <MyText>newHere</MyText>
                <TouchableOpacity>
                    <MyText style={styles.signupText}>
                        {' ' + t('signup')}
                    </MyText>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    loginButton: {
        height: 50,
        backgroundColor: 'black',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        // shadow
        shadowColor: '#888888',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5
    },
    input: (isLoading) => ({
        width: '100%',
        marginTop: 5,
        justifyContent: 'center',
        backgroundColor: isLoading ? '#f2f2f2' : 'white',
    }),
    forgotPass: {
        width: '100%',
        alignItems: 'center',
        marginVertical: 5
    },
    newHere: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:  'center',
        marginTop: 15
    },
    signupText: {
        color: 'blue',
        textDecorationLine: 'underline'
    }
})

const ErrorText = ({ error }) => <MyText style={{ color: '#B22323', fontSize: 12 }}>{error}</MyText>