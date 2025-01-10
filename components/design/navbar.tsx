import { Box, Grid, Link, List, Text } from "@chakra-ui/react"
import Logo from "./logo"
import colors from "tailwindcss/colors"

const pages = [
    {name: 'home', href: '/'},
    {name: 'about', href: '/about'},
]

export const Navbar: React.FC = ({...props}) => {
    return (
        <Box as={'nav'} 
            position={'sticky'} p={4} 
            top={0} zIndex={100}
            bg={colors.slate[900]} 
            borderBottom={'solid .5px var(--chakra-colors-bg-subtle)'} {...props}>
            <Grid templateColumns={'auto 1fr auto'} alignItems={'center'}>
                <Box w={8} h={8}>
                    <Logo  />
                </Box>
                <List.Root flexDir={'row'} justifyContent={'center'} gap={4} listStyle={'none'}>
                    {pages.map((page) => (
                        <List.Item key={page.name}>
                            <Link href={page.href} color={'fg.muted'} 
                                _hover={{color:'colorPalette.fg'}}>{page.name}</Link>
                        </List.Item>
                    ))}
                </List.Root>
                <Link href={'/'} variant={'plain'}>
                    <Text color="fg.muted" fontWeight="bold" fontSize="lg">oddward.space</Text>
                </Link>
            </Grid>
        </Box>
    )
}