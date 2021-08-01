import React, { useState } from 'react'
import { View } from 'react-native';
import { MainHeader } from '../../components/UI/MainHeader';
// components
import { Body, Footer } from "./components";


export const StuffScreen = (params) => {
    const [isLoading, setIsLoading] = useState(false);
    return (
        <>
            {/* <Header
                navigation={params.navigation}
                name={params.route.params.home}
            /> */}
            <MainHeader
                navigation={params.navigation}
                text={params.route.params.home}
                showGoBackButton={true}
            />
            <Body />
            <View style={{ marginTop: 5 }} />
            <Footer isLoading={isLoading} setIsLoading={setIsLoading} />
        </>
    )
}