import Link from 'next/link';

export default function BasicButton({ testo, link, externalLink, scaleHover }) {
    const hoverEffectClass = scaleHover
        ? 'hover:scale-110 transition-transform duration-200'
        : 'hover:text-white hover:border-white hover:bg-black transition-colors duration-300';

    return (
        <Link
            href={link}
            target={externalLink ? '_blank' : ''}
            rel={externalLink ? 'noopener noreferrer' : undefined}
            className={`relative inline-block  text-14 tracking-widest uppercase text-black cursor-pointer border-3 border-black py-2 px-4 shadow-[1px_1px_0px_0px,2px_2px_0px_0px,3px_3px_0px_0px,4px_4px_0px_0px,5px_5px_0px_0px] active:shadow-[0px_0px_0px_0px] active:top-[5px] active:left-[5px] select-none touch-action-manipulation md:px-6 ${hoverEffectClass}`}
        >
            {testo}
        </Link>
    );
}