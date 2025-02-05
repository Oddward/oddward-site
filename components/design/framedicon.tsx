'use client'
import { Card } from "@chakra-ui/react"
import { useColorModeValue } from "../ui/color-mode"

interface FramedIconProps {
    children: React.ReactNode
}

export const FramedIcon: React.FC<FramedIconProps> = ({ children }) => {
    return (
        <Card.Root w="full" h="auto" aspectRatio={'1/1'} fontSize={'4xl'} borderRadius="2xl" border="solid .5px" borderColor="fg.subtle" bg={useColorModeValue("gray.100", "gray.800")} color={useColorModeValue("gray.500", "gray.400")} flexGrow={0} justifyContent="center" alignItems="center" variant={'outline'} p={6} boxSizing="border-box">
            {children}
        </Card.Root>
    )
}