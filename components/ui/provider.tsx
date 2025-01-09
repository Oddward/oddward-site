"use client"

import { ChakraProvider, createSystem, defaultConfig, defaultSystem, defineConfig } from "@chakra-ui/react"
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "./color-mode"
import colors from "tailwindcss/colors"

const config = defineConfig({
  theme: {
    tokens: {
      gradients: {
        warm: { value: "linear-gradient(to bottom right, #f6d365 0%, #fda085 100%)" },
        instagram: { value: "radial-gradient(ellipse at top left, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)" },
      },
      colors: {
        dribbble: { value: "#ea4c89" },
      }
    },
    semanticTokens: {
      colors: {
        bg: {
          subtle: { value: colors.slate[800] },
        }
      }
    }
  },
  globalCss: {
    html: {
      colorPalette: "yellow"
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
