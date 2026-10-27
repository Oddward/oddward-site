'use client'

import { createContext, startTransition, useCallback, useContext, useLayoutEffect, useRef, useState, ViewTransition } from 'react'
import NextLink from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Box, Flex, Link, LinkProps } from '@chakra-ui/react'
import Scritto from '@scritto/react'
import Logo from './logo'

// Words the loader rolls through; the last one is held before the intro hands off to the navbar
const words = ['oddward','oddward.','oddward.space']
const stepMs = 300
const holdMs = 300

const IntroContext = createContext({ done: false, navigate: (_href: string) => {} })
export const useIntroDone = () => useContext(IntroContext).done

export const IntroProvider = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter()
    const pathname = usePathname()
    const [done, setDone] = useState(false)
    const [step, setStep] = useState(0)
    // Page to open once the loader finishes, set when it was started by a link click
    const pendingHref = useRef<string | null>(null)
    const isFirstLoad = useRef(true)

    // Layout effect, not useEffect: React holds passive effects until a view transition
    // finishes, which would keep the first word up for the whole logo morph
    useLayoutEffect(() => {
        if (done) return
        if (step < words.length - 1) {
            let delay = stepMs
            // The loader is in the server HTML, so the first word is already showing before hydration
            if (isFirstLoad.current && step === 0) {
                const firstPaint = performance.getEntriesByName('first-contentful-paint')[0]?.startTime ?? 0
                delay = Math.max(0, stepMs - (performance.now() - firstPaint))
            }
            const t = setTimeout(() => {
                setStep(step + 1)
                // Swap the page behind the loader in its own transition, not the logo morph's:
                // unmounting the old page stops Chakra (zag) machines, which call flushSync,
                // and React skips any view transition that's still preparing when that happens
                const href = pendingHref.current
                if (step === 0 && href) startTransition(() => router.push(href))
            }, delay)
            return () => clearTimeout(t)
        }
        // Hold the loader until the new page is in place
        if (pendingHref.current && pathname !== pendingHref.current) return
        // Must run inside a transition so the logo morphs into the navbar
        const t = setTimeout(() => startTransition(() => {
            pendingHref.current = null
            setDone(true)
        }), holdMs)
        return () => clearTimeout(t)
    }, [step, done, router, pathname])

    const navigate = useCallback((href: string) => {
        router.prefetch(href)
        pendingHref.current = href
        isFirstLoad.current = false
        // Navbar logo morphs back into the loader while the next page gets ready behind it
        startTransition(() => {
            setStep(0)
            setDone(false)
        })
    }, [router])

    return (
        <IntroContext.Provider value={{ done, navigate }}>
            {!done && (
                <ViewTransition enter="intro-in" exit="intro-out" default="none">
                    <Flex
                        position={'fixed'} inset={0} zIndex={1000}
                        bg={'brand.bg'}
                        flexDir={'column'} alignItems={'center'} justifyContent={'center'} gap={6}
                        aria-hidden
                    >
                        <ViewTransition name="brand-logo" share="logo-morph" default="none">
                            <Box w={20} h={20}>
                                <Logo />
                            </Box>
                        </ViewTransition>
                        <Scritto
                            value={words[step]}
                            style={{ fontSize: '1.5rem', fontWeight: 500, color: 'var(--chakra-colors-fg-muted)' }}
                        />
                    </Flex>
                </ViewTransition>
            )}
            {children}
        </IntroContext.Provider>
    )
}

// Internal link that plays the loader before switching pages
export const PageLink = ({ href, children, ...props }: LinkProps & { href: string }) => {
    const { navigate } = useContext(IntroContext)
    const pathname = usePathname()

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        // Let new-tab / modified clicks and same-page clicks behave normally
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0 || href === pathname) return
        e.preventDefault()
        navigate(href)
    }

    return (
        <Link asChild {...props}>
            <NextLink href={href} onClick={handleClick}>{children}</NextLink>
        </Link>
    )
}

export default IntroProvider
