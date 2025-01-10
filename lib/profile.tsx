import { RiMastodonFill } from "react-icons/ri";
import { SiDribbble, SiGithub, SiInstagram, SiThreads } from "react-icons/si";

const ICONSIZE = 8

export const socials = [
    {
        name: 'Threads',
        href: 'https://threads.com/@mugtaba.g',
        icon: <SiThreads width={ICONSIZE} height={ICONSIZE} />
    },
    {
        name: 'Bluesky',
        href: 'https://bsky.app/profile/@oddwardio.bsky.social',
        icon: <SiThreads width={ICONSIZE} height={ICONSIZE} />
    },
    {
        name: 'Mastadon',
        href: 'https://universeodon.com/@oddward',
        icon: <RiMastodonFill width={ICONSIZE} height={ICONSIZE} />
    },
    {
        name: 'Twitter',
        href: 'https://x.com/@oddward',
        icon: <RiMastodonFill width={ICONSIZE} height={ICONSIZE} />
    },
    {
        name: 'GitHub',
        href: 'https://github.com/Oddward',
        icon: <SiGithub width={ICONSIZE} height={ICONSIZE} />
    },
    {
        name: 'Dribbble',
        href: 'https://dribbble.com/oddward',
        icon: <SiDribbble width={ICONSIZE} height={ICONSIZE} />
    },
    {
        name: 'Instagram (general)',
        href: 'https://instagram.com/mugtaba.g',
        icon: <SiInstagram width={ICONSIZE} height={ICONSIZE} />
    },
    {
        name: 'Instagram (dev)',
        href: 'https://instagram.com/oddward.io',
        icon: <SiInstagram width={ICONSIZE} height={ICONSIZE} />
    },
]