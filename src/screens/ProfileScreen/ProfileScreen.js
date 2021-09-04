import React, { useState } from 'react';
import { View, Dimensions } from 'react-native';
import { ProfileBody } from './components';
import { MainHeader } from "../../components/UI/MainHeader";

const { height } = Dimensions.get('window');

export const ProfileScreen = ({ navigation }) => {

    return (
        <View style={{ flex: 1 }}>
            <MainHeader navigation={navigation} text={'profileTab'} />
            <ProfileBody navigation={navigation} />
        </View>
    );
}