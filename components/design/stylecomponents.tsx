import { Text } from "@chakra-ui/react"

export const WarmText = ({ children }) => <Text bgGradient={'warm'} bgClip={'text'} display={'inline-block'}>{children}</Text>