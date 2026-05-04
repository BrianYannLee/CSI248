import { navigationContainer } from "react-navigation";
import { createstackNavigator } from "@react-navigation/stack";
import TestHand from "./screens/Testhands";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TestHand" component={TestHand} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
