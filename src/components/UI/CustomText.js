import React from "react";
import { Text, StyleSheet } from "react-native";
import { t } from "../../i18next";
import Colors from '../../utils/Colors';

const CustomText = (props) => {
  return (
    <Text
      selectable={props.selectable}
      style={{ ...styles.text, ...props.style }}
    >
      {t(`app:${props.text}`) || t(`app:${props.children}`)}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: Colors.text,
  },
});

export default CustomText;
