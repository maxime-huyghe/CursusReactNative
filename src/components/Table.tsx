import { StyleProp, Text, TextStyle, View, ViewStyle } from "react-native"

type Props = {
  headers: string[]
  data: string[][]
}

const Table = ({ headers, data }: Props) => {
  const rowStyle: StyleProp<ViewStyle> = {
    flexDirection: "row",
  }

  const cellStyle: StyleProp<TextStyle> = {
    minWidth: `${Math.floor(100 / headers.length)}%`,
  }

  return (
    <View>
      <View style={rowStyle} key="header">
        {headers.map(header => (
          <Text style={cellStyle}>{header}</Text>
        ))}
      </View>
      {data.map((row, i) => (
        <View style={rowStyle} key={i}>
          {row.map((cell, i) => (
            <Text style={cellStyle} key={i}>
              {cell}
            </Text>
          ))}
        </View>
      ))}
    </View>
  )
}

export default Table
