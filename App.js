import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/view/screens/HomeScreen";
import DetailsSceeen from "./src/view/screens/DetailsScreen";
import COLORS from "./src/consts/colors";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      <Stack.Navigator screenOptions={{ header: () => null }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsSceeen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
