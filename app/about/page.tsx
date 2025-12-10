'use client'

import { DividerHeading } from "@/components/design/dividerheading";
import { FramedIcon } from "@/components/design/framedicon";
import { Navbar } from "@/components/design/navbar";
import { Box, Card, Flex, Grid, HStack, Image, Link, Text } from "@chakra-ui/react";
import { DiCss3, DiFirebase, DiHtml5, DiReact, } from "react-icons/di";
import { SiAdobe, SiAffinity, SiBlender, SiDavinciresolve, SiFigma, SiRive } from "react-icons/si";
import { RiNextjsFill, RiVuejsFill } from "react-icons/ri";
import { socials } from "@/lib/profile";


export default function About() {
    return (
      <>
        <Navbar />

        <Box as={'section'} pb={16} pt={10} px={4}>
            <Card.Root variant={'outline'} bgColor={'transparent'}>
                <Card.Body>
                    <Grid templateColumns={{md:'1fr 2fr'}} templateAreas={{
                        base: "'pfp' 'title' 'desc'",
                        md: "'pfp title' 'desc desc'",
                        lg: "'pfp title' 'pfp desc'",
                    }} gap={4} alignItems={'end'}>
                        <Flex justifyContent={'center'} gridArea={'pfp'}>
                            <Image src="/me_halftonegrad.jpg" alt="A placeholder image" width={'auto'} height={'full'} maxW={200} aspectRatio={1/1.5} border="solid 1px --chakra-colors-color-palette-subtle" borderRadius="full" />
                        </Flex>
                        <Box gridArea={'title'}>
                            <Text as="h2" fontSize="4xl" fontWeight={'black'} bgGradient="warm" bgClip={'text'} textTransform={'uppercase'} w={'auto'}>Mugtaba Garoot</Text>
                            <Text as="span" fontSize="md" color="fg.muted">Developer // Designer // Digital content creator</Text>
                        </Box>
                        <Flex flexDir={'column'} gap={4} gridArea={'desc'}>
                            <Text mt={4}>Computer science graduate who’s passionate about all things art. Mostly self-taught with experience in web development, website management, graphic design and social media management, and a lot of self-learning and trying things out.</Text>
                            <Text mt={4}>Usually found consuming tonnes of media (especially animation), practicing the craft, gaming, and/or hanging out on a discord chat.</Text>
                            <HStack gap={4}>
                                {socials.map((social, i) => (
                                    <Link key={i} href={social.href} fontSize="lg" color="fg.muted" _hover={{color:"colorPalette.solid"}}>{social.icon}</Link>
                                ))}
                            </HStack>
                        </Flex>
                    </Grid>
                </Card.Body>
            </Card.Root>
        </Box>

        <Flex flexDir="column" gap={4}>
            <Box w={'60%'} h={1} bgColor={'bg.subtle'} mr={'auto'} />
            <Box w={'60%'} h={1} bgColor={'bg.subtle'} mx={'auto'} />
            <Box w={'60%'} h={1} bgColor={'bg.subtle'} ml={'auto'} />
        </Flex>

        <DividerHeading title="Development" />
        <Card.Root variant={'subtle'} bgColor={'blackAlpha.500'}>
            <Card.Body>
                <Flex flexDir={'column'} gap={2}>
                    <Text>Solid experience with HTML5, CSS3, some JS and TypeScript. Focused on frontend design & development with competence in the full stack.</Text>
                    <Text>Main stack currently: Nextjs + TailwindCSS/Chakra UI + Nodejs + Firebase</Text>
                    <Text>Currently working on a couple of personal and team-based projects to improve my skills and build a product. Exploring cross-platform development with React Native/Expo, and some backend SaaS. I also try to utilize Figma and similar tools for drafts, design and prototyping.</Text>
                </Flex>
            </Card.Body>
        </Card.Root>

        <Grid templateColumns={'repeat(auto-fit, minmax(6rem,6rem))'} justifyItems={'center'} gap={6} w="100%">
            <FramedIcon label="HTML5"><DiHtml5 /></FramedIcon>
            <FramedIcon label="CSS3"><DiCss3 /></FramedIcon>
            <FramedIcon label="React"><DiReact /></FramedIcon>
            <FramedIcon label="Nextjs"><RiNextjsFill /></FramedIcon>
            <FramedIcon label="Vue"><RiVuejsFill /></FramedIcon>
            <FramedIcon label="Firebase"><DiFirebase /></FramedIcon>
        </Grid>
        
        <DividerHeading title="Design" />
        <Card.Root variant={'subtle'} bgColor={'blackAlpha.500'}>
            <Card.Body>
                <Flex flexDir={'column'} gap={2}>
                    <Text>Self-taught illustrator and designer doing freelancing and occasionally using content creation to improve my craft.</Text>
                    <Text>Favourite tools: Figma for vector graphics & prototyping, Blender for 3D, Affinity suite for print.</Text>
                    <Text>I aim to improve on a more modern set of visual arts skills and get into motion graphics and ideally animation.</Text>
                </Flex>
            </Card.Body>
        </Card.Root>

        <Grid templateColumns={'repeat(auto-fit, minmax(6rem,6rem))'} justifyItems={'center'} gap={6} w="100%">
            <FramedIcon label="HTML5"><DiHtml5 /></FramedIcon>
            <FramedIcon label="CSS3"><DiCss3 /></FramedIcon>
            <FramedIcon label="Figma"><SiFigma /></FramedIcon>
            <FramedIcon label="Affinity suite"><SiAffinity /></FramedIcon>
            <FramedIcon label="Adobe suite"><SiAdobe /></FramedIcon>
            <FramedIcon label="Rive"><SiRive /></FramedIcon>
            <FramedIcon label="Blender"><SiBlender /></FramedIcon>
            <FramedIcon label="Davinci Resolve"><SiDavinciresolve /></FramedIcon>
        </Grid>
      </>
    )
}