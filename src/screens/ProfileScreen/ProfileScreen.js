import React, { useState } from 'react';
import { View, Dimensions } from 'react-native';
import { ProfileBody } from './components';
import { Header } from "../../components/UI/Header";

const { height } = Dimensions.get('window');

export const ProfileScreen = ({ navigation }) => {

    return (
        <View style={{ flex: 1 }}>
            <Header navigation={navigation} text={'profileTab'} />
            <ProfileBody />
        </View>
    );
}