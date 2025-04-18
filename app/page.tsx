// import { WarmText } from "@/components/design/stylecomponents";
import { FramedIcon } from "@/components/design/framedicon";
import PillText from "@/components/design/pilltext";
import ProfileImage from "@/components/design/profileimage";
import { Box, Card, Grid, GridItem, Heading, Highlight, Icon, Image, Link, LinkOverlay, List, SimpleGrid, Text } from "@chakra-ui/react";
import { DiCss3, DiFirebase, DiHtml5, DiReact, } from "react-icons/di";
import { LuFigma } from "react-icons/lu";
import { RiArrowRightLine, RiDribbbleLine, RiExternalLinkLine, RiGithubLine, RiInstagramLine, RiNextjsFill, RiQuillPenFill, RiTeamLine, RiVuejsFill } from "react-icons/ri";
import { SiAdobe, SiAffinity, SiBlender, SiRive } from "react-icons/si";
import { DividerHeading } from "@/components/design/dividerheading";
import ProjectCard from "@/components/design/projectcard";
import { BentoCard } from "@/components/design/bentocard";
import { Navbar } from "@/components/design/navbar";
import ProjectGrid from "@/components/design/projectgrid";
import LogoWall from "@/components/design/logowall";

export default function Home() {
  return (
    <>
      <Box as={'header'}>
        {/* <Image src={'/logo.svg'} alt={'Oddward.space'} width={100} height={100} /> */}
        <Text as={'h1'} fontSize={'clamp(2rem, 11vw, 7.7rem)'} fontWeight={'bold'} fontVariantLigatures="ss01">
          oddward<Text as="span" color="fg.muted">.space</Text>
        </Text>
      </Box>

      <Grid as={'section'} templateColumns="3.7fr 7fr" templateAreas={{
        base: "'img img' 'tagline tagline' 'icons icons'",
        md: "'img tagline' 'icons icons'",
        lg: "'img tagline' 'img icons'"
      }} gap={4}>
        {/* <Box w={'40%'} h={'auto'}> */}
        <Box w={'100%'} h={'auto'} aspectRatio={1/1} gridArea="img">
            <ProfileImage />
        </Box>
        {/* <VStack h={'full'} justify={'flex-start'} alignItems={'flex-start'}> */}
          <Text as={'h2'} fontSize={'3xl'} fontWeight="semibold" lineHeight={1.1} gridArea={'tagline'} mdToLg={{fontSize:'4xl'}}>
            <Highlight 
              query={['visual arts', 'software', 'tech']}
              styles={{bgGradient:'warm', bgClip:'text'}}>
              On a voyage to design, develop & deliver meaningful human experiences along the nexus of visual arts, software & tech.
            </Highlight>
          </Text>
          <Grid templateColumns={'repeat(auto-fit, minmax(4rem, 1fr))'} autoColumns={''} gap={6} w="90%" gridArea={'icons'}>
            <FramedIcon label="HTML5"><DiHtml5 /></FramedIcon>
            <FramedIcon label="CSS3"><DiCss3 /></FramedIcon>
            <FramedIcon label="React"><DiReact /></FramedIcon>
            <FramedIcon label="Nextjs"><RiNextjsFill /></FramedIcon>
            <FramedIcon label="Vue"><RiVuejsFill /></FramedIcon>
            <FramedIcon label="Firebase"><DiFirebase /></FramedIcon>
            <FramedIcon label="Figma"><LuFigma /></FramedIcon>
            <FramedIcon label="Affinity suite"><SiAffinity /></FramedIcon>
            <FramedIcon label="Adobe"><SiAdobe /></FramedIcon>
            <FramedIcon label="Blender"><SiBlender /></FramedIcon>
            <FramedIcon label="Rive"><SiRive /></FramedIcon>
          </Grid>
        {/* </VStack> */}
      </Grid>


      <Box as={'section'} display={'flex'} gap={'4'} flexWrap={'wrap'} py={'12'}>
        <PillText text={'Available for work'} bg="black" color="green.400" className="bg-black">
          <RiArrowRightLine color="white" />
        </PillText>
        <PillText text={'Web design'} />
        <PillText text={'Web development'} />
        <PillText text={'Graphic design'} />
        <PillText text={'Branding'} />
      </Box>

      <LogoWall logos={[
        { src: '/img/logo_RITE_International_Inc.png', alt: 'RITE International Inc.', width: 200, height: 120 },
        { src: '/img/logo_niagaralauncher.png', alt: 'Niagara Launcher', width: 200, height: 120 },
        { src: '/img/logo_kushtechdynamics(2).png', alt: 'KushTech Dynamics LLC', width: 200, height: 120 },
        { src: '/img/logo_mothersgift.png', alt: 'A Mother\'s Gift LLC', width: 200, height: 120 },
        { src: '/img/logo_bignoo_icon.png', alt: 'Big Noo LTD', width: 200, height: 120 },
      ]} 
      // title="Trusted by" 
      opacity={0.65} 
      maxLogoWidth={'100px'}
      />

      <Navbar />


      <Grid as={'section'} 
      templateColumns={{base:'1fr', md:'1fr 1fr'}} 
      // templateAreas={`'current post' 'links post'`} 
      gap={'4'}
      >
        <GridItem 
        // gridArea={'current'}
        // h={'full'}
        borderRadius={'md'} 
        p={4} 
        _hover={{bg:'fg/7'}} 
        >
          <Text as={'h3'} fontSize={'md'} fontWeight={'bold'} display={'flex'} alignItems={'center'} gap={2}>
            <RiTeamLine /> Current associations
          </Text>
          <List.Root fontSize="lg" fontWeight="bold" listStyle="none" spaceY={4} mt={2}>
            <List.Item>
              <Link href={'https://www.kushtechdynamics.com'}>
                KushTech Dynamics <RiExternalLinkLine />
              </Link>
              <Text fontSize="md" color="fg.subtle">Product management, design</Text>
            </List.Item>
            <List.Item>
              <Link href={'https://www.niagaralauncher.app'}>
                Niagara Launcher <RiExternalLinkLine />
              </Link>
              <Text fontSize="md" color="fg.subtle">Community management, design</Text>
            </List.Item>
          </List.Root>
        </GridItem>
        {/* <Box p={4} borderRadius={8} gridArea={'links'} className="bg-slate-800">
          <Text as={'h3'} fontSize={'md'} fontWeight={'bold'} display={'flex'} alignItems={'center'} gap={2}>
            <RiGridLine /> Content
          </Text>
          <List.Root fontSize="lg" fontWeight="bold" listStyle="none" mt={2}>
            <List.Item>
              <Link href={'https://bento.me/oddward'}>Bento links</Link>
            </List.Item>
            <List.Item>
              <Link href={'https://'}>Writing</Link>
            </List.Item>
            <List.Item>
              <Link href={'https://read.cv/mugtaba.g'}>CV</Link>
            </List.Item>
          </List.Root>
        </Box> */}
        <GridItem 
        // gridArea={'post'}
        borderRadius={'sm'} 
        _hover={{bg:'fg/7'}} 
        >
          <Card.Root variant={'outline'}
          className="group"
          >
            <Card.Header>
              <Image 
              src="/img/pex-3243090.jpg" 
              alt="Oddward.space" 
              w="100%" h="auto" aspectRatio="16/9" 
              borderRadius={'md'} 
              />
            </Card.Header>
            <Card.Body _groupHover={{color:'colorPalette.fg'}}>
              <Heading as={'h3'} fontSize={'lg'} fontWeight={'bold'}>Digital Garden <Icon><RiQuillPenFill /></Icon></Heading>
              <Text fontSize={'md'} color={'fg.subtle'}>A public knowledge base of notes, thoughts, and ideas (wip).</Text>
            </Card.Body>
            <LinkOverlay href={'https://garden.oddward.space'} />
          </Card.Root>
        </GridItem>
      </Grid>

      <DividerHeading title="Stuff" />
      <Box 
      // gridTemplateAreas={{
      //   base: `"dribbble""insta2""insta""github"`,
      //   sm: `"dribbble dribbble"
      //         "insta2 insta"
      //         "github other"`,
      //   md:`"dribbble insta2 insta"
      //       "dribbble github other"`
      // }} 
      // templateColumns={{base:1, sm:2, md:3}}
      columnCount={{base:1, sm:2, md:3}}
      gap={4}
      >
        <BentoCard 
          title="Dribbble" 
          subtitle="Design portfolio" 
          href="https://dribbble.com/oddward"
          // gridArea="dribbble"
          imgSrc="/img/project-socialapp.jpg"
          brandColor="dribbble" 
          coverIcon={<RiDribbbleLine />}
          />

        <BentoCard 
          title="GitHub" 
          subtitle="Dev projects" 
          href="https://github.com/Oddward"
          // gridArea="github"
          brandColor="black" 
          coverIcon={<RiGithubLine />}
          />

        <BentoCard 
          title="Instagram" 
          subtitle="Introspective content creation" 
          bgImage="/association_thumb.jpg" 
          href="https://instagram.com/mugtaba.g"
          // gridArea="insta"
          brandColor="instagram"
          imgSrc="/img/association_thumb.jpg" 
          coverIcon={<RiInstagramLine />}
          />

        <BentoCard 
          title="Instagram alt" 
          subtitle="Dev notes" 
          href="https://instagram.com/oddward.io"
          // gridArea="insta2" 
          brandColor="instagram"
          imgSrc="/img/cssrelative_thumb.jpg" 
          coverIcon={<RiInstagramLine />}
          />

        {/* <BentoCard 
          title="TBD..." 
          subtitle="" 
          href="#" 
          gridArea="other" 
          /> */}
      </Box>

      <DividerHeading title="Projects" />

      <Box as="section" id="projects">
        <ProjectGrid 
          title="KushTech Dynamics full branding" 
          description="Logo design, social media content design and website design & development with KushTech Dynamics. More to come."
          link="https://dribbble.com/shots/24387428-Rebranding-business-portfolio-SIGS?utm_source=Clipboard_Shot&utm_campaign=Oddward&utm_content=Rebranding%2C%20business%20portfolio%20%E2%80%94%20SIGS&utm_medium=Oddward_Space"
        >
          <Image src="/img/project-kdbrandlogos.jpg" alt="KushTech Dynamics combomarks" />
          <Image src="/img/project-kdbrandbento.jpg" alt="KushTech Dynamics bento" />
        </ProjectGrid>

        <ProjectGrid 
          title="SIGS Rebranding & Print Portfolio" 
          description="Rebranding, business portfolio design and print design with Sudan International Grammar School, along with a booklet design (using photos I took for the school). Was setting up a design language for the school's marketing materials including social media profiles and content. More details on Dribbble."
          link="https://dribbble.com/shots/24387428-Rebranding-business-portfolio-SIGS?utm_source=Clipboard_Shot&utm_campaign=Oddward&utm_content=Rebranding%2C%20business%20portfolio%20%E2%80%94%20SIGS&utm_medium=Oddward_Space"
        >
          <Image src="/img/project-school.jpg" alt="SIGS business portfolio" />
          <Image src="/img/project-schoolbooklet.jpg" alt="SIGS booklet design" />
        </ProjectGrid>

        <Heading as="h3" size="lg" fontWeight={'bold'} mb={4}>Dev projects</Heading>

        <SimpleGrid columns={{base:1, md:2}} gap={4}>
          <ProjectCard href="https://github.com/Oddward/project-music-e" title="React music app (on hold)" src="/img/project-music.jpg" />
          <ProjectCard href="https://github.com/Oddward/nlsetups" title="Launcher setups platform (on hold)" src="/img/NLSetups - User Profile ss.png" />
        </SimpleGrid>
      </Box>
    </>
  );
}
