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
import { showMessage } from 'react-native-flash-message';
// redux action
import { getUserHomes } from '../../reducers/home/homesActions';

// const {diffClamp} = Animated;
const headerHeight = 80 * 2;

export const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch()

  const isMounted = useRef(false);
  
  const user = useSelector(state => state?.authReducer?.user);
  const homesList = useSelector(state => state?.homesReducer?.homesList);
  const getHomesLoading = useSelector(state => state?.homesReducer?.getHomesLoading);
  const getHomesError = useSelector(state => state?.homesReducer?.getHomesError);

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
    // if(isMounted.current) {}
    dispatch(getUserHomes())
    // isMounted.current = false
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
            data={homesList || []}
            ListEmptyComponent={<EmptyComponent user={user} />}
            showsVerticalScrollIndicator={false}
            onRefresh={() => {dispatch(getUserHomes())}}
            refreshing={getHomesLoading}
            renderItem={({ item, index }) => <HomeItem key={index} home={item} />}
            // ListHeaderComponent={ <View style={{ height: 80 }}
            // onMomentumScrollEnd={handleSnap}
            // onScroll={handleScroll} />
          />
        }
      </View>
    </>
  )
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    width: '100%',
    zIndex: 1,
  },
  homesContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff'
  },
});