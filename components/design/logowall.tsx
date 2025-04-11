import { Box, Grid, Image, Text, Container } from '@chakra-ui/react'
import { useColorModeValue } from '../ui/color-mode'

interface LogoProps {
    src: string
    alt: string
    width?: number | string
    height?: number | string
}

interface LogoWallProps {
    logos: LogoProps[]
    title?: string
    subtitle?: string
    columns?: { base: number; md: number; lg: number }
    gap?: number
    opacity?: number
    maxLogoWidth?: string
}

const LogoWall = ({
    logos,
    title = "Trusted by",
    subtitle,
    columns = { base: 2, md: 3, lg: 5 },
    gap = 8,
    opacity = 0.5,
    maxLogoWidth = "120px"
}: LogoWallProps) => {
    // const bgColor = useColorModeValue('gray.50', 'gray.900')
    // const textColor = useColorModeValue('gray.600', 'gray.400')
    
    return (
        // <Box py={12} bgColor="fg/20">
            <Container 
            maxW="container.xl"
            p={8}
            color={'fg.subtle'}
            bgColor="fg/10" 
            borderRadius={'md'}
            >
                {title && (
                    <Text 
                        textAlign="center" 
                        fontSize="lg" 
                        fontWeight="medium" 
                        mb={subtitle ? 2 : 8}
                    >
                        {title}
                    </Text>
                )}
                
                {subtitle && (
                    <Text
                        textAlign="center"
                        fontSize="md"
                        mb={8}
                    >
                        {subtitle}
                    </Text>
                )}
                
                <Grid
                    templateColumns={{
                        base: `repeat(${columns.base}, 1fr)`,
                        md: `repeat(${columns.md}, 1fr)`,
                        lg: `repeat(${columns.lg}, 1fr)`
                    }}
                    gap={gap}
                    justifyItems="center"
                    alignItems="center"
                >
                    {logos.map((logo, index) => (
                        <Box 
                            key={index} 
                            opacity={opacity}
                            transition="opacity 0.2s"
                            _hover={{ opacity: 1 }}
                            maxW={maxLogoWidth}
                        >
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                title={logo.alt}
                                width={logo.width}
                                height={logo.height}
                                objectFit="contain"
                            />
                        </Box>
                    ))}
                </Grid>
            </Container>
        // </Box>
    )
}

export default LogoWall