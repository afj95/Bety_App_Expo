import React, { useRef } from 'react';
import {
  View,
  FlatList,
  Animated,
  StyleSheet,
  Image,
} from "react-native";
// Components
import { HomeItem, Header } from "./components";
// Fake data
import { homes } from "../../fakeData/";
import { useSelector } from 'react-redux';
import MyText from '../../components/UI/MyText';

const {diffClamp} = Animated;
const headerHeight = 80 * 2;

export const HomeScreen = ({ navigation }) => {
  const user = useSelector(state => state.auth);
  // console.log(user)

  const translateYNumber = useRef();
  const scrollY = useRef(new Animated.Value(0));
  const scrollYClamped = diffClamp(scrollY.current, 0, headerHeight);

  const translateY = scrollYClamped.interpolate({
    inputRange: [0, 120],
    outputRange: [0, -70]
  });

  translateY.addListener(({value}) => {
    translateYNumber.current = value;
  });

  const handleScroll = Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: {y: scrollY.current},
        },
      },
    ],
    {
      useNativeDriver: true,
    },
  );

  // const handleSnap = ({nativeEvent}) => {
  //   const offsetY = nativeEvent.contentOffset.y;
  //   if (
  //     !(
  //       translateYNumber.current === 0 ||
  //       translateYNumber.current === -headerHeight / 2
  //     )
  //   ) {
  //     if (ref.current) {
  //       ref.current.scrollToOffset({
  //         offset:
  //           getCloser(translateYNumber.current, -headerHeight / 2, 0) ===
  //           -headerHeight / 2
  //             ? offsetY + headerHeight / 2
  //             : offsetY - headerHeight / 2,
  //       });
  //     }
  //   }
  // };

  const EmptyComponent = () => (
    <View style={{ alignItems: 'center', paddingHorizontal: 10 }}>
      <Image source={require('../../assets/images/9073-empty-store-box.gif')}
        style={{ width: '95%', borderWidth: 1, resizeMode: 'contain' }} />
    </View>
  )

  return (
    <>
      <Animated.View style={[styles.header, {transform: [{translateY}]}]}>
        <Header navigation={navigation} text={'homeScreen'} headerHeight={headerHeight} />
      </Animated.View>
    <View style={{ flex: 1, padding: 10, backgroundColor: '#fff' }}>

      {/* TODO: Get homes from API */}
      <Animated.FlatList
        scrollEventThrottle={1}
        bounces={false}
        keyExtractor={(item, index) => '#' + index.toString()}
        key={(item, index) => index.toString()}
        data={[]}
        // TODO: Add empty component
        ListEmptyComponent={EmptyComponent}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={ <View style={{ height: 80 }}/>}
        // onMomentumScrollEnd={handleSnap}
        onScroll={handleScroll}
        renderItem={({ item, index }) => <HomeItem key={index} home={item} />}
      />
    </View>
    </>
  )
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    backgroundColor: '#fff',
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    left: 0,
    right: 0,
    width: '100%',
    zIndex: 1,
  },
});