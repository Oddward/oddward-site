import { Card, CardRootProps, LinkOverlay, Text } from "@chakra-ui/react"

interface BentoCardProps extends CardRootProps  {
    title: string
    subtitle?: string
    href: string
}

export const BentoCard: React.FC<BentoCardProps> = ({
    title="",
    subtitle="",
    href="#",
    children,
    ...props
}) => {
    return (
        <Card.Root borderRadius={8} {...props}>
            <Card.Body>
            {children}
            </Card.Body>
            <LinkOverlay href={href} />
            <Card.Footer flexWrap="wrap">
            <Text fontWeight="bold">{title}</Text>
            <Text>{subtitle}</Text>
            </Card.Footer>
        </Card.Root>
    )
}