'use client'
import { Flex, Text } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface PillTextProps {
    text: string
    children?: ReactNode
    className?: string
    color?: string
    bg?: string
}

export const PillText: React.FC<PillTextProps> = ({ 
    text, 
    children, 
    color = "fg.muted",
    bg,
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
            bg={bg ? bg : "bg.subtle"}
            color={color}
            {...props}
        >
            <Text fontSize="md" fontWeight="medium">{text}</Text>
            {/* {children && <Box ml={2}>{children}</Box>} */}
            {children}
        </Flex>
    )
}

export default PillText