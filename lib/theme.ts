import { createSystem, defaultConfig, defineConfig, defineSlotRecipe } from "@chakra-ui/react"
import colors from "tailwindcss/colors"
import { cardAnatomy } from "@chakra-ui/react/anatomy"

const cardSlotRecipe = defineSlotRecipe({
    className: "chakra-card",
    slots: cardAnatomy.keys(),
    base: {
      root: {
        display: "flex",
        flexDirection: "column",
        position: "relative",
        minWidth: "0",
        wordWrap: "break-word",
        borderRadius: "l3",
        color: "fg",
        textAlign: "start",
      },
      title: {
        fontWeight: "semibold",
      },
      description: {
        color: "fg.muted",
        fontSize: "sm",
      },
      header: {
        paddingInline: "var(--card-padding)",
        paddingTop: "var(--card-padding)",
        display: "flex",
        flexDirection: "column",
        gap: "1.5",
      },
      body: {
        padding: "var(--card-padding)",
        flex: "1",
        display: "flex",
        flexDirection: "column",
      },
      footer: {
        display: "flex",
        alignItems: "center",
        gap: "2",
        paddingInline: "var(--card-padding)",
        paddingBottom: "var(--card-padding)",
      },
    },
    variants: {
      size: {
        sm: {
          root: {
            "--card-padding": "spacing.4",
          },
          title: {
            textStyle: "md",
          },
        },
        md: {
          root: {
            "--card-padding": "spacing.6",
          },
          title: {
            textStyle: "lg",
          },
        },
        lg: {
          root: {
            "--card-padding": "spacing.7",
          },
          title: {
            textStyle: "xl",
          },
        },
      },
  
      variant: {
        elevated: {
          root: {
            bg: "bg.panel",
            boxShadow: "md",
          },
        },
        outline: {
            root: {
              bg: 'transparent',
              borderColor: 'border',
              borderRadius: 'md'
            }
        },
        subtle: {
          root: {
            bg: "bg.muted",
          },
        },
        plain: {
          root: {
            bg: "brand.surface",
            color: "inherit",
            _hover: {
              bgColor: "brand.surface/10",
              // color: "brand.fg",
            },
          }
        },
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "md",
    },
})

const customConfig = defineConfig({
theme: {
    tokens: {
        gradients: {
            warm: { value: `linear-gradient(to bottom right, ${colors.amber[500]} 0%, ${colors.red[600]} 100%)` },
            instagram: { value: "radial-gradient(ellipse at top left, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)" },
        },
        colors: {
            dribbble: { value: "#ea4c89" },
        }
    },
    semanticTokens: {
        colors: {
            bg: {
              DEFAULT: { value: "brand.bg" },
              base: { value: colors.slate[500] },
              subtle: { value: colors.slate[800] },
              l1: { value: colors.slate[700] },
            },
            border: { value: {
              _light: "gray",
              _dark: "#334155"
            } },
            brand: {
                bg: { value: {
                  _light: "lightyellow",
                  _dark: "#0f172a"
                }},
            }
        },
        easings: {
            slick: { value: "cubic-bezier(0.7, 0, 0.3, 1)" }
        },
    },
    slotRecipes: {
        card: cardSlotRecipe
    }
},
globalCss: {
    "html": {
      colorPalette: "orange",
      // colorScheme: "dark",
    },
    "body": {
      // bg: colors.slate[900],
      background: "brand.bg",
      // colorScheme: "dark"
    }
}
})
  
const designSystem = createSystem(defaultConfig, customConfig)

export default designSystem