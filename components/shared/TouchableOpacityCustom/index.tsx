import { theme } from '@/theme'
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native'

export interface TouchableOpacityCustomProps extends TouchableOpacityProps {
  children: React.ReactNode
  size?: 'medium' | 'large'
  variant?: 'primary' | 'secondary'
}

export const TouchableOpacityCustom = ({
  children,
  size = 'medium',
  variant = 'primary',
  ...props
}: TouchableOpacityCustomProps) => {
  const sizeStyle = SIZE_STYLE_MAP[size]
  const variantStyle = VARIANT_STYLE_MAP[variant]
  const disabledStyle = props.disabled ? styles.button_disabled : {}
  const buttonStyles = [styles.button_base, sizeStyle, variantStyle, disabledStyle]

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
    borderWidth: 1,
    borderStyle: 'solid',
  },

  button_medium: {
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 100,
  },

  button_large: {
    minWidth: 56,
    minHeight: 56,
    padding: 16,
    borderRadius: 16,
  },

  button_primary: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },

  button_secondary: {
    backgroundColor: theme.colors.background,
    borderColor: theme.colors.outline,
  },

  button_disabled: {
    opacity: 0.5,
  },
})

const SIZE_STYLE_MAP = {
  medium: styles.button_medium,
  large: styles.button_large,
}

const VARIANT_STYLE_MAP = {
  primary: styles.button_primary,
  secondary: styles.button_secondary,
}
