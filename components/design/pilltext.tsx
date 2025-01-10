import { Flex, Text } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { useColorModeValue } from '../ui/color-mode'

interface PillTextProps {
    text: string
    children?: ReactNode
    className?: string
    bg?: string
}

export const PillText: React.FC<PillTextProps> = ({ 
    text, 
    children, 
    bg = useColorModeValue("gray.100", "gray.800"),
    ...props 
}) => {
    return (
        <Flex
            display="inline-flex"
            gap={4}
            alignItems="center"
            px={4}
            py={2}
            borderRadius="full"
            bg={bg}
            {...props}
        >
            <Text fontSize="md" fontWeight="medium">{text}</Text>
            {/* {children && <Box ml={2}>{children}</Box>} */}
            {children}
        </Flex>
    )
}

export default PillText