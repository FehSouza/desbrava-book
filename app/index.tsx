import { theme } from '@/theme'
import { Text, View } from 'react-native'

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.background,
      }}
    >
      <Text style={{ color: theme.colors.onSurface, fontFamily: theme.fontFamily.roboto400 }}>Hello World</Text>
    </View>
  )
}
