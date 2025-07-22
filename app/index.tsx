import { Button } from '@/components'
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
      <Button>
        <Text style={{ color: theme.colors.onPrimary }}>Hello World</Text>
      </Button>

      <Button disabled>
        <Text style={{ color: theme.colors.onPrimary }}>Hello World</Text>
      </Button>

      <Button variant="secondary">
        <Text style={{ color: theme.colors.primary }}>Hello World</Text>
      </Button>

      <Button variant="secondary" disabled>
        <Text style={{ color: theme.colors.primary }}>Hello World</Text>
      </Button>
    </View>
  )
}
