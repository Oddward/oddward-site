"use client"

import { ChakraProvider } from "@chakra-ui/react"
import designSystem from "@/lib/theme"
import { EmotionRegistry } from "./emotion-registry"

// The site is dark-only: the `dark` class is set on <html> in app/layout.tsx.
// next-themes' ColorModeProvider was dropped because its inline script broke hydration.
export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <EmotionRegistry>
      <ChakraProvider value={designSystem}>
        {children}
      </ChakraProvider>
    </EmotionRegistry>
  )
}
