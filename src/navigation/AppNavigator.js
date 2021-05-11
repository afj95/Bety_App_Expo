import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Host } from 'react-native-portalize';
import { navigationRef } from './RootNavigation';
import { TabScreen, HomeStackScreen } from './StoneNavigator';

export const AppNavigator = () => {
    // const [tabBarVisible, setTabBarVisible] = useState('flex');
    return (
        <NavigationContainer ref={navigationRef}>
            <Host>
                {/* <DrawerNavigator /> */}
                {/* <TabScreen /> */}
                <HomeStackScreen />
                 {/* tabBarVisible={tabBarVisible} setTabBarVisible={setTabBarVisible} /> */}
            </Host>
        </NavigationContainer>
    )
}