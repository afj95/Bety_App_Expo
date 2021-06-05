import React from 'react'
import { View } from 'react-native';
import { Header } from "../../components/UI/Header";
import Colors from '../../utils/Colors';
// Components
import { Body } from './components';

export const EditProfileScreen = ({ navigation }) => {
    return (
        <View style={{ height: '100%', backgroundColor: '#fff' }}>
            <Header
                navigation={navigation}
                text={'editProfile'}
                showGoBackButton={true}
            />
            <Body />
        </View>
    );
};