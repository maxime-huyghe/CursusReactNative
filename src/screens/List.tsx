import { StatusBar } from "expo-status-bar"
import { Text, View } from "react-native"
import Table from "../components/Table"
import { useCursusStore } from "../cursusStore"
import { styles } from "../globalStyles"

const List = () => {
  const cursus = useCursusStore()

  console.log("modules", cursus)
  return (
    <View style={styles.container}>
      <Table
        headers={["Sigle", "Catégorie", "Parcours", "Crédits"]}
        data={cursus.modules.map(mod => [
          mod.sigle,
          mod.categorie,
          mod.parcours,
          mod.credits.toString(),
        ])}
      />
    </View>
  )
}

export default List
