import React, { useState } from 'react'
import { View } from 'react-native';
import { MainHeader } from '../../components/UI/MainHeader';
// components
import { Body, Footer } from "./components";


export const StuffScreen = (params) => {
    const [isLoading, setIsLoading] = useState(false);
    return (
        <>
            <MainHeader
                navigation={params.navigation}
                text={params?.route?.params?.name}
                showGoBackButton={true}
            />
            <Body />
            <Footer isLoading={isLoading} setIsLoading={setIsLoading} />
        </>
    )
}