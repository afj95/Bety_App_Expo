import React from "react";
import { Text, StyleSheet } from "react-native";
import Colors from '../../utils/Colors';

// Text.defaultProps.allowFontScaling = false;
const CustomText = (props) => {
  return (
    <Text
      selectable={props.selectable}
      style={{ ...styles.text, ...props.style }}
    >
      {props.text || props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: Colors.text
  },
});

export default CustomText;
