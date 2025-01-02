import { Box, Grid, Text } from "@chakra-ui/react"

interface DividerHeadingProps {
    // children: any
    title: string
}

export const DividerHeading: React.FC<DividerHeadingProps> = ({ title }) => {
    return (
        <Grid gap={4} templateColumns="auto 1fr" alignItems="end" fontSize={'4xl'} mt={16}>
            <Text as={'h2'} fontWeight={'light'}>{title}</Text>
            <Box w={'full'} h={.5} bg={'currentcolor'} mb={4}></Box>
        </Grid>
    )
}