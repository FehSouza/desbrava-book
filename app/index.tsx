import { TouchableOpacityCustom } from '@/components'
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
      <TouchableOpacityCustom>
        <Text style={{ color: theme.colors.onPrimary }}>Hello World</Text>
      </TouchableOpacityCustom>

      <TouchableOpacityCustom disabled>
        <Text style={{ color: theme.colors.onPrimary }}>Hello World</Text>
      </TouchableOpacityCustom>

      <TouchableOpacityCustom variant="secondary">
        <Text style={{ color: theme.colors.primary }}>Hello World</Text>
      </TouchableOpacityCustom>

      <TouchableOpacityCustom variant="secondary" disabled>
        <Text style={{ color: theme.colors.primary }}>Hello World</Text>
      </TouchableOpacityCustom>
    </View>
  )
}
