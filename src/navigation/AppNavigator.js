/**
 * NOT USED
 * Another level of starting the App, it may take more time
 */

import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Host } from 'react-native-portalize';
import { navigationRef } from './RootNavigation';
import { HomeStackScreen } from './MainNavigator';
import FlashMessage from 'react-native-flash-message';

export const AppNavigator = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <Host>
                <HomeStackScreen />
                <FlashMessage position={'top'} />
            </Host>
        </NavigationContainer>
    )
}