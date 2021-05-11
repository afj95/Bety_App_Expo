import React from 'react'
import { View } from 'react-native';
// components
import { Header, Body, Footer } from "./components";

export const StuffScreen = (params) => {
    return (
        <>
            <Header
                navigation={params.navigation}
                name={params.route.params.home}
            />
            <Body />
            <View style={{ marginTop: 5 }} />
            <Footer />
        </>
    )
}