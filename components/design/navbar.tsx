'use client'
import { Box, HStack, IconButton, Link, List, VStack } from "@chakra-ui/react"
import Logo from "./logo"
import { HiMenuAlt4 } from "react-icons/hi"
import { useRef } from "react"

const pages = [
    {name: 'home', href: '/'},
    {name: 'about', href: '/about'},
]

const menuStyle = {
    'height': '0',
    'overflow': 'hidden',
    'transition': 'height .3s',
    'transitionTimingFunction': 'cubic-bezier(0.4, 0, 0.2, 1)',
    'padding-block': '1rem',
    '&.open': {
        'height': '100%',
    }
}

export const Navbar: React.FC = ({...props}) => {
    const menuRef = useRef<HTMLDivElement>(null)
    const menuIconRef = useRef<HTMLButtonElement>(null)

    const toggleMenu = () => {
        const menu = menuRef.current
        if (menu) {
            menu.classList.toggle('open')
            menuIconRef.current?.classList.toggle('open')
            // menu.style.height = menu.style.height === '0px' ? '100%' : '0px'
        }
    }

    return (
        <Box as={'nav'} 
            position={'sticky'} p={4} 
            top={0} zIndex={100}
            bg={'brand.bg'} 
            borderBottom={'solid .5px var(--chakra-colors-bg-subtle)'} {...props}
            >
            <HStack justifyContent={'space-between'}>
                <Link href="/" w={8} h={8}>
                    <Logo />
                </Link>

                <List.Root 
                display={{mdDown:'none'}}
                flexDir={'row'} 
                justifyContent={'center'} 
                gap={4} 
                listStyle={'none'}
                >
                    {pages.map((page) => (
                        <List.Item key={page.name}>
                            <Link href={page.href} color={'fg.muted'} 
                            _hover={{color:'fg'}}
                            >
                                {page.name}
                            </Link>
                        </List.Item>
                    ))}
                </List.Root>

                <IconButton 
                variant={'ghost'} 
                display={{md:'none'}} 
                color={'fg.muted'}
                onClick={ toggleMenu }
                aria-label="Menu"
                ref={ menuIconRef }
                >
                    <HiMenuAlt4 />
                </IconButton>

                {/* <Link href={'/'} variant={'plain'}>
                    <Text color="fg.muted" fontWeight="bold" fontSize="lg">oddward.space</Text>
                </Link> */}
            </HStack>
            <VStack display={{md:'none'}} 
            gap={4}
            css={ menuStyle }
            ref={ menuRef }
            >
                <List.Root flexDir={'column'}
                listStyle={'none'}
                divideStyle={'solid'}
                divideColor={'fg.subtle'}
                >
                    {pages.map((page) => (
                        <List.Item key={page.name} 
                        display={'block'} 
                        py={4}
                        _hover={{color:'fg'}}
                        >
                            <Link href={page.href} color={'fg.muted'} 
                            fontSize={'2xl'}
                            >
                                {page.name}
                            </Link>
                        </List.Item>
                    ))}
                </List.Root>
            </VStack>
        </Box>
    )
}