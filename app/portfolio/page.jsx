// app/portfolio/page.jsx

import { createClient } from '@/prismicio';
import { notFound } from 'next/navigation';
import PortfolioClient from '../components/PortfolioClient';

async function getPortfolioPages() {
    const client = createClient();
    const pages = await client.getAllByType('portfolio');
    return pages;
}

async function getPortfolioPageData() {
    const client = createClient();
    try {
        const page = await client.getSingle("portfoliopage");
        return page;
    } catch (error) {
        console.error("Errore nel recupero di 'portfoliopage':", error);
        return notFound();
    }
}

export default async function PortfolioPage() {
    const portfolioPages = await getPortfolioPages();
    const portfolioPageData = await getPortfolioPageData();

    const portfolioInfoSlice = portfolioPageData?.data?.slices?.find(
        (slice) => slice.slice_type === 'portfolio_info'
    );
    const pageTitle = portfolioInfoSlice?.primary?.titolo;
    const copyPortfolio = portfolioInfoSlice?.primary?.copy;

    return (
        <PortfolioClient
            title={pageTitle}
            description={copyPortfolio}
            pages={portfolioPages}
        />
    );
}
