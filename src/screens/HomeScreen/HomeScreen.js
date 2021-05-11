import React from 'react';
import {
    View,
    Dimensions,
    FlatList,
    Animated,
} from "react-native";
// import Animated from 'react-native-reanimated';
// Components
import { Header } from "../../components/UI/Header";
import { HeaderTest, HomeItem } from "./components"
// Fake data
import { homes } from "../../fakeData/";

const { height } = Dimensions.get('window');

export const HomeScreen = ({ navigation }) => {
  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, 90);
  const translateY = diffClamp.interpolate({
    inputRange: [0, 70],
    outputRange: [0, -70]
  })
  return (
    <View style={{ flex: 1 }}>
    <Animated.View style={{
      transform: [{translateY: translateY}],
      elevation: 5,
      zIndex: 100
    }}>
      <Header navigation={navigation} text={'Homes'} />
    </Animated.View>

      {/* Get homes from API */}
      <FlatList
        scrollEventThrottle={1}
        bounces={false}
        keyExtractor={(item, index) => '#' + index.toString()}
        key={(item, index) => index.toString()}
        data={homes}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={ <View style={{ height: 70 }}/>}
        onScroll={(e) => {scrollY.setValue(e.nativeEvent.contentOffset.y)}}
        renderItem={({ item, index }) => <HomeItem key={index} home={item} />}
      />
    </View>
  )
};