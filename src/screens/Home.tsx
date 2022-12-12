import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { StatusBar } from "expo-status-bar"
import { Button, Text, View } from "react-native"
import { StackParamList } from "../Cursus"
import { styles } from "../globalStyles"

type Props = NativeStackScreenProps<StackParamList, "Home">

const Home = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={{ textAlign: "center" }}>
        This is a React Native version of the Cursus app ! Click on a button to
        navigate.
      </Text>
      <Button
        title="Liste des modules"
        onPress={() => navigation.navigate("List")}
      />
      <Button
        title="Ajouter un module"
        onPress={() => navigation.navigate("Add")}
      />
    </View>
  )
}

export default Home
