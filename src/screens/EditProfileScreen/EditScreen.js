import React from 'react'
import {
    View,
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator,
    Modal, Text, Pressable
} from 'react-native';
import CustomText from '../../components/UI/CustomText';
import { TextInput } from 'react-native-paper';
import Colors from '../../utils/Colors';
import { t } from '../../i18next';
import { Entypo, MaterialIcons, Fontisto } from '@expo/vector-icons';
import { Header } from './components/Header';
import { showMessage } from 'react-native-flash-message';

export default class EditScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            name: this.props.route.params.data,
            email: this.props.route.params.data,
            password: this.props.route.params.data,
            showPass: false,
            ARLang: false,

            modalVisible: false
        }
    };

    render() {
        const { text } = this.props.route.params;
        const { navigation } = this.props;
        const { name, isLoading } = this.state;
        switch(text) {
            case 'name':
                const { modalVisible } = this.state;
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
                                <CustomText
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
                                <CustomText text={'updateName'} style={{ color: 'white', fontSize: 20 }} />
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
                                <CustomText text={'updateEmail'} style={{ color: 'white', fontSize: 20 }} />
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
                                show
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
                                <CustomText text={'updatePass'} style={{ color: 'white', fontSize: 20 }} />
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
                                <CustomText text={'en'} style={{ marginStart: 10}} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.setState({ ARLang: true }) }} style={{ marginTop: 10, paddingVertical: 10, borderRadius: 8, alignItems: 'center', flexDirection: 'row', width: '100%', backgroundColor: ARLang ? '#f2f2f2' : '#fff' }}>
                                { ARLang ? <Fontisto name={'checkbox-active'} style={{ marginHorizontal: 5 }} size={15} /> : <Fontisto name={'checkbox-passive'} style={{ marginHorizontal: 5 }} size={15} /> }
                                <CustomText text={'ar'} style={{ marginStart: 10}} />
                            </TouchableOpacity>
                        </View>
                        {!isLoading ?
                            <TouchableOpacity
                                style={{ width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', height: 50, marginTop: 20, borderRadius: 8 }}
                                onPress={() => {
                                    this.setState({ isLoading: !isLoading })
                                    setTimeout(() => {
                                        this.setState({ isLoading: false });
                                        showMessage({
                                            message: t('app:langUpdated'),
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
                                <CustomText text={'updateLang'} style={{ color: 'white', fontSize: 20 }} />
                            </TouchableOpacity>
                        :
                            <View
                                style={{ width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', height: 50, marginTop: 20, borderRadius: 8 }}>
                                <ActivityIndicator size={'large'} color={'white'} />
                            </View>
                        }
                    </View>
                );
        }
    };
    validate = (text) => {
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
        alignItems: 'center'
    },
    nameContainer: {
        backgroundColor: 'white',
        width: '100%',
        paddingVertical: 25,
        paddingHorizontal: 10,
        alignItems: 'center',
        borderRadius: 10
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        // margin: 20,
        height: '100%',
        width: '100%',
        backgroundColor: "white",
        borderWidth: 1,
        borderRadius: 20,
        // padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
})