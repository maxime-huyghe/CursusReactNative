import { useState } from "react"
import { Button, StyleProp, TextInput, TextStyle, View } from "react-native"
import { useCursusStore } from "../cursusStore"
import { styles } from "../globalStyles"

const Add = () => {
  const cursus = useCursusStore()

  const [sigle, setSigle] = useState("")
  const [categorie, setCategorie] = useState("")
  const [parcours, setParcours] = useState("")
  const [credits, setCredits] = useState("")

  function updateCredits(text: string) {
    setCredits(text.replace(/\D/g, ""))
  }

  function submitModule() {
    cursus.addModule({
      sigle,
      categorie,
      parcours,
      credits: Number(credits),
    })

    setSigle("")
    setCategorie("")
    setParcours("")
    setCredits("")
  }

  return (
    <View style={[styles.container, { alignItems: "stretch" }]}>
      <TextInput style={inputStyle} value={sigle} onChangeText={setSigle} />
      <TextInput
        style={inputStyle}
        value={categorie}
        onChangeText={setCategorie}
      />
      <TextInput
        style={inputStyle}
        value={parcours}
        onChangeText={setParcours}
      />
      <TextInput
        style={inputStyle}
        value={credits}
        onChangeText={updateCredits}
        keyboardType="number-pad"
      />
      <Button title="Ajouter le module" onPress={submitModule} />
    </View>
  )
}

const inputStyle: StyleProp<TextStyle> = {
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: "black",
}

export default Add
