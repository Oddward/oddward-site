'use client'
import { FunctionComponent, ReactNode, useRef, useState } from 'react';
import { Portal, Dialog, CloseButton, Box } from '@chakra-ui/react';

interface MasonryProps {
    children: ReactNode;
    columns?: number;
    gap?: number;
    className?: string;
}
 
const Masonry: FunctionComponent<MasonryProps> = ({
    children,
    columns = 3,
    gap = 16,
    className = '',
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [selectedItem, setSelectedItem] = useState<ReactNode | null>(null);
    const childrenArray = Array.isArray(children) ? children : [children].filter(Boolean);
    
    const handleItemClick = (child: ReactNode) => {
        setSelectedItem(child);
        // onOpen();
    };
    
    return (
        <>
            <Dialog.Root 
            size="cover" 
            placement="center">
                <Box 
                    ref={containerRef}
                    columns={{base: 1, sm: 2, md: columns}}
                    columnGap={`${gap}px`}
                    rowGap={`${gap}px`}
                    w="full"
                    bgColor={'bg.subtle'}
                    p={2}
                    className={`masonry-container ${className}`}
                >
                    {childrenArray.map((child, index) => (
                        <Dialog.Trigger 
                            key={index} 
                            w={'full'} h={'auto'}
                            className="masonry-item cursor-pointer"
                            onClick={() => handleItemClick(child)}
                            style={{
                                marginBottom: `${gap}px`,
                                breakInside: 'avoid',
                                display: 'block'
                            }}
                        >
                            {child}
                        </Dialog.Trigger>
                    ))}
                </Box>

                <Portal>
                    <Dialog.Backdrop bg="blackAlpha.600" backdropFilter="auto" backdropBlur="2px" />
                    <Dialog.Positioner w="100lvw" h="100lvh">
                        <Dialog.Content
                            position="relative"
                            bg="transparent"
                            boxShadow="none"
                            objectFit="contain"
                        >
                            <Dialog.Body 
                            display="flex"
                            placeContent="center"
                            maxH={`calc(100lvh - 2rem)`}
                            >
                                {selectedItem}
                            </Dialog.Body>
                            <Dialog.CloseTrigger position="absolute" top="0" insetEnd="-12" asChild>
                                <CloseButton 
                                bg="bg" 
                                size="sm" 
                                rounded="full"
                                aspectRatio={1/1}
                                // onClick={onClose} 
                                />
                            </Dialog.CloseTrigger>
                        </Dialog.Content>
                    </Dialog.Positioner>
                </Portal>
            </Dialog.Root>
        </>
    );
}
 
export default Masonry;
