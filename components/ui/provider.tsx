"use client"

import { ChakraProvider, createSystem, defaultConfig, defaultSystem, defineConfig } from "@chakra-ui/react"
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "./color-mode"

const config = defineConfig({
  theme: {
    tokens: {
      gradients: {
        warm: { value: "linear-gradient(to bottom right, #f6d365 0%, #fda085 100%)" },
      }
    }
  },
  globalCss: {
    html: {
      colorPalette: "blue"
    },
    body: {
      bg: {_dark: "blue.950", _light: "yellow.100"}
    }
  }
})

const designSystem = createSystem(defaultConfig, config)

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={designSystem}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
