import { theme } from '@/theme'
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native'

interface TouchableOpacityCustomProps extends TouchableOpacityProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
}

export const TouchableOpacityCustom = ({ children, variant = 'primary', ...props }: TouchableOpacityCustomProps) => {
  const buttonStyles = [styles.button_base, styles[`button_${variant}`], props.disabled && styles.disabled]

  return (
    <TouchableOpacity style={buttonStyles} activeOpacity={0.7} {...props}>
      {children}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button_base: {
    width: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 100,
    borderWidth: 1,
    borderStyle: 'solid',
  },

  button_primary: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },

  button_secondary: {
    backgroundColor: theme.colors.background,
    borderColor: theme.colors.outline,
  },

  disabled: {
    opacity: 0.5,
  },
})
