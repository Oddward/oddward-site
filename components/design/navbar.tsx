import { Box, Grid, Link, List, Text } from "@chakra-ui/react"
import Logo from "./logo"


export const Navbar: React.FC = ({...props}) => {
    return (
        <Box as={'nav'} p={4} {...props}>
            <Grid templateColumns={'auto 1fr auto'} alignItems={'center'} h={'auto'} borderBottom={'solid .5px var(--bg.subtle)'}>
                <Box w={8} h={8}>
                    <Logo  />
                </Box>
                <List.Root flexDir={'row'} justifyContent={'center'} gap={4} listStyle={'none'}>
                    <List.Item>
                        <Link href={'/'}>home</Link>
                    </List.Item>
                    <List.Item>
                        <Link href={'/about'}>about</Link>
                    </List.Item>
                </List.Root>
                <Box>
                    <Text color="fg.muted" fontWeight="bold" fontSize="lg">oddward.space</Text>
                </Box>
            </Grid>
        </Box>
    )
}