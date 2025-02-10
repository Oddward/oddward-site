'use client'
import { Box, Card, Span } from "@chakra-ui/react"

interface FramedIconProps {
    children: React.ReactNode
    label?: string
}

export const FramedIcon: React.FC<FramedIconProps> = ({ children, label }) => {
    return (
        <Card.Root variant={'outline'} 
        position={'relative'}
        fontSize={'4xl'} 
        borderRadius="2xl"
        bg={"bg.subtle"} color={"fg.muted"} 
        flexGrow={0} justifyContent="center" alignItems="center" 
        w="full" h="auto" aspectRatio={'1/1'} 
        p={6} boxSizing="border-box"
        transition={'all .25s'}
        transitionTimingFunction={'slick'}
        className="group">
            <Box
            transition={'all .2s'}
            transitionTimingFunction={'slick'}
            transform={'translateY(0)'}
            _groupHover={label ? {transform:'translateY(-.5rem)'} : {transform:'translateY(0)'}}
            >
                {children}
            </Box>
            {label && 
                <Span 
                position={'absolute'}
                bottom={2} left={1} right={1}
                textAlign={'center'}
                fontSize={'x-small'} 
                lineHeight={'shorter'}
                transition={'all .2s'}
                transitionTimingFunction={'slick'}
                opacity={0} 
                translateY={'0'}
                _groupHover={{opacity:1}}>
                    {label}
                </Span>
            }
        </Card.Root>
    )
}