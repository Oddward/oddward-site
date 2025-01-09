'use client'

import { WarmText } from "@/components/design/stylecomponents";
import { FramedIcon } from "@/components/design/framedicon";
import PillText from "@/components/design/pilltext";
import ProfileImage from "@/components/design/profileimage";
import { Box, Card, Grid, Highlight, HStack, Image, Link, LinkBox, LinkOverlay, List, Stack, Text, VStack } from "@chakra-ui/react";
import NextImage from "next/image";
import { DiCss3, DiFirebase, DiHtml5, DiReact, } from "react-icons/di";
import { LuFigma } from "react-icons/lu";
import { RiArrowRightLine, RiGridLine, RiNextjsFill, RiTeamLine, RiVuejsFill } from "react-icons/ri";
import { SiAffinity, SiBlender } from "react-icons/si";
import { DividerHeading } from "@/components/design/dividerheading";
import ProjectCard from "@/components/design/projectcard";
import { css } from "@emotion/react";
import { BentoCard } from "@/components/design/bentocard";
import { Navbar } from "@/components/design/navbar";

const projectCardStyles = css`
  
  `

export default function Home() {
  return (
    <>
      <Box as={'header'}>
        {/* <Image src={'/logo.svg'} alt={'Oddward.space'} width={100} height={100} /> */}
        <Text as={'h1'} fontSize={115} fontWeight={'bold'} fontVariantLigatures="ss01">
          oddward<Text as="span" color="fg.muted">.space</Text>
        </Text>
      </Box>

      <Grid as={'section'} templateColumns="3.7fr 7fr" templateAreas="'img tagline' 'img icons'" gap={4}>
        {/* <Box w={'40%'} h={'auto'}> */}
        <Box w={'100%'} h={'auto'} aspectRatio={1/1} gridArea="img">
            <ProfileImage />
        </Box>
        {/* <VStack h={'full'} justify={'flex-start'} alignItems={'flex-start'}> */}
          <Text as={'h2'} fontSize={'3xl'} fontWeight="semibold" lineHeight={1.1}>
            <Highlight 
              query={['visual arts', 'software', 'tech']}
              styles={{bgGradient:'warm', bgClip:'text'}}>
              On a voyage to design, develop & deliver meaningful human experiences along the nexus of visual arts, software & tech.
            </Highlight>
          </Text>
          <Grid templateColumns={'repeat(5, 1fr)'} gap={6} w="90%">
            <FramedIcon><DiHtml5 /></FramedIcon>
            <FramedIcon><DiCss3 /></FramedIcon>
            <FramedIcon><DiReact /></FramedIcon>
            <FramedIcon><RiNextjsFill /></FramedIcon>
            <FramedIcon><RiVuejsFill /></FramedIcon>
            <FramedIcon><DiFirebase /></FramedIcon>
            <FramedIcon><LuFigma /></FramedIcon>
            <FramedIcon><SiAffinity /></FramedIcon>
            <FramedIcon><SiBlender /></FramedIcon>
          </Grid>
        {/* </VStack> */}
      </Grid>

      <Box as={'section'} display={'flex'} gap={'4'} flexWrap={'wrap'} py={'12'}>
        <PillText text={'Available for work'} bg="black" className="bg-black">
          <RiArrowRightLine />
        </PillText>
        <PillText text={'Web design'} />
        <PillText text={'Web development'} />
        <PillText text={'Graphic design'} />
        <PillText text={'Branding'} />
      </Box>

      <Navbar  />

      <Grid as={'section'} templateColumns={'1fr 1fr'} templateAreas={`'current post' 'links post'`} gap={'4'}>
        <Box p={4} borderRadius={8} gridArea={'current'} className="bg-slate-800">
          <Text as={'h3'} fontSize={'md'} fontWeight={'bold'} display={'flex'} alignItems={'center'} gap={2}>
            <RiTeamLine /> Current associations
          </Text>
          <List.Root fontSize="lg" fontWeight="bold" listStyle="none" mt={2}>
            <List.Item>
              KushTech Dynamics
            </List.Item>
            <List.Item>
              Niagara Launcher
            </List.Item>
          </List.Root>
        </Box>
        <Box p={4} borderRadius={8} gridArea={'links'} className="bg-slate-800">
          <Text as={'h3'} fontSize={'md'} fontWeight={'bold'} display={'flex'} alignItems={'center'} gap={2}>
            <RiGridLine /> Content
          </Text>
          <List.Root fontSize="lg" fontWeight="bold" listStyle="none" mt={2}>
            <List.Item>
              <Link href={'https://bento.me/oddward'}>Bento links</Link>
            </List.Item>
            <List.Item>
              <Link href={'#'}>Writing</Link>
            </List.Item>
            <List.Item>
              <Link href={'https://read.cv/mugtaba.g'}>CV</Link>
            </List.Item>
          </List.Root>
        </Box>
        <Box gridArea={'post'}>
          <Card.Root variant={'outline'} bgBlendMode={'multiply'} bg="bg.subtle" borderRadius={8}>
            <Card.Header>
              <Image src="/pex-3243090.jpg" alt="Oddward.space" width="100%" height="auto" aspectRatio="16/9" className="aspect-video w-full h-auto rounded-lg" />
            </Card.Header>
            <Card.Body>
              <Text as={'h3'} fontSize={'lg'} fontWeight={'bold'}>Sample link title here</Text>
            </Card.Body>
          </Card.Root>
        </Box>
      </Grid>

      <DividerHeading title="Stuff" />
      <Grid gridTemplateAreas={`
        "dribbble github insta"
        "dribbble insta2 other"
      `} gap={4}>
        <BentoCard 
          title="Dribbble" 
          subtitle="design portfolio @oddward" 
          href="https://dribbble.com/oddward"
          gridArea="dribbble"
          bgColor="dribbble" />

        <BentoCard 
          title="GitHub" 
          subtitle="Dev projects" 
          href="https://github.com/Oddward"
          gridArea="github"
          bgColor="black" />

        <BentoCard 
          title="Instagram" 
          subtitle="Introspective content creation" 
          bgImage="/association_thumb.jpg" 
          href="https://instagram.com/mugtaba.g"
          gridArea="insta"
          bgGradient="instagram" />

        <BentoCard 
          title="Instagram alt" 
          subtitle="Dev notes" 
          href="https://instagram.com/oddward.io"
          gridArea="insta2" 
          bgGradient="instagram" />

        <BentoCard 
          title="Other links..." 
          subtitle="design portfolio @oddward" 
          href="#" 
          gridArea="other" />
      </Grid>

      <DividerHeading title="Projects" />

      <Stack as="section" direction="row" gap={4}>
        <ProjectCard href="https://github.com/Oddward/project-music-e" title="React music app (paused)" src="/Dribbble shot - reactmusic_hd2.png" />
        <ProjectCard href="https://github.com/Oddward/nl-setups" title="Launcher setups platform (paused)" src="/NLSetups - User Profile ss.png" />
      </Stack>
    </>
  );
}
