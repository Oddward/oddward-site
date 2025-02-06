'use client'
import { Fieldset, Flex, Heading, HStack, Icon, Input, Link, List, Span, Text, Textarea, VStack } from "@chakra-ui/react"
import Logo from "./logo"
import { startTransition, useEffect, useRef, useState } from "react"
import { Button } from "../ui/button"
import { RiHome3Line, RiMessage3Line } from "react-icons/ri"
import { IoMdPerson } from "react-icons/io"

const pages = [
    { name: 'home', href: '/', icon: <RiHome3Line /> },
    { name: 'about', href: '/about', icon: <IoMdPerson /> },
]

const contactStyle = {
    'height': '0',
    'overflow': 'hidden',
    'transition': 'height .3s',
    'transitionTimingFunction': 'cubic-bezier(0.7, 0, 0.3, 1)',
    '&.open': {
        'height': '100%',
    }
}

const contactBtnStyle = {
    'transition': 'height .3s',
    'transitionTimingFunction': 'cubic-bezier(0.7, 0, 0.3, 1)',
    '&.open': {
        'fill': 'var(--chakra-colors-solid)',
    }
}

export const Navbar: React.FC = ({...props}) => {
    const contactRef = useRef<HTMLDivElement>(null)
    // const contactBtnRef = useRef<HTMLButtonElement>(null)
    const [isContactOpen, setIsContactOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    // const [isPending, startTransition] = useTransition()
    const [height, setHeight] = useState<string>('0')
    // const [status, setStatus] = useState('idle')

    useEffect(() => {
        if (contactRef.current) {
            const scrollHeight = contactRef.current.scrollHeight
            setHeight(`${scrollHeight}px`)
        }
    }, [])

    const toggleContact = () => {
            startTransition(() => {
                setIsContactOpen(!isContactOpen)
            })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        // setStatus('idle');

        const form = e.currentTarget;
        const formData = new FormData( form );
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message'),
        };

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) throw new Error('Failed to send message');
            // setStatus('success');
            form.reset();
        } catch (error) {
            // setStatus('error');
            // alert('Failed to send message. Please try again.');
            console.error('Submission error:', error)
        }
    };

    return (
        <Flex as={'nav'} 
            flexDir={{base:'column-reverse', md:'column'}}
            position={{base:'fixed', md:'sticky'}} p={4} 
            top={{md:0}} bottom={{mdDown:0}}
            zIndex={100}
            bg={'brand.bg'} 
            borderTop={{mdDown:'solid 1px var(--chakra-colors-bg-subtle)'}}
            borderBottom={{md:'solid 1px var(--chakra-colors-bg-subtle)'}}
            {...props}
            >
            <HStack justifyContent={'space-between'}>
                <Link href="/" w={8} h={8}>
                    <Logo />
                </Link>

                <List.Root 
                // display={{mdDown:'none'}}
                flexDir={'row'} 
                justifyContent={'center'} 
                gap={4} 
                listStyle={'none'}
                aria-label="Nav Menu"
                >
                    {pages.map((page) => (
                        <List.Item key={page.name}>
                            <Link href={page.href} variant={'plain'}
                            color={'fg.muted'} 
                            borderRadius={'sm'}
                            p={2}
                            _hover={{color:'fg'}}
                            css={contactBtnStyle}
                            >
                                <Icon display={{md:'none'}} size={'lg'}>{ page.icon }</Icon>
                                <Span display={{mdDown:'none'}}>{page.name}</Span>
                            </Link>
                        </List.Item>
                    ))}
                    <List.Item>
                        <Button variant={'ghost'} 
                        color={'fg.muted'} fill={isContactOpen ? 'solid':'fg.muted'}
                        onClick={toggleContact}>
                            <Span>Contact</Span>
                            <Icon size={'lg'}><RiMessage3Line /></Icon>
                        </Button>
                    </List.Item>
                </List.Root>
            </HStack>
            
            <VStack gap={4} 
            h={isContactOpen ? height:'0'} 
            css={contactStyle}
            ref={contactRef}
            >
                <Fieldset.Root fontSize="xl" maxW="lg" p={4}>
                    <Heading as={'h3'} fontSize={'xl'} color={'fg.muted'}>Get in Touch</Heading>
                    <Fieldset.Content>
                        <Text color={'fg.muted'}>
                            I am <Input type="text" variant={'flushed'} w={'full'} required />,
                            you can email me at <Input type="text" variant={'flushed'} w={'full'} required />
                            and this is my message: <Textarea variant={'outline'} w={'full'} required />
                        </Text>
                    </Fieldset.Content>
                    <Button 
                        variant={'solid'}
                        type="submit" w="full"
                        // _loading={isLoading}
                        onClick={ () => handleSubmit }
                        disabled={isLoading}>
                        Send Message
                    </Button>
                </Fieldset.Root>
            </VStack>
        </Flex>
    )
}