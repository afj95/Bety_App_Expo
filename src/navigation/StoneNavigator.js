import React from 'react';
// icons
import { AntDesign } from '@expo/vector-icons';
// Navigation
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import { HomeScreen } from '../screens/HomeScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { StuffScreen } from '../screens/StuffScreen';
import { EditProfileScreen } from '../screens/EditProfileScreen';

const StuffStuck = createStackNavigator();
const StuffStuckScreen = () => (
  <StuffStuck.Navigator
    screenOptions={{
      headerShown: false
    }}>
    <StuffStuck.Screen name="StuffScreen" component={StuffScreen} />
  </StuffStuck.Navigator>
)

const ProfileStuck = createStackNavigator();
const ProfileStuckScreen = () => (
    <ProfileStuck.Navigator
        screenOptions={{
            headerShown: false,
        }}
    >
        <ProfileStuck.Screen name="Profile" component={ProfileScreen} />
        <ProfileStuck.Screen name="Edit"    component={EditProfileScreen} />
    </ProfileStuck.Navigator>
)

const HomeStack = createStackNavigator();
export const HomeStackScreen = () => (
  <HomeStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <HomeStack.Screen name='Home' component={TabScreen} />
    <HomeStack.Screen name="Stuff" component={StuffStuckScreen} />
  </HomeStack.Navigator>
);

// const Tab = createMaterialBottomTabNavigator();
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
      barStyle={{
          backgroundColor: '#fff',
          overflow: 'hidden',
          height: 50,
          justifyContent: 'center',
      }}
      activeColor={'blue'}
      inactiveColor={'black'}>
      
      <Tab.Screen
        name='HomeTab'
        // component={HomeStackScreen}
        component={HomeScreen}
        // options={({ route }) => ({
        //   tabBarVisible: getTabBarVisiblilty(route)
        // }) }

      />
      <Tab.Screen
        name='ProfileTab'
        component={ProfileStuckScreen}
        options={({ route }) => ({
          tabBarVisible: getFocusedRouteNameFromRoute(route) !== 'Edit'
        }) }
      />
    </Tab.Navigator>
  );
};

// const Drawer = createDrawerNavigator();
// export const DrawerNavigator = () => {
//   const drawers = [
//     {
//       name: 'Homes',
//       screen: TabScreen,
//       label: 'Homes',
//       icon: 'home-outline'
//     },
//     {
//       name: 'Settings',
//       screen: SettingsScreen,
//       label: 'Settings',
//       icon: 'home-outline'
//     }
//   ]

//   return (
//     <Drawer.Navigator
//       // drawerContent={props => <CustomDrawer {...props} />}
//       drawerContentOptions={{
//           activeTintColor: 'gray', // TODO: get colors from seperate file
//           itemStyle: { marginVertical: 3 },
//       }}
//     >
//       {drawers.map(({ name, icon, label, screen}) => (
//         <Drawer.Screen
//           key={name}
//           name={name}
//           component={screen}
//           options={() => ({
//             title: ({ focused }) => (
//                 <Text style={{
//                   fontSize: 14,
//                   fontWeight: '500',
//                   color: focused ? 'green' : 'gray'
//                 }}>
//                   {label}
//                 </Text>
//             ),
//             drawerIcon: ({ focused }) => (
//               <MaterialCommunityIcons
//                 name={icon}
//                 size={23}
//                 color={focused ? 'green' : 'gray'}
//               />
//             )
//           })}
//         />
//       ))}
//     </Drawer.Navigator>
//   )
// }