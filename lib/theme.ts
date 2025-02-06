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
            brand: {
                bg: { value: '#0f172a' },
            }
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
  
const designSystem = createSystem(defaultConfig, customConfig)

export default designSystem