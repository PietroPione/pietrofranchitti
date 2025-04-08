import Link from 'next/link';

export default function BasicButton({ testo, link, externalLink }) {
    return (
        <Link
            href={link}
            target={externalLink ? '_blank' : ''}
            rel={externalLink ? 'noopener noreferrer' : undefined}
            className="relative inline-block font-family-open-sans text-sm tracking-widest uppercase text-black hover:text-white cursor-pointer border-3 border-black hover:border-white py-2 px-4 shadow-[1px_1px_0px_0px,2px_2px_0px_0px,3px_3px_0px_0px,4px_4px_0px_0px,5px_5px_0px_0px] active:shadow-[0px_0px_0px_0px] active:top-[5px] active:left-[5px] select-none touch-action-manipulation md:px-6"
        >
            {testo}
        </Link>
    );
}