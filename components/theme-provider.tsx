"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

export function useTheme() {
  const { theme, setTheme, resolvedTheme } = React.useContext(
    React.createContext({
      theme: "",
      setTheme: (theme: string) => {},
      resolvedTheme: "",
    }),
  )

  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return {
    theme: mounted ? theme : undefined,
    setTheme,
    resolvedTheme: mounted ? resolvedTheme : undefined,
  }
}

