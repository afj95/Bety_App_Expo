import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator,
    I18nManager,
} from 'react-native';
// main components
import MyText from '../../components/UI/MyText';
import Loader from '../../components/Loaders/Loader';
import { TextInput } from 'react-native-paper';
import Colors from '../../utils/Colors';
import i18n, { t } from '../../i18next';
import { Entypo, MaterialIcons, Fontisto } from '@expo/vector-icons';
import { Header, CustomMap } from './components';
import { showMessage } from 'react-native-flash-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Updates from 'expo-updates';

export default class EditScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            name: this.props.route.params.data,
            email: this.props.route.params.data,
            password: this.props.route.params.data,
            showPass: false,
            ARLang: i18n.dir.toUpperCase() === 'RTL' ? true : false,
            // userLocation: {
            //     latitude: 0,
            //     longitude: 0,
            // },
        }
    };

    // componentDidMount() {
    // Getting user location
    //     navigator.geolocation.getCurrentPosition(
    //         position => {
    //             this.setState({
    //                 userLocation: {
    //                     latitude: position.coords.latitude,
    //                     longitude: position.coords.longitude
    //                 }
    //             });
    //         },
    //         error => alert(error.message),
    //         {
    //             enableHighAccuracy: true,
    //             timeout: 20000,
    //             // maximumAge: 1000
    //         }
    //     );
    // }

    render() {
        const { text } = this.props.route.params;
        const { navigation } = this.props;
        const { name, isLoading } = this.state;
        switch(text) {
            case 'name':
                return (
                    <View style={styles.container}>
                        <Header text={text} navigation={navigation} />
                        <View style={styles.nameContainer}>
                            <TextInput
                                style={{ width: '100%', marginTop: 5, backgroundColor: isLoading ? '#f2f2f2' : 'white' }}
                                mode={'flat'}
                                theme={{ colors: {primary: 'black'} }}
                                label={t(text)}
                                onChangeText={(text) => this.setState({ name: text })}
                                value={name}
                                editable={isLoading ? false : true}
                            />
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
                                {name.length < 3 || name.length > 12 ? 
                                <Entypo size={18} name={'cross'} color={'gray'} />
                                :
                                <MaterialIcons size={15} name={'verified'} color={'green'} />
                                }
                                <MyText
                                    text={'nameGuide'}
                                    style={{ marginHorizontal: 10, color: name.length < 3 || name.length > 12 ? 'gray' : 'green', marginTop: 0 }}
                                />
                            </View>
                        </View>
                        {!isLoading ?
                            <TouchableOpacity
                                style={{ width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', height: 50, marginTop: 20, borderRadius: 8 }}
                                onPress={() => {
                                    this.setState({ isLoading: !isLoading })
                                    setTimeout(() => {
                                        this.setState({ isLoading: false });
                                        showMessage({
                                            message: t('app:nameUpdated'),
                                            style: { height: 50 },
                                            type: 'success',
                                            position: 'bottom',
                                            duration: 1000,
                                            hideOnPress: true,
                                        });
                                        setTimeout(() => {
                                            navigation.goBack();
                                        }, 500)
                                    }, 2000)
                                }}>
                                <MyText text={'updateName'} style={{ color: 'white', fontSize: 20 }} />
                            </TouchableOpacity>
                        :
                            <View
                                style={{ width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', height: 50, marginTop: 20, borderRadius: 8 }}>
                                <ActivityIndicator size={'large'} color={'white'} />
                            </View>
                        }
                    </View>
                );
            case 'email':
                // TODO: check email validation using regExp
                const { email } = this.state;
                return (
                    <View style={styles.container}>
                        <Header text={text} navigation={navigation} />
                        <View style={styles.nameContainer}>
                            <TextInput
                                style={{ width: '100%', marginTop: 5, backgroundColor: isLoading ? '#f2f2f2' : 'white' }}
                                mode={'flat'}
                                theme={{ colors: {primary: 'black'} }}
                                label={t(text)}
                                onChangeText={(text) => this.validate(text)}
                                value={email}
                                editable={isLoading ? false : true}
                            />
                        </View>
                        {!isLoading ?
                            <TouchableOpacity
                                style={{ width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', height: 50, marginTop: 20, borderRadius: 8 }}
                                onPress={() => {
                                    this.setState({ isLoading: !isLoading })
                                    setTimeout(() => {
                                        this.setState({ isLoading: false });
                                        showMessage({
                                            message: t('app:emailUpdated'),
                                            style: { height: 50 },
                                            type: 'success',
                                            position: 'bottom',
                                            duration: 800,
                                            hideOnPress: true,
                                        });
                                        setTimeout(() => {
                                            navigation.goBack();
                                        }, 500)
                                    }, 2000)
                                }}>
                                <MyText text={'updateEmail'} style={{ color: 'white', fontSize: 20 }} />
                            </TouchableOpacity>
                        :
                            <View
                                style={{ width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', height: 50, marginTop: 20, borderRadius: 8 }}>
                                <ActivityIndicator size={'large'} color={'white'} />
                            </View>
                        }
                    </View>
                );
            case 'password':
                const { password, showPass } = this.state
                return (
                    <View style={styles.container}>
                        <Header text={text} navigation={navigation} />
                        <View style={styles.nameContainer}>
                            <TextInput
                                style={{ width: '100%', marginTop: 5, backgroundColor: isLoading ? '#f2f2f2' : 'white' }}
                                mode={'flat'}
                                theme={{ colors: {primary: 'black'} }}
                                label={t(text)}
                                onChangeText={(text) => this.setState({ password: text })}
                                value={password}
                                secureTextEntry={!showPass}
                                editable={isLoading ? false : true}
                                right={
                                    <TextInput.Icon
                                        name={ showPass ? 'eye' : 'eye-off'}
                                        onPress={() => this.setState({ showPass: !showPass })} />
                                }
                            />
                        </View>
                        {!isLoading ?
                            <TouchableOpacity
                                style={{ width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', height: 50, marginTop: 20, borderRadius: 8 }}
                                onPress={() => {
                                    this.setState({ isLoading: !isLoading })
                                    setTimeout(() => {
                                        this.setState({ isLoading: false });
                                        showMessage({
                                            message: t('app:passUpdated'),
                                            style: { height: 50 },
                                            type: 'success',
                                            position: 'bottom',
                                            duration: 800,
                                            hideOnPress: true,
                                        });
                                        setTimeout(() => {
                                            navigation.goBack();
                                        }, 500)
                                    }, 2000)
                                }}>
                                <MyText text={'updatePass'} style={{ color: 'white', fontSize: 20 }} />
                            </TouchableOpacity>
                        :
                            <View
                                style={{ width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', height: 50, marginTop: 20, borderRadius: 8 }}>
                                <ActivityIndicator size={'large'} color={'white'} />
                            </View>
                        }
                    </View>
                );
            case 'language':
                const { ARLang } = this.state;
                return (
                    <View style={styles.container}>
                        <Header text={text} navigation={navigation} />
                        <View style={{...styles.nameContainer, alignItems: 'flex-start' }}>
                            <TouchableOpacity onPress={() => { this.setState({ ARLang: false }) }} style={{ paddingVertical: 10, borderRadius: 8, alignItems: 'center', flexDirection: 'row', backgroundColor: !ARLang ? '#f2f2f2' : '#fff', width: '100%' }}>
                                { !ARLang ? <Fontisto name={'checkbox-active'} style={{ marginHorizontal: 5 }} size={15} /> : <Fontisto name={'checkbox-passive'} style={{ marginHorizontal: 5 }} size={15} /> }
                                <MyText text={'en'} style={{ marginStart: 10}} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.setState({ ARLang: true }) }} style={{ marginTop: 10, paddingVertical: 10, borderRadius: 8, alignItems: 'center', flexDirection: 'row', width: '100%', backgroundColor: ARLang ? '#f2f2f2' : '#fff' }}>
                                { ARLang ? <Fontisto name={'checkbox-active'} style={{ marginHorizontal: 5 }} size={15} /> : <Fontisto name={'checkbox-passive'} style={{ marginHorizontal: 5 }} size={15} /> }
                                <MyText text={'ar'} style={{ marginStart: 10}} />
                            </TouchableOpacity>
                        </View>
                        {isLoading ?
                            <View
                                style={{ width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', height: 50, marginTop: 20, borderRadius: 8 }}>
                                <ActivityIndicator size={'large'} color={'white'} />
                            </View>
                        :
                            <TouchableOpacity
                                style={{ width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', height: 50, marginTop: 20, borderRadius: 8 }}
                                onPress={async () => {
                                    if((i18n.dir === 'RTL' && ARLang) || (i18n.dir !== 'RTL' && !ARLang)) {
                                        // No changes
                                        showMessage({
                                            message: t('noChanges'),
                                            duration: 600,
                                            position: 'bottom',
                                            type: 'info',
                                            color: 'black',
                                            style: { height: 50, borderRadius: 8, alignItems: 'center' },
                                            titleStyle: { color: 'white' }
                                        })
                                    } else {
                                        try {
                                            if(i18n.locale == 'en') {
                                                await AsyncStorage.setItem('lang', 'ar')
                                                console.log('stored - ar')
                                                i18n.changeLanguage('ar');
                                                I18nManager.forceRTL(true);
                                            } else {
                                                await AsyncStorage.setItem('lang', 'en')
                                                console.log('stored - en')
                                                i18n.changeLanguage('en');
                                                I18nManager.forceRTL(false);
                                            }
                                        } catch(e) {
                                            console.log('error while storing in async ' + e)
                                        }
                                        await Updates.reloadAsync();
                                    }
                                }}>
                                <MyText text={'updateLang'} style={{ color: 'white', fontSize: 20 }} />
                            </TouchableOpacity>
                        }
                    </View>
                );
            // case 'location':
            //     let { userLocation } = this.state;
            //     return (
            //         <View style={styles.container}>
            //             <Header text={text} navigation={navigation} />
            //             {userLocation.latitude == 0 ? <Loader /> :
            //                 <CustomMap
            //                     userLocation={userLocation}
            //                     // latitude={latitude}
            //                     // longitude={longitude}
            //                 />
            //             }
            //         </View>
            //     );
        }
    };
    validate = (text) => {
        // Validating is this email or not
        let reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (reg.test(text) === false) {
          console.log("Email is Not Correct");
          this.setState({ email: text })
          return false;
        }
        else {
          this.setState({ email: text })
          console.log("Email is Correct");
        }
    }
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.bg,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    nameContainer: {
        backgroundColor: 'white',
        width: '100%',
        paddingVertical: 25,
        paddingHorizontal: 10,
        alignItems: 'center',
        borderRadius: 10
    },
})