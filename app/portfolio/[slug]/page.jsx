import { createClient } from "@/prismicio";
import BasicButton from "@/app/components/BasicButton";
import PortfolioDesktopCard from "@/app/components/card/PortfolioDesktopCard";
import GeneralGallery from "@/app/components/GeneralGallery"; // Importa GeneralGallery

export async function generateStaticParams() {
    const client = createClient();
    const response = await client.getByType("portfolio");

    return response.results.map((portfolio) => ({
        slug: portfolio.uid,
    }));
}

export default async function PortfolioPage({ params }) {
    const { slug } = await params;
    const client = createClient();

    const response = await client.getByType("portfolio");
    const portfolio = response.results.find((doc) => doc.uid === slug);

    if (!portfolio) {
        return <p>Documento non trovato</p>;
    }

    const mappedSlices = portfolio.data.slices.map((slice) => ({
        type: slice.slice_type,
        primary: slice.primary,
    }));

    const infoSlice = mappedSlices.find((slice) => slice.type === "informazioni")?.primary || null;
    const gallerySlice = mappedSlices.find((slice) => slice.type === "gallery")?.primary || null;

    const screenDesktop = gallerySlice?.screen_desktop || [];
    const screenMobile = gallerySlice?.screen_mobile || [];

    // Preparo l'array di immagini per GeneralGallery da screenMobile
    const mobileImagesForGallery = screenMobile.map(item => ({
        url: item.screen.url,
        alt: item.screen.alt || "",
    }));

    return (
        <div className="container">
            <div className="flex flex-wrap gap-x-6 gap-y-10 md:gap-y-6 pb-10">
                {/* 1. screen_desktop[0] */}
                <div className="w-full md:w-[calc(50%-1.5rem)]  overflow-hidden">
                    {screenDesktop[0] && <PortfolioDesktopCard index={0} screenDesktop={screenDesktop} />}
                </div>

                {/* 2. screen_desktop[1] */}
                <div className="w-full md:w-[calc(50%-1.5rem)]  overflow-hidden">
                    {screenDesktop[1] && <PortfolioDesktopCard index={1} screenDesktop={screenDesktop} />}
                </div>

                {/* 3. infoSlice */}
                <div className="w-full md:w-[calc(50%-1.5rem)]  space-y-4 md:space-y-10 flex flex-col justify-center">
                    <div className="space-y-4 md:space-y-10 flex flex-col">
                        <div className="space-y-4 md:space-y-10 grid grid-cols-[max-content] gap-y-2">
                            {infoSlice?.made_with && (
                                <div className="px-4 py-2 border font-medium">{infoSlice?.made_with}</div>
                            )}
                            {infoSlice?.titolo && <h2 className=" text-36 md:text-46 lg:text-60 leading-14 font-semibold">{infoSlice.titolo}</h2>}
                        </div>
                        {infoSlice?.descrizione_progetto && <p>{infoSlice.descrizione_progetto}</p>}
                        <div className="mt-4">
                            <BasicButton
                                testo={infoSlice?.testo_tasto}
                                link={infoSlice?.link_progetto?.url}
                                scaleHover
                                externalLink
                            />
                        </div>
                    </div>
                </div>

                {/* 4. Gallery screen_mobile */}
                <div className="w-full md:w-[calc(50%-1.5rem)] flex justify-center  overflow-hidden">
                    {screenMobile && <GeneralGallery images={mobileImagesForGallery} />}
                </div>

                {/* 5. screen_desktop[2] */}
                <div className="w-full md:w-[calc(50%-1.5rem)]  overflow-hidden">
                    {screenDesktop[2] && <PortfolioDesktopCard index={2} screenDesktop={screenDesktop} />}
                </div>

                {/* 6. screen_desktop[3] */}
                <div className="w-full md:w-[calc(50%-1.5rem)]  overflow-hidden">
                    {screenDesktop[3] && <PortfolioDesktopCard index={3} screenDesktop={screenDesktop} />}
                </div>
            </div>
        </div>
    );
}