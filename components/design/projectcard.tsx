import { Box, Center, Flex, Heading, Icon, Link } from "@chakra-ui/react";
import { RiArrowRightUpLine } from "react-icons/ri";

export default function ProjectCard({ 
    href='', 
    title='',
    src=''
}) {
    return(
        <Link href={href}
            display="inline-block"
            w={{ base: "300px", lg: "400px" }}
            h={{ base: "225px", lg: "300px" }}
            borderRadius="lg"
            fontSize={{ base: "xl", lg: "2xl" }}
            fontWeight="semibold"
            color="whiteAlpha.900"
            overflow="hidden"
            border="2px"
            borderColor="gray.900"
            _hover={{ borderColor: "gray.500" }}
            bgImage={`url("${src}")`}
            bgSize="contain"
            bgRepeat="no-repeat"
        >
            <Box
            w="full"
            h="full"
            bgGradient="linear-gradient(to top, black, transparent)"
            >
                <Flex
                    justify="space-between"
                    gap={4}
                    alignItems="flex-end"
                    height="full"
                    p={4}
                >
                    <Heading as="h3" size="lg">{title}</Heading>
                    <Center w={8} h={8} borderRadius="full" bg="blackAlpha.500">
                        <Icon asChild>
                            <RiArrowRightUpLine />
                        </Icon>
                    </Center>
                </Flex>
            </Box>
        </Link>
    )
}