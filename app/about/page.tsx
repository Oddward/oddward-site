'use client'

import { DividerHeading } from "@/components/design/dividerheading";
import { FramedIcon } from "@/components/design/framedicon";
import { Navbar } from "@/components/design/navbar";
import { Box, Card, Flex, Grid, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { DiCss3, DiFirebase, DiHtml5, DiReact, } from "react-icons/di";
import { SiAffinity, SiBlender, SiFigma } from "react-icons/si";
import { RiNextjsFill, RiVuejsFill } from "react-icons/ri";


export default function About() {
    return (
      <>
        <Navbar />

        <Box as={'section'} py={16} px={4}>
            <Card.Root variant={'subtle'} bgColor={'bg.subtle'}>
                <Card.Body>
                    <Grid templateColumns={'1fr 2fr'} gap={4}>
                        <Flex justifyContent={'center'}>
                            <Image src="/me_halftonegrad.jpg" alt="A placeholder image" width={'auto'} height={'full'} maxW={200} aspectRatio={1/1.5} border="solid 1px --chakra-colors-color-palette-subtle" borderRadius="full" />
                        </Flex>
                        <Box>
                            <Text as="h2" fontSize="4xl" fontWeight={'black'} bgGradient="warm" bgClip={'text'} textTransform={'uppercase'} w={'auto'}>Mugtaba Garoot</Text>
                            <Text as="span" fontSize="md" color="fg.muted">Developer // Designer // Digital content creator</Text>
                            <Text mt={4}>Computer science graduate who’s passionate about all things art. I have some junior experience in web development, freelance experience in graphic design and social media, and a lot of self-learning.</Text>
                            <Text mt={4}>Usually found consuming tonnes of media (especially animation), practicing web development and graphic design, gaming, and/or hanging out on a discord chat.</Text>
                        </Box>
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
        <Card.Root variant={'outline'} bgColor={'unset'}>
            <Card.Body>
                <Flex flexDir={'column'} gap={2}>
                    <Text>Solid fundamentals in HTML5, CSS3, and some JS and TypeScript, with a focus on frontend design.</Text>
                    <Text>Main stack currently: Nextjs + TailwindCSS/Chakra UI + Nodejs + Firebase</Text>
                    <Text>Currently working on a couple of personal and team-based projects to improve my skills and build a product. Exploring cross-platform development with React Native and Expo, and some backend SaaS. I also try to utilize Figma and similar tools for drafts and prototyping.</Text>
                </Flex>
            </Card.Body>
        </Card.Root>

        <Grid templateColumns={'repeat(7, 1fr)'} gap={6} w="90%">
            <FramedIcon><DiHtml5 /></FramedIcon>
            <FramedIcon><DiCss3 /></FramedIcon>
            <FramedIcon><DiReact /></FramedIcon>
            <FramedIcon><RiNextjsFill /></FramedIcon>
            <FramedIcon><RiVuejsFill /></FramedIcon>
            <FramedIcon><DiFirebase /></FramedIcon>
        </Grid>
        
        <DividerHeading title="Design" />
        <Card.Root variant={'outline'} bgColor={'unset'}>
            <Card.Body>
                <Flex flexDir={'column'} gap={2}>
                    <Text>Self-taught illustrator and designer doing freelancing and occasionally using content creation to improve my craft.</Text>
                    <Text>Favourite tools: Figma for vector graphics & prototyping, Blender for 3D, Affinity suite for print.</Text>
                    <Text>I aim to improve on a more modern set of visual arts skills and get into motion graphics and ideally animation.</Text>
                </Flex>
            </Card.Body>
        </Card.Root>

        <Grid templateColumns={'repeat(7, 1fr)'} gap={6} w="90%">
            <FramedIcon><DiHtml5 /></FramedIcon>
            <FramedIcon><DiCss3 /></FramedIcon>
            <FramedIcon><SiFigma /></FramedIcon>
            <FramedIcon><SiAffinity /></FramedIcon>
            <FramedIcon><SiBlender /></FramedIcon>
        </Grid>
      </>
    )
}