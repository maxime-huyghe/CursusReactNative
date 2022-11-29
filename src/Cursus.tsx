import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StatusBar } from "expo-status-bar"
import Add from "./screens/Add"
import Delete from "./screens/Delete"
import Home from "./screens/Home"
import List from "./screens/List"

export type StackParamList = {
  Home: undefined
  List: undefined
  Add: undefined
  Delete: undefined
}

const Stack = createNativeStackNavigator<StackParamList>()

const Cursus = () => (
  <NavigationContainer>
    <StatusBar style="auto" />
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="Add" component={Add} />
      <Stack.Screen name="Delete" component={Delete} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default Cursus
