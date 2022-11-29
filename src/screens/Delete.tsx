import { useState } from "react"
import { Button, StyleProp, TextInput, TextStyle, View } from "react-native"
import { useCursusStore } from "../cursusStore"
import { styles } from "../globalStyles"

const Delete = () => {
  const cursus = useCursusStore()

  const [sigle, setSigle] = useState("")

  function submitModule() {
    cursus.deleteModule(sigle)
    setSigle("")
  }

  return (
    <View style={styles.container}>
      <TextInput style={inputStyle} value={sigle} onChangeText={setSigle} />
      <Button title="Supprimer le module" onPress={submitModule} />
    </View>
  )
}

const inputStyle: StyleProp<TextStyle> = {
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: "black",
}

export default Delete
