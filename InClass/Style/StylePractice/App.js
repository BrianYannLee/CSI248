import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import ColumnContainers from "./screens/ColumnContainer";
import RowContainer from "./screens/RowContainer";
import GridContainer from "./screens/GridContainer";
import PlatformScreen from "./screens/PlatformScreen";
import ButtonScreen from "./screens/ButtonScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="ColumnContainers"
          component={ColumnContainers}
          options={{
            tabBarLabel: "Column",
          }}
        />
        <Tab.Screen
          name="RowContainer"
          component={RowContainer}
          options={{
            tabBarLabel: "Row",
          }}
        />
        <Tab.Screen
          name="GridContainers"
          component={GridContainer}
          options={{
            tabBarLabel: "Grid",
          }}
        />
        <Tab.Screen
          name="PlatformScreen"
          component={PlatformScreen}
          options={{
            tabBarLabel: "Platform",
          }}
        />
        <Tab.Screen
          name="ButtonScreen"
          component={ButtonScreen}
          options={{
            tabBarLabel: "Button",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
