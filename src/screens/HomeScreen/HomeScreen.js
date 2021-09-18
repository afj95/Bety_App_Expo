import React, { useEffect, useRef } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  StatusBar,
  Platform
} from "react-native";
// Components
import { HomeItem, Header, EmptyComponent } from "./components";
import Loader from '../../components/Loaders/Loader';
import { useDispatch, useSelector } from 'react-redux';
// redux action
import { getUserHomes } from '../../reducers/home/homesActions';
import { showMessage } from 'react-native-flash-message';

// const {diffClamp} = Animated;
const headerHeight = 80 * 2;

export const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch()

  const isMounted = useRef(false);
  
  const user = useSelector(state => state?.authReducer?.user);
  const homes = useSelector(state => state?.homesReducer?.homes);
  const getHomesLoading = useSelector(state => state?.homesReducer?.getHomesLoading);
  const error = useSelector(state => state?.homesReducer?.error);

  {
    /*
    * These functions and vars for hiding header on scroll
    * I stopped it cuz can't refresh the list on swipe with <Animated.View />
    */

    // const translateYNumber = useRef();
    // const scrollY = useRef(new Animated.Value(0));
    // const scrollYClamped = diffClamp(scrollY.current, 0, headerHeight);

    // const translateY = scrollYClamped.interpolate({
    //   inputRange: [0, 120],
    //   outputRange: [0, -70]
    // });

    // translateY.addListener(({value}) => {
    //   translateYNumber.current = value;
    // });

    // const handleScroll = Animated.event(
    //   [{ nativeEvent: { contentOffset: {y: scrollY.current} } }],
    //   { useNativeDriver: true }
    // );
  }

  useEffect(() => {
    if(isMounted.current) {
      dispatch(getUserHomes())
    }
    isMounted.current = false
  }, [])

  // useEffect(() => {
  //   if(isMounted.current) {
  //     if(error === 500) {
  //       showMessage({
  //         message: 'server Error',
  //         type: 'danger',
  //         duration: 3000
  //       })
  //     }
  //   }
  //   isMounted.current = false;
  // }, [error])

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return (
    <>
      <View style={styles.header}>
        <Header navigation={navigation} text={'homeScreen'} headerHeight={headerHeight} />
      </View>
      <View style={styles.homesContainer}>
        {/* CRUD API for homes */}
        {getHomesLoading ? <Loader bg={'#fff'} /> :
          <FlatList
            keyExtractor={(item, index) => '#' + index.toString()}
            data={homes || []}
            ListEmptyComponent={<EmptyComponent user={user} />}
            showsVerticalScrollIndicator={false}
            onRefresh={() => {dispatch(getUserHomes())}}
            refreshing={getHomesLoading}
            // ListHeaderComponent={ <View style={{ height: 80 }}/>}
            // onMomentumScrollEnd={handleSnap}
            // onScroll={handleScroll}
            renderItem={({ item, index }) => <HomeItem key={index} home={item} />}
          />
        }
      </View>
    </>
  )
};

const styles = StyleSheet.create({
  header: {
    // marginTop: StatusBar.currentHeight,
    backgroundColor: '#fff',
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    width: '100%',
    zIndex: 1,
    // ...Platform.select({
    //   android: {
    //     marginTop: StatusBar.currentHeight
    //   },
    //   Ios: {
    //     marginTop: 22
    //   }
    // }),
  },
  homesContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff'
  },
});