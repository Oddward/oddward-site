import { Box, Grid, Heading } from "@chakra-ui/react"

interface DividerHeadingProps {
    // children: any
    title: string
}

export const DividerHeading: React.FC<DividerHeadingProps> = ({ title }) => {
    return (
        <Grid gap={4} templateColumns="auto 1fr" alignItems="end" fontSize={'4xl'}>
            <Heading as={'h2'} fontWeight={'light'} fontSize="inherit" mt={20}>{title}</Heading>
            <Box w={'full'} h={.5} bg={'currentcolor'} mb={0}></Box>
        </Grid>
    )
}