import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { t } from "../../i18next";
import Colors from '../../utils/Colors';

const CustomText = (props) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Text
        selectable={props.selectable}
        style={{ ...styles.text, ...props.style }}
      >
        {t(`app:${props.text}`) || t(`app:${props.children}`)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: Colors.text,
  },
});

export default CustomText;
