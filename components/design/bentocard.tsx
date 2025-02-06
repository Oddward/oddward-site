import { Card, CardRootProps, LinkOverlay, Image, Grid, Icon } from "@chakra-ui/react"
import { RiArrowRightUpLine } from "react-icons/ri"

interface BentoCardProps extends CardRootProps  {
    title: string
    subtitle?: string
    href: string
    imgSrc?: string
    brandColor?: string
    coverIcon?: React.ReactNode
    justIcon?: React.ReactNode
}

export const BentoCard: React.FC<BentoCardProps> = ({
    title="",
    subtitle="",
    href="#",
    imgSrc,
    brandColor,
    coverIcon,
    justIcon,
    children,
    ...props
}) => {
    return (
        <Card.Root 
        flexDir={'column'}
        borderRadius={'sm'} 
        mb={4}
        overflow={'hidden'}
        className="group"
        {...props}
        >
            <Card.Header position={'relative'} fontSize={'4xl'}>
                {imgSrc ? <>
                    <Image src={imgSrc} alt="" w={'full'} h={'auto'} borderRadius={'sm'} />
                    <Grid position={'absolute'}  placeContent={'center'}
                        top={'var(--card-padding)'} 
                        left={'var(--card-padding)'} 
                        right={'var(--card-padding)'} 
                        bottom={0}
                        fill={'fg'}
                        borderRadius={'sm'}
                        bg={`${brandColor}/20`} backdropFilter={'blur(8px)'} 
                        p={6}
                        opacity={0} scale={.8}
                        transition={'all .25s'}
                        transitionTimingFunction={'slick'}
                        _groupHover={{opacity:1, scale:1}}
                    >
                        {coverIcon}
                    </Grid>
                </>
                :
                coverIcon}
                {justIcon && justIcon}
            </Card.Header>
            <Card.Body 
            position={'relative'}
            // position={'absolute'} bottom={0} left={0} right={0} bg={'white/50'} backdropFilter={'blur(8px)'}
            >
                {children}
                <Card.Title 
                fontWeight="bold" 
                >
                    {title} <Icon 
                        position={'absolute'}
                        opacity={0} 
                        marginInlineStart={2} 
                        translate={'-.5em .5em'}
                        transition={'all .25s'}
                        transitionTimingFunction={'slick'}
                        _groupHover={{opacity:1, translate:'0px'}}
                        >
                            <RiArrowRightUpLine />
                        </Icon>
                </Card.Title>
                <Card.Description>{subtitle}</Card.Description>
            </Card.Body>
            <LinkOverlay href={href} target="_blank" />
        </Card.Root>
    )
}