'use client'
import { Card, Span } from "@chakra-ui/react"
import { useColorModeValue } from "../ui/color-mode"

interface FramedIconProps {
    children: React.ReactNode
    label?: string
}

export const FramedIcon: React.FC<FramedIconProps> = ({ children, label }) => {
    return (
        <Card.Root variant={'outline'} fontSize={'4xl'} 
        borderRadius="2xl" border="solid .5px" borderColor="fg.subtle" 
        bg={useColorModeValue("gray.100", "gray.800")} color={useColorModeValue("gray.500", "gray.400")} 
        flexGrow={0} justifyContent="center" alignItems="center" 
        w="full" h="auto" aspectRatio={'1/1'} 
        p={6} boxSizing="border-box"
        transition={'all .25s'}
        transitionTimingFunction={'slick'}
        className="group">
            {children}
            {label && 
                <Span 
                fontSize={'sm'} 
                opacity={0} 
                translateY={'0'}
                _groupHover={{opacity:1, translateY:'-1rem'}}>
                    {label}
                </Span>
            }
        </Card.Root>
    )
}