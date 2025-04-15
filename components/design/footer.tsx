import { Flex, HStack, Icon, Link } from "@chakra-ui/react";
import { RiBlueskyLine, RiGithubLine, RiInstagramLine, RiLinkedinLine, RiThreadsLine, RiTwitterLine } from "react-icons/ri";

const socials = [
    { 
        name: 'Bluesky', 
        href: 'https://bsky.app/profile/oddward.space', 
        rel: 'me noopener', 
        icon: <RiBlueskyLine /> 
    },
    { 
        name: 'Threads', 
        href: 'https://www.threads.net/@mugtaba.g', 
        rel: 'me noopener', 
        icon: <RiThreadsLine /> 
    },
    { 
        name: 'X (formerly Twitter)', 
        href: 'https://x.com/oddward_io', 
        rel: 'me noopener', 
        icon: <RiTwitterLine /> 
    },
    { 
        name: 'Instagram', 
        href: 'https://instagram.com/mugtaba.g', 
        rel: 'me noopener', 
        icon: <RiInstagramLine /> 
    },
    { 
        name: 'Github', 
        href: 'https://github.com/Oddward', 
        rel: 'me noopener', 
        icon: <RiGithubLine /> 
    },
    { 
        name: 'Linkedin', 
        href: 'https://linkedin.com/in/mugtabagaroot', 
        rel: 'me noopener', 
        icon: <RiLinkedinLine /> 
    },
]

interface FooterProps {
    
}
 
const Footer: React.FC<FooterProps> = () => {
    return (
        <Flex as={'footer'} 
        color={'fg.muted'} 
        justifyContent={'space-between'} 
        wrap={'wrap'}
        py={{base:'3rem 5rem', md:'3rem 1.5rem'}}
        mt={16}>
            {`@${new Date().getFullYear()} Mugtaba G // Oddward`}

            <HStack gap={2} fontSize={'md'}>
                {socials.map((social, index) => (
                    <Link key={index} 
                    href={social.href} 
                    target="_blank" 
                    rel={social.rel} 
                    aria-label={social.name} 
                    color={'fg.muted'} 
                    fontSize={'2xl'}
                    _hover={{color:'white'}}
                    _focus={{boxShadow:'outline'}}
                    >
                        <Icon boxSize={6}>
                            {social.icon}
                        </Icon>
                    </Link>
                ))}
            </HStack>
        </Flex>
    );
}
 
export default Footer;