import Masonry from "@/components/design/masonry";
import { Navbar } from "@/components/design/navbar";
import { Box, Heading, Image, Text } from "@chakra-ui/react";

const imageList = [
    {
        src: "/img/gallery/Post_A.png",
        alt: "Dark blue image with white text that reads 'Mugtaba Garoot. Web, Dev, Design.' and a white logo in the bottom right corner.",
        title: "The first of a series of alphabetical designs for instagram",
    },
    {
        src: "/img/gallery/carouselcover_2020.jpg",
        alt: "Cover of an Instagram carousel featuring a man with glasses pulling on his collar and a title '2020: year in reflection'.",
        title: "Cover of instagram carousel about half-year reflections",
    },
    {
        src: "/img/gallery/carouselcover_association.jpg",
        alt: "Cover of an Instagram carousel about brand association featuring an invisible man's clothes walking and the title 'Association: from the outside looking in'.",
        title: "Cover of instagram carousel about half-year reflections",
    },
    {
        src: "/img/gallery/carouselcover_odyssey.jpg",
        alt: "Cover of instagram carousel about half-year reflections",
        title: "Cover of instagram carousel about half-year reflections",
    },
    {
        src: "/img/gallery/carouselcover_personal.jpg",
        alt: "Cover of instagram carousel about half-year reflections",
        title: "Cover of instagram carousel about half-year reflections",
    },
    {
        src: "/img/gallery/dribbble_kdbrandgrid.png",
        alt: "Cover of instagram carousel about half-year reflections",
        title: "Cover of instagram carousel about half-year reflections",
    },
    {
        src: "/img/gallery/dribbble_kdclearspace3.png",
        alt: "Cover of instagram carousel about half-year reflections",
        title: "Cover of instagram carousel about half-year reflections",
    },
    {
        src: "/img/gallery/dribbble_kdlogo3.png",
        alt: "Cover of instagram carousel about half-year reflections",
        title: "Cover of instagram carousel about half-year reflections",
    },
    {
        src: "/img/gallery/dribbble_schoolweb.png",
        alt: "School website design concept",
        title: "School website design",
    },
    {
        src: "/img/gallery/dribbble_schoolweb2.png",
        alt: "School website design concept",
        title: "School website design",
    },
    {
        src: "/img/gallery/dribbble_sigsbooklet1.jpg",
        alt: "School booklet print design",
        title: "School booklet print design",
    },
    {
        src: "/img/gallery/dribbble_sigsbooklet2.jpg",
        alt: "School booklet print design",
        title: "School booklet print design",
    },
    {
        src: "/img/gallery/dribbble_sigsportfolio2.jpg",
        alt: "School portfolio print design",
        title: "School portfolio print design",
    },
    {
        src: "/img/gallery/dribbble_sigsportfolio6.jpg",
        alt: "School portfolio print design",
        title: "School portfolio print design",
    },
    {
        src: "/img/gallery/dribbble_socialappmockup.jpg",
        alt: "Social media app UI concept",
        title: "Social media app UI concept",
    },
    {
        src: "/img/gallery/dribbble_Stubscribe.png",
        alt: "Group subscriptions manager app UI concept",
        title: "Group subscriptions manager app UI concept",
    },
    {
        src: "/img/gallery/insta_sigshomeschool.png",
        alt: "School homeschool program flyer",
        title: "School homeschool program flyer",
    },
    {
        src: "/img/gallery/insta_zawmath.png",
        alt: "School math program flyer",
        title: "School math program flyer",
    },
    {
        src: "/img/gallery/insta_zawsmile1.png",
        alt: "School English program flyer",
        title: "School English program flyer",
    },
    {
        src: "/img/gallery/instastory_sigshomeschool.png",
        alt: "School homeschool program flyer story",
        title: "School homeschool program flyer story",
    },
    {
        src: "/img/gallery/instastory_zawbiocourse.png",
        alt: "School Bio program flyer story",
        title: "School Bio program flyer story",
    },
    {
        src: "/img/gallery/logosticker_mgift.png",
        alt: "Sticker design of logo for A Mother's Gift",
        title: "Sticker design of logo for A Mother's Gift",
    },
    {
        src: "/img/gallery/mgift_pamphletback.jpg",
        alt: "Pamphlet print design for A Mother's Gift",
        title: "Pamphlet print design for A Mother's Gift",
    },
    {
        src: "/img/gallery/mgift_pamphletfront.jpg",
        alt: "Pamphlet page for A Mother's Gift featuring a banner image with a woman sitting with a baby and a drink, an image of the signature drink bottle, and some copy.",
        title: "Pamphlet print design for A Mother's Gift",
    },
    {
        src: "/img/gallery/og_twitter-image.png",
        alt: "Dark blue image with white text that reads 'Mugtaba Garoot. Web, Dev, Design.' and a white logo in the bottom right corner.",
        title: "Opengraph image design for my website",
    },
]


export default function Gallery() {
    return (
        <>
            <Navbar />

            <Box as={'section'} pb={16} pt={2}>
                    <Heading as="h1" 
                    display={"inline-block"}
                    fontSize="6xl" 
                    fontWeight={'black'} 
                    bgGradient="warm" 
                    // bg={"linear(to-l, orange, fuscia)"}
                    bgClip={'text'} 
                    lineHeight={1.3}
                    // textTransform={'uppercase'} 
                    w={'auto'}>
                        Gallery
                    </Heading>
                    <Text as="span" fontSize="md" color="fg.muted">An arbitrary collection of works</Text>
            </Box>

            <Box as={'section'} pb={16}>
                <Masonry columns={3} gap={8} className="w-full">
                    {imageList.map((image, index) => (
                        <Image 
                        key={index} 
                        src={image.src} 
                        alt={image.alt} 
                        title={image.title} 
                        flex={1}
                        objectFit="contain" />
                    ))}
                </Masonry>
            </Box>
        </>
    )
}