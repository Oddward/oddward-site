import { RiMastodonFill, RiTwitterFill } from "react-icons/ri";
import { SiDribbble, SiGithub, SiInstagram, SiThreads, SiBluesky } from "react-icons/si";

const ICONSIZE = 8

export const socials = [
    {
        name: 'Threads',
        href: 'https://threads.com/@mugtaba.g',
        handle: '@mugtaba.g',
        icon: <SiThreads width={ICONSIZE} height={ICONSIZE} />
    },
    {
        name: 'Bluesky',
        href: 'https://bsky.app/profile/oddward.space',
        handle: 'oddward.space',
        icon: <SiBluesky width={ICONSIZE} height={ICONSIZE} />
    },
    {
        name: 'Mastadon',
        href: 'https://universeodon.com/@oddward',
        handle: '@oddward',
        icon: <RiMastodonFill width={ICONSIZE} height={ICONSIZE} />
    },
    {
        name: 'Twitter',
        href: 'https://x.com/@oddward_io',
        handle: '@oddward_io',
        icon: <RiTwitterFill width={ICONSIZE} height={ICONSIZE} />
    },
    {
        name: 'GitHub',
        href: 'https://github.com/Oddward',
        handle: '@Oddward',
        icon: <SiGithub width={ICONSIZE} height={ICONSIZE} />
    },
    {
        name: 'Dribbble',
        href: 'https://dribbble.com/oddward',
        handle: '@oddward',
        icon: <SiDribbble width={ICONSIZE} height={ICONSIZE} />
    },
    {
        name: 'Instagram (general)',
        href: 'https://instagram.com/mugtaba.g',
        handle: '@mugtaba.g',
        icon: <SiInstagram width={ICONSIZE} height={ICONSIZE} />
    },
    {
        name: 'Instagram (dev)',
        href: 'https://instagram.com/oddward.io',
        handle: '@oddward.io',
        icon: <SiInstagram width={ICONSIZE} height={ICONSIZE} />
    },
]