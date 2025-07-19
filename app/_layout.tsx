import { SplashScreenController } from '@/components'
import { dispatchIsFontReady } from '@/states'
import { theme } from '@/theme'
import { Roboto_400Regular, useFonts } from '@expo-google-fonts/roboto'
import { DarkTheme, ThemeProvider } from '@react-navigation/native'
import { Stack } from 'expo-router'
import { useEffect } from 'react'
import { StatusBar, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const MainRoutes = () => {
  return (
    <ThemeProvider value={DarkTheme}>
      <Stack screenOptions={{ headerShown: false }} />
    </ThemeProvider>
  )
}

export default function RootLayout() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular })

  useEffect(() => {
    dispatchIsFontReady(fontsLoaded)
  }, [fontsLoaded])

  return (
    <SafeAreaView style={[style.container, StyleSheet.absoluteFill]}>
      <StatusBar backgroundColor={theme.colors.background} barStyle="light-content" translucent />
      <SplashScreenController>
        <MainRoutes />
      </SplashScreenController>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
})
