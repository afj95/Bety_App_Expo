import React, { useRef } from 'react';
import {
  View,
  FlatList,
  Animated,
  StyleSheet,
} from "react-native";
// Components
import { HomeItem, Header } from "./components";
// Fake data
import { homes } from "../../fakeData/";
import { HeaderBottom } from '../../components/UI/HeaderBottomSeperator';

const {diffClamp} = Animated;
const headerHeight = 80 * 2;

export const HomeScreen = ({ navigation }) => {
  const translateYNumber = useRef();
  const ref = useRef(null);
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

  return (
    <View style={{ flex: 1 }}>
      <Animated.View style={[styles.header, {transform: [{translateY}]}]}>
        <Header navigation={navigation} text={'homeScreen'} headerHeight={headerHeight} />
      </Animated.View>

      {/* TODO: Get homes from API */}
      <Animated.FlatList
        scrollEventThrottle={1}
        bounces={false}
        keyExtractor={(item, index) => '#' + index.toString()}
        key={(item, index) => index.toString()}
        data={homes}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={ <View style={{ height: 80 }}/>}
        // onMomentumScrollEnd={handleSnap}
        onScroll={handleScroll}
        renderItem={({ item, index }) => <HomeItem key={index} home={item} />}
      />
    </View>
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