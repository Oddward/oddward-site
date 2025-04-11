'use client'
import { Fieldset, Flex, Heading, HStack, Icon, Input, Link, List, Span, Text, Textarea, VStack } from "@chakra-ui/react"
import Logo from "./logo"
import { useEffect, useRef, useState } from "react"
import { Button } from "../ui/button"
import { RiBlueskyLine, RiHome3Line, RiInstagramLine, RiLinkedinLine, RiMessage3Line, RiTwitterLine } from "react-icons/ri"
import { IoMdPerson, IoMdPhotos } from "react-icons/io"
import { Field } from "../ui/field"

const pages = [
    { name: 'home', href: '/', icon: <RiHome3Line /> },
    { name: 'about', href: '/about', icon: <IoMdPerson /> },
    { name: 'gallery', href: '/gallery', icon: <IoMdPhotos /> },
]

const socials = [
    { name: 'instagram', href: 'https://instagram.com/mugtaba.g', icon: <RiInstagramLine /> },
    { name: 'bluesky', href: 'https://bsky.app/profile/oddwardio.bsky.social', icon: <RiBlueskyLine /> },
    { name: 'twitter', href: 'https://x.com/oddward_io', icon: <RiTwitterLine /> },
    { name: 'linkedin', href: 'https://linkedin.com/in/mugtabagaroot', icon: <RiLinkedinLine /> },
]

export const Navbar: React.FC = ({...props}) => {
    const contactRef = useRef<HTMLDivElement>(null)
    const [isContactOpen, setIsContactOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [height, setHeight] = useState<string>('0')
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

    useEffect(() => {
        updateHeight()
    }, [])

    const toggleContact = () => {
            setIsContactOpen(!isContactOpen)
            updateHeight()
    }

    const updateHeight = () => {
        if (contactRef.current) {
            const scrollHeight = contactRef.current.scrollHeight;
            setHeight(`${scrollHeight}px`);
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus('idle');

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
            setStatus('success');
            form.reset();
            setIsLoading(false);
        } catch (error) {
            setStatus('error');
            // alert('Failed to send message. Please try again.');
            setIsLoading(false);
            console.error('Submission error:', error)
        }
    };

    return (
        <Flex as={'nav'} 
            flexDir={{base:'column-reverse', md:'column'}}
            position={{base:'fixed', md:'sticky'}} p={4} 
            top={{md:0}} bottom={{mdDown:0}} left={0} right={0}
            zIndex={100}
            bg={'brand.bg'} 
            borderTop={{mdDown:'solid 2px var(--chakra-colors-bg-subtle)'}}
            borderBottom={{md:'solid 2px var(--chakra-colors-bg-subtle)'}}
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
                            >
                                <Icon display={{md:'none'}} size={'lg'}>{ page.icon }</Icon>
                                <Span display={{mdDown:'none'}}>{page.name}</Span>
                            </Link>
                        </List.Item>
                    ))}
                    <List.Item>
                        <Button variant={'ghost'} 
                        color={'fg.muted'} fill={isContactOpen ? 'colorPalette.solid':'fg.muted'}
                        onClick={ toggleContact }>
                            <Span>Contact</Span>
                            <Icon fontSize={'lg'} size={'lg'} color={'yellow.600'}><RiMessage3Line /></Icon>
                        </Button>
                    </List.Item>
                </List.Root>
            </HStack>
            
            <VStack 
            gap={4} 
            h={isContactOpen ? height:'0'} 
            transition={'height .25s'}
            transitionTimingFunction={'slick'}
            overflow={'hidden'}
            ref={contactRef}
            aria-label="Contact Form"
            >
                <form onSubmit={handleSubmit} className="w-full">
                    <Fieldset.Root position={'relative'} fontSize="xl" maxW="lg" p={4} mx={'auto'}>
                        <Heading as={'h3'} fontSize={'xl'} color={'fg.muted'}>Get in Touch</Heading>
                        <HStack>
                            {socials.map((social, index) => (
                                <Link key={index}
                                href={social.href} 
                                variant={'plain'}
                                fontSize={'xl'}
                                border="solid 1px"
                                borderColor={'fg.muted'}
                                borderRadius={'full'} 
                                color={'fg.muted'}
                                bg={'fg/5'}
                                p={4} 
                                rounded="full"
                                _hover={{color:'colorPalette.solid'}}
                                >
                                    {social.icon}
                                </Link>
                            ))}
                        </HStack>
                        <Fieldset.Content color={'fg.muted'}>
                            {/* <Text color={'fg.muted'}> */}
                            <Field>
                                I am 
                                <Input type="text" name="name" variant={'flushed'} placeholder="Jane Doe" w={'full'} required />
                            </Field>
                            <Field>
                                you can email me at 
                                <Input type="email" name="email" variant={'flushed'} placeholder="jane@mail.com" w={'full'} required />
                            </Field>
                            <Field>
                                and this is my message: 
                                <Textarea name="message" variant={'outline'} resize={'vertical'} w={'full'} required
                                onChange={() => updateHeight()} 
                                />
                            </Field>
                            {/* </Text> */}
                        </Fieldset.Content>
                        <Fieldset.HelperText fontSize={'sm'} h={4}>
                            {status === 'success' && (
                                <Text color="green.500">Message sent successfully!</Text>
                            )}
                            {status === 'error' && (
                                <Text color="red.500">Failed to send message. Please try again.</Text>
                            )}
                        </Fieldset.HelperText>
                        <Button 
                            variant={'solid'}
                            type="submit" w="full"
                            onClick={ () => handleSubmit }
                            disabled={isLoading}
                            loading={isLoading}
                            mt={4}
                            >
                            Send Message
                        </Button>
                    </Fieldset.Root>
                </form>
            </VStack>
        </Flex>
    )
}