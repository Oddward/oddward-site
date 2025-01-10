import { Text } from "@chakra-ui/react"

type wrapper = {
    children: React.ReactNode
}

export const WarmText = ({ children }: wrapper) => <Text as={'span'} bgGradient={'warm'} bgClip={'text'}>{children}</Text>