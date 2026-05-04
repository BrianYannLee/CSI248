import { StyleSheet, Text, View, Platform } from "react-native";
import React from "react";

const PlatformScreen = () => {
  console.log(Platform.OS);
  return (
    <View>
      <Text>PlatformScreen</Text>
      <Text>Platform: {Platform.OS}</Text>
    </View>
  );
};

export default PlatformScreen;

const styles = StyleSheet.create({});
