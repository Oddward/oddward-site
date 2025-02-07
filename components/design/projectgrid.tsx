'use client'
import { SimpleGrid, type SimpleGridProps, Heading, Text, Box, Link } from '@chakra-ui/react'
import { RiArrowRightLine, RiExternalLinkLine } from 'react-icons/ri'

const projectGridStyle = {
    'borderRadius': '0.5rem',
    'border': '1px solid var(--chakra-colors-border)',
    'padding': '1rem',
    'marginBlock': '1.5rem 3rem',
    '&:hover': {
        'background': 'rgb(255 255 255 / 5%)',
    },
    '& img': {
        'width': '100%',
        'height': 'auto',
    }
}
const simpleGridStyle = {
    '& > *': {
        'width': '100%',
        'aspectRatio': '4/3',
        'background': 'rgba(from var(--chakra-colors-white), 5%)',
        'borderRadius': '0.25rem',
        'overflow': 'hidden',
    }
}

interface ProjectGridProps extends SimpleGridProps {
    title: string,
    description?: string,
    link?: string,
    children: React.ReactNode[],
    // [key: string]: any
}

export const ProjectGrid = ({ 
    title, 
    description, 
    link,
    children, 
    ...props }: ProjectGridProps) => {
    return (
        <Box css={projectGridStyle}>
            <Heading as="h3" size="lg" fontWeight={'bold'} mb={4}>{ title }</Heading>
            <Text opacity={.70} mb={4}>{ description }</Text>
            {link && 
                <Link href={link} color={'fg/70'} borderRadius={'sm'} p={2} mb={4}
                _hover={{bg:'white/10', color:'white'}}>
                    View more {link.includes('oddward.space') ? <RiArrowRightLine />:<RiExternalLinkLine />}
                </Link>
            }
            <SimpleGrid
                columns={{ base: 1, md: 2 }}
                gridAutoRows={{ base: 'auto', md: 'auto' }}
                gap={2}
                w="full"
                css={simpleGridStyle}
                {...props}
            >
                {children}
            </SimpleGrid>
        </Box>
    )
}

export default ProjectGrid