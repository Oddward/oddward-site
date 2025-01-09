import { Text } from "@chakra-ui/react"

export const WarmText = ({ children }) => <Text as={'span'} bgGradient={'warm'} bgClip={'text'}>{children}</Text>