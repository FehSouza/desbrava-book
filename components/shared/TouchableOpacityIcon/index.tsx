import { StyleSheet, View } from 'react-native'
import { TouchableOpacityCustom, TouchableOpacityCustomProps } from '../TouchableOpacityCustom'

export const TouchableOpacityIcon = ({ children, ...props }: TouchableOpacityCustomProps) => {
  return (
    <TouchableOpacityCustom {...props}>
      <View style={styles.container}>{children}</View>
    </TouchableOpacityCustom>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
})
