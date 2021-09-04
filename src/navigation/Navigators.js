import React from 'react';
// icons
import { AntDesign } from '@expo/vector-icons';
// Navigation
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Screens
import { HomeScreen } from '../screens/HomeScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { StuffScreen } from '../screens/StuffScreen';
import { EditProfileScreen } from '../screens/EditProfileScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';
import EditScreen from '../screens/EditProfileScreen/EditScreen';
import MyText from '../components/UI/MyText';

const AuthStack = createStackNavigator();
export const AuthStackScreens = () => (
  <AuthStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <AuthStack.Screen name="Login" component={LoginScreen} />
    <AuthStack.Screen name="Register" component={RegisterScreen} />
    <AuthStack.Screen name="Home" component={HomeStackScreen} />
  </AuthStack.Navigator>
)

const StuffStuck = createStackNavigator();
export const StuffStuckScreen = () => (
  <StuffStuck.Navigator
    screenOptions={{
      headerShown: false
    }}>
    <StuffStuck.Screen name="StuffScreen" component={StuffScreen} />
  </StuffStuck.Navigator>
)

const ProfileStuck = createStackNavigator();
export const ProfileStuckScreen = () => (
    <ProfileStuck.Navigator
        screenOptions={{
            headerShown: false,
        }}>
      <ProfileStuck.Screen name="Profile" component={ProfileScreen} />
      <ProfileStuck.Screen name="EditScreen"    component={EditProfileScreen} />
      <ProfileStuck.Screen name="Edit"    component={EditScreen} />
    </ProfileStuck.Navigator>
)

const HomeStack = createStackNavigator();
export const HomeStackScreen = () => (
  <HomeStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <HomeStack.Screen name='Home' component={TabScreen} />
    <HomeStack.Screen name="Stuff" component={StuffStuckScreen} />
  </HomeStack.Navigator>
);

const Tab = createBottomTabNavigator();
export const TabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          const color = focused ? 'blue' : 'black';
          if (route.name === 'HomeTab') {
            iconName = 'home';
          } else if (route.name === 'ProfileTab') {
              iconName = 'user'
          } //else if (route.name === 'SettingsTab') {
          //   return <Feather name='settings' size={23} color={color}/>
          // }
          return <AntDesign name={iconName} size={23} color={color} />;
        },
      })}
      >
      
      <Tab.Screen
        name='HomeTab'
        component={HomeScreen}
        options={() => ({
          tabBarLabel: ({focused}) => <MyText style={{color: focused? 'blue':'black', fontSize: 12, marginBottom: 5}} text={'homeTab'} />
        })}

      />
      <Tab.Screen
        name='ProfileTab'
        component={ProfileStuckScreen}
        options={({ route }) => ({
          tabBarVisible: getTabVisibility(route),
          tabBarLabel: ({focused}) => <MyText style={{color: focused? 'blue':'black', fontSize: 12, marginBottom: 5}} text={'profileTab'} />
        }) }
      />
    </Tab.Navigator>
  );
};

const getTabVisibility = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route);

  switch(routeName) {
    case 'Edit':
      return false;
    case 'Edit':
      return false;
    default: return true;
  }
}