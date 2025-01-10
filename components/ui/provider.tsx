"use client"

import { ChakraProvider, createSystem, defaultConfig, defineConfig, defineSlotRecipe } from "@chakra-ui/react"
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "./color-mode"
import colors from "tailwindcss/colors"
import { cardAnatomy } from "@chakra-ui/react/anatomy"

const cardSlotRecipe = defineSlotRecipe({
  slots: cardAnatomy.keys(),
  variants: {
    variant: {
      outline: {
        root: {
          bg: 'transparent',
          borderColor: 'border',
          borderRadius: 'xl'
        }
      }
    }
  }
})

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
          base: { value: colors.slate[500] },
          subtle: { value: colors.slate[800] },
          l1: { value: colors.slate[700] },
        },
        border: { value: colors.slate[700] },
      }
    },
    slotRecipes: {
      card: cardSlotRecipe
    }
  },
  globalCss: {
    "html": {
      colorPalette: "yellow"
    },
    "body": {
      bg: colors.slate[900]
      // bg: {_dark: {"blue.950"}, _light: "yellow.100"}
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
