import React from 'react'
import { useEffect } from 'react'
import * as Notifications from 'expo-notifications';

// TODO: retest the notifications

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: true,
  }),
});

const NotificationsConstructor = () => {
  const trigger = Platform.OS === "ios" ?
    {
        hour: 8,
        minute: 15,
        type: "daily",
    }
  : 
    {
        hour: 8,
        minute: 15,
        repeats: true,
    };
  
  useEffect(() => {
      Notifications.cancelAllScheduledNotificationsAsync();
      const triggerNotificationHandler = async () => {
        await Notifications.scheduleNotificationAsync({
          content: {
            title: "Notification Title",
            body: "Notification Body",
            data: { mySpecialData: "Some text" },
          },
          trigger: trigger,
        });
      };
      triggerNotificationHandler();
      
      const backgroundSubscription = Notifications.addNotificationResponseReceivedListener((response) => {});
  
      const foregroundSubscription = Notifications.addNotificationReceivedListener((notification) => {});
  
      // when component is unmounted
      return () => {
        backgroundSubscription.remove();
        foregroundSubscription.remove();
      };
  }, []);
  return <></>
}

export default NotificationsConstructor;