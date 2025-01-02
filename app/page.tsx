'use client'

import { WarmText } from "@/components/design/stylecomponents";
import { FramedIcon } from "@/components/design/framedicon";
import PillText from "@/components/design/pilltext";
import ProfileImage from "@/components/design/profileimage";
import { Box, Card, Grid, HStack, List, Stack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { DiCss3, DiFirebase, DiHtml5, DiReact, } from "react-icons/di";
import { LuFigma } from "react-icons/lu";
import { RiArrowRightFill, RiArrowRightLine, RiNextjsFill, RiVuejsFill } from "react-icons/ri";
import { SiAffinity, SiBlender } from "react-icons/si";
import { DividerHeading } from "@/components/design/dividerheading";

export default function Home() {
  return (
    <>
      <Box as={'header'}>
        {/* <Image src={'/logo.svg'} alt={'Oddward.space'} width={100} height={100} /> */}
        <Text as={'h1'} fontSize={120} fontWeight={'bold'}>oddward.space</Text>
      </Box>

      <HStack as={'section'} gap={'8'} alignItems={'flex-start'}>
        <Box w={'40%'} h={'auto'}>
            <ProfileImage />
        </Box>
        <VStack h={'full'} justify={'flex-start'} alignItems={'flex-start'}>
          <Text as={'h2'} fontSize={'2xl'} fontWeight={'bold'}>On a voyage to design, develop & deliver meaningful human experiences along the nexus of <WarmText>visual arts</WarmText>, <WarmText>software</WarmText> & <WarmText>tech</WarmText>.</Text>
          <Grid templateColumns={'1fr 1fr 1fr 1fr 1fr'} gap={'4'}>
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
        </VStack>
      </HStack>

      <Box as={'section'} display={'flex'} gap={'4'} flexWrap={'wrap'} py={'12'}>
        <PillText text={'Available for work'} bg="black" className="bg-black">
          <RiArrowRightLine />
        </PillText>
        <PillText text={'Web design'} />
        <PillText text={'Web development'} />
        <PillText text={'Graphic design'} />
        <PillText text={'Branding'} />
      </Box>

      <Grid as={'section'} templateColumns={'1fr 1fr'} templateAreas={`'current post' 'links post'`} gap={'4'}>
        <Box p={4} borderRadius={8} gridArea={'current'} className="bg-slate-800">
          <Text as={'h3'} fontSize={'xl'} fontWeight={'bold'}>Current associations</Text>
          <List.Root>
            <List.Item>
              KushTech Dynamics
            </List.Item>
            <List.Item>
              Niagara Launcher
            </List.Item>
          </List.Root>
        </Box>
        <Box p={4} borderRadius={8} gridArea={'links'} className="bg-slate-800">
          <Text as={'h3'} fontSize={'xl'} fontWeight={'bold'}>Content</Text>
          <List.Root>
            <List.Item>
              KushTech Dynamics
            </List.Item>
          </List.Root>
        </Box>
        <Box gridArea={'post'}>
          <Card.Root variant={'outline'} bgBlendMode={'multiply'} bg={'none'} borderRadius={8}>
            <Card.Header>
              <Image src={'/pfp1.jpg'} alt="Oddward.space" width={100} height={100} className="aspect-video w-full h-auto rounded-lg" />
            </Card.Header>
            <Card.Body>
              <Text as={'h3'} fontSize={'lg'} fontWeight={'bold'}>Sample link title here</Text>
            </Card.Body>
          </Card.Root>
        </Box>
      </Grid>

      <DividerHeading title="Stuff" />


    </>
  );
}
