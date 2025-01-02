import { Card } from "@chakra-ui/react"
import { useColorModeValue } from "../ui/color-mode"

interface FramedIconProps {
    children: React.ReactNode
}

export const FramedIcon: React.FC<FramedIconProps> = ({ children }) => {
    return (
        <Card.Root w={20} h={20} aspectRatio={'1/1'} fontSize={'4xl'} borderRadius="2xl" bg={useColorModeValue("gray.100", "gray.800")} color={useColorModeValue("gray.500", "gray.400")} flexGrow={0} justifyContent="center" alignItems="center" variant={'outline'}>
            {children}
        </Card.Root>
    )
}