import React, { useState } from 'react'
import {
    View,
    StyleSheet,
    ActivityIndicator
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper';
import { AntDesign, Entypo, Feather, Fontisto } from '@expo/vector-icons';
import MyText from '../../../components/UI/MyText';
import { t } from '../../../i18next';
import { useSelector } from 'react-redux';
import { goBack } from '../../../navigation/RootNavigation';

export const RegisterForm = ({ RegisterProps: { handleChange, values, errors, handleBlur, handleSubmit } }) => {
    const isLoading = useSelector(state => state?.authReducer?.isLoading);
    const [showPass, setShowPass] = useState(false);

    const onloginTextPressed = () => goBack()
    
    return (
        <View>

            <View style={styles.textContainer}>
                <AntDesign name={'user'} size={15} style={{ marginEnd: 5 }} color={'#000'} />
                <MyText>firstName</MyText>
            </View>
            <TextInput
                style={styles.input(isLoading)}
                placeholder={t('firstName')}
                mode={'flat'}
                onChangeText={handleChange('firstName')}
                value={values?.firstName}
                error={errors?.firstName}
                onBlur={handleBlur('firstName')}
                theme={{ colors: { error: '#B22323', primary: '#595959' }, roundness: 12 }}
            />
            {errors?.firstName && <ErrorText error={errors?.firstName}/> }

            <View style={styles.textContainer}>
                <AntDesign name={'user'} size={15} style={{ marginEnd: 5 }} color={'#000'} />
                <MyText>lastName</MyText>
            </View>
            <TextInput
                style={styles.input(isLoading)}
                placeholder={t('lastName')}
                mode={'flat'}
                onChangeText={handleChange('lastName')}
                value={values?.lastName}
                error={errors?.lastName}
                onBlur={handleBlur('lastName')}
                theme={{ colors: { error: '#B22323', primary: '#595959' }, roundness: 12 }}
            />
            {errors?.lastName && <ErrorText error={errors?.lastName}/> }

            <View style={styles.textContainer}>
                <Entypo name={'mobile'} size={15} style={{ marginEnd: 5 }} color={'#000'} />
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

            <View style={styles.textContainer}>
                <Fontisto name={'email'} size={15} style={{ marginEnd: 5 }} color={'#000'} />
                <MyText>email</MyText>
            </View>
            <TextInput
                style={styles.input(isLoading)}
                placeholder={t('email')}
                mode={'flat'}
                onChangeText={handleChange('email')}
                value={values?.email}
                error={errors?.email}
                onBlur={handleBlur('email')}
                keyboardType="email-address"
                theme={{ colors: { error: '#B22323', primary: '#595959' }, roundness: 12 }}
            />
            {errors?.email && <ErrorText error={errors?.email}/> }

            <View style={styles.textContainer}>
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
            
            {isLoading ?
                <View 
                    style={styles.registerButton}>
                    <ActivityIndicator size={'large'} color={'white'} />
                </View>
            :
                <TouchableOpacity
                    style={styles.registerButton}
                    onPress={handleSubmit}>
                    <MyText style={{ color: 'white', fontSize: 18 }}>signup</MyText>
                </TouchableOpacity>
            }
            <View style={styles.haveAccount}>
                <MyText>haveAccount</MyText>
                <TouchableOpacity onPress={onloginTextPressed}>
                    <MyText style={styles.signupText}>
                        {' ' + t('login')}
                    </MyText>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
    },
    registerButton: {
        height: 50,
        backgroundColor: 'black',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
        // shadow
        shadowColor: '#888888',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5
    },
    input: (isLoading) => ({
        width: '100%',
        justifyContent: 'center',
        backgroundColor: isLoading ? '#f2f2f2' : 'white',
    }),
    haveAccount: {
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