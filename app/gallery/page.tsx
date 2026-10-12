import Masonry from "@/components/design/masonry";
import { Navbar } from "@/components/design/navbar";
import { Box, Heading, Image, Text } from "@chakra-ui/react";

const imageList = [
    {
        src: "/img/gallery/Post_A.png",
        alt: "A stylish, minimal, square text-based design on a black background featuring the letter A in a bold font and a smaller title next to it that reads 'Art isn't just for creatives, it's for everyone'. Below it on the right is a framed monochrome photo of a woman's back with a leaf spreading from it and text on the left that reads 'There's this primal human desire to realise what's in our minds & hearts in a tangible form'.",
        title: "The first of a series of alphabetical designs for instagram",
    },
    {
        src: "/img/gallery/carouselcover_2020.jpg",
        alt: "Cover of an Instagram carousel featuring a man with glasses pulling on his collar and a 3D-rendered title '2020:' and caption 'year in reflection'. A column on the side reads 'Reflecting on this curious year and what I've learned'.",
        title: "Cover of instagram carousel about half-year reflections",
    },
    {
        src: "/img/gallery/carouselcover_association.jpg",
        alt: "Cover of an Instagram carousel about brand association featuring an invisible man's clothes walking and the title 'Association: from the outside looking in'. A column on the side reads 'Association is a key to long-term branding' and a subcaption 'How does it apply to personal profiles?'.",
        title: "Cover of instagram carousel about half-year reflections",
    },
    {
        src: "/img/gallery/carouselcover_odyssey.jpg",
        alt: "Cover of instagram carousel about navigating life using the imagery of jungle trecking with the title 'Humankind odyssey' and the caption 'Jungle trecking through life'. A column on the side reads 'In as many ways as humans have evolved, what we need to survive and thrive has stayed largely consistent.'",
        title: "Cover of instagram carousel about half-year reflections",
    },
    {
        src: "/img/gallery/carouselcover_personal.jpg",
        alt: "Cover of instagram carousel with a photo of a stylish woman with curly hair and fashion glasses and a 3d-rendered title 'the Personal in branding'. A column on the side reads 'Why make brands so personal?' and a subcaption reads 'And why is that better?'.",
        title: "Cover of instagram carousel about half-year reflections",
    },
    {
        src: "/img/gallery/dribbble_kdbrandgrid.png",
        alt: "A grid of sample social media designs for KushTech Dynamics, highlighting engineering, contracting and soft skills in clean high contrast grid-based designs.",
        title: "Cover of instagram carousel about half-year reflections",
    },
    {
        src: "/img/gallery/dribbble_kdclearspace3.png",
        alt: "An illustration of the clearspace around and in between the KushTech Dynamics combomark logo on a dark blue background, featuring a geometric bird shape standing on long thick shapes that together shape the letter K and the name stacked vertically next to it.",
        title: "Cover of instagram carousel about half-year reflections",
    },
    {
        src: "/img/gallery/dribbble_kdlogo3.png",
        alt: "An illustration of the layout structure of the KushTech Dynamics logomark featuring a geometric bird shape standing on long thick shapes that together shape the letter K.",
        title: "Cover of instagram carousel about half-year reflections",
    },
    {
        src: "/img/gallery/dribbble_schoolweb.png",
        alt: "Minimal mockup of the desktop and mobile view of a blue and white themed school website concept with a grid-based layout, the top section showing the latest featured post on one side with a video thumbnail below and an image card of a student on the other with a glass button on top, the section after it showing a grid of news articles.",
        title: "School website design",
    },
    {
        src: "/img/gallery/dribbble_schoolweb2.png",
        alt: "Minimal mockup of the desktop and mobile view of the contact section for a school website design concept, featuring a grid with one side showing an image bust of the person to contact and a glass contact button with the label 'Say hello', and the other side showing a card with a message from the person greeting & welcoming the viewer with white text on black background.",
        title: "School website design",
    },
    {
        src: "/img/gallery/dribbble_sigsbooklet1.jpg",
        alt: "Mockup of a booklet top view for a school, featuring the booklet cover with a photo taken by me, and a page with a grid-based card layout of text about the school sections.",
        title: "School booklet print design",
    },
    {
        src: "/img/gallery/dribbble_sigsbooklet2.jpg",
        alt: "Mockup of a booklet top view for a school, featuring a spread of 2 pages: the left has a blue background with a yellow title of 'Our principles' and a clean minimal list, and the right page featuring a photo of 2 students giving a speach at the top and the mission and vision in a minimal clean layout below.",
        title: "School booklet print design",
    },
    {
        src: "/img/gallery/dribbble_sigsportfolio2.jpg",
        alt: "Mockup of business print portfolio designs for a school featuring the top view of the designed letter, envelope, and website screens on a phone and a tablet all sitting on a wooden desk.",
        title: "School portfolio print design",
    },
    {
        src: "/img/gallery/dribbble_sigsportfolio6.jpg",
        alt: "Mockup of business print portfolio designs for a school featuring business cards, front and back, and a branded memo.",
        title: "School portfolio print design",
    },
    {
        src: "/img/gallery/dribbble_socialappmockup.jpg",
        alt: "A mockup graphic of 2 phones displaying a page each of the UI for an aesthetic social media app concept, a profile view and an explore view, with the phones standing at different angles on a solid yellow-ish 3D scene.",
        title: "Social media app UI concept",
    },
    {
        src: "/img/gallery/dribbble_Stubscribe.png",
        alt: "A mockup graphic of 2 phones displaying a page each of the UI for a group subscriptions manager app concept, the main screen featuring items designed like membership cards and the item details screen featuring a list of sharing members, with the large text 'Stubscribe' spread out in the middle behind them on a dark green background.",
        title: "Group subscriptions manager app UI concept",
    },
    {
        src: "/img/gallery/insta_sigshomeschool.png",
        alt: "Instagram post design for a school's homeschool program flyer featuring an image of a mom and her child studying together with a book and a laptop, a bold title, and program details layed out uniformaly across most of the space.",
        title: "School homeschool program flyer",
    },
    {
        src: "/img/gallery/insta_zawmath.png",
        alt: "Instagram flyer post design for a school English course featuring the book used for the syllabus on one side, the course details layed out in the centre, and a graphic with the teacher and their details at the bottom.",
        title: "School math program flyer",
    },
    {
        src: "/img/gallery/insta_zawsmile1.png",
        alt: "Instagram flyer post design for a school Math course featuring 3D geometric solid objects stacked in one corner, the course details layed out in the centre, and a graphic with the teacher and their details at the bottom.",
        title: "School English program flyer",
    },
    {
        src: "/img/gallery/instastory_sigshomeschool.png",
        alt: "Instagram story post design for a school's homeschool program featuring an image of a mom and her child studying together with a book and a laptop, and program details layed out uniformaly across the rest of the space.",
        title: "School homeschool program flyer story",
    },
    {
        src: "/img/gallery/instastory_zawbiocourse.png",
        alt: "Instagram story post design for a school Bio course featuring the profile of a bird on a branch filling the space beside the course details facing the text.",
        title: "School Bio program flyer story",
    },
    {
        src: "/img/gallery/logosticker_mgift.png",
        alt: "Sticker design of the logo for A Mother's Gift displayed on top a dim image of a mother and her child.",
        title: "Sticker design of logo for A Mother's Gift",
    },
    {
        src: "/img/gallery/mgift_pamphletback.jpg",
        alt: "Pamphlet page print design with a grid-based layout featuring a summary of ingredients with an image of floating spices, a mom and her child smiling, and a message for mothers from A Mother's Gift.",
        title: "Pamphlet print design for A Mother's Gift",
    },
    {
        src: "/img/gallery/mockup_mgiftlabel.jpg",
        alt: "A red-ish glass drink bottle mockup with a designed label on the front for A Mother's Gift.",
        title: "Product mockup and label design for A Mother's Gift",
    },
    {
        src: "/img/gallery/mgift_pamphletfront.jpg",
        alt: "Pamphlet page for A Mother's Gift featuring the logo, a banner image with a woman sitting with a baby and a drink, an image of the signature drink bottle, and some copy.",
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
                    <Text as="span" fontSize="md" color="fg.muted">An collection of works (more to come soon™)</Text>
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