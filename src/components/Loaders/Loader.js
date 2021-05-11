import React from "react";
import { View, Dimensions } from "react-native";
import { ActivityIndicator } from "react-native-paper";

const { width, height } = Dimensions.get("window");

const Loader = () => {
  return (
    <View
      style={{
        position: "absolute",
        flex: 1,
        width,
        height,
        backgroundColor: "rgba(128, 129, 130,0.5)",
        zIndex: 1001,
        justifyContent: "center",
      }}
    >
      <ActivityIndicator size='large' color={'#000'} />
    </View>
  );
};

export default Loader;
