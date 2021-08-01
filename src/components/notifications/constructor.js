// import React from 'react'
// import { useEffect } from 'react'
// import * as Notifications from 'expo-notifications';

// // TODO: retest the notifications

// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//     shouldShowAlert: true,
//     shouldPlaySound: false,
//     shouldSetBadge: true,
//   }),
// });

// const NotificationsConstructor = () => {
//   const trigger = Platform.OS === "ios" ?
//     {
//         hour: 8,
//         minute: 15,
//         type: "daily",
//     }
//   : 
//     {
//         hour: 8,
//         minute: 15,
//         repeats: true,
//     };
  
//   useEffect(() => {
//     Notifications.cancelAllScheduledNotificationsAsync();
//     const triggerNotificationHandler = async () => {
//       await Notifications.scheduleNotificationAsync({
//         content: {
//           title: "Notification Title",
//           body: "Notification Body",
//           data: { mySpecialData: "Some text" },
//         },
//         trigger: trigger,
//       });
//     };
//     triggerNotificationHandler();
    
//     const backgroundSubscription = Notifications.addNotificationResponseReceivedListener((response) => {});

//     const foregroundSubscription = Notifications.addNotificationReceivedListener((notification) => {});

//     // when component is unmounted
//     return () => {
//       backgroundSubscription.remove();
//       foregroundSubscription.remove();
//     };
//   }, []);
//   return <></>
// }

// export default NotificationsConstructor;


import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import React, { useState, useEffect, useRef } from 'react';
import { Text, View, Button, Platform } from 'react-native';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: false,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function NotificationsConstructor() {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  });

  return <></>

  async function registerForPushNotificationsAsync() {
    let token;
    if (Constants.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
    } else {
      alert('Must use physical device for Push Notifications');
    }

    if (Platform.OS === 'android') {
      console.log('android')
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.DEFAULT,
        sound: false,
        enableVibrate: false
      });
    }

    return token;
  }
}

export async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "You've got mail! 📬",
      body: 'Here is the notification body',
      data: { data: 'goes here' },
      sound: true,
      vibrate: 0,
    },
    trigger: { seconds: 1 },
  });
}