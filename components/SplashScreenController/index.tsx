import { useIsFontReadySelect } from '@/states'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect, useMemo } from 'react'

SplashScreen.preventAutoHideAsync()

interface SplashScreenControllerProps {
  children: React.ReactNode
}

export const SplashScreenController = ({ children }: SplashScreenControllerProps) => {
  const isFontReady = useIsFontReadySelect()
  const isReady = useMemo(() => [isFontReady].every(Boolean), [isFontReady])

  useEffect(() => {
    if (isReady) SplashScreen.hideAsync()
  }, [isReady])

  return <>{children}</>
}
