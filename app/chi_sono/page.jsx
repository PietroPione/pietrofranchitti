import { createClient } from "@/prismicio";
import SezioneBio from "../components/bio/SezioneBio";


export default async function BioPage() {
    const client = createClient();
    const biofalsaResponse = await client.getByType("biofalsa");

    const bioSlice = biofalsaResponse?.results[0]?.data?.slices?.find(
        (slice) => slice.slice_type === "bio_falsa"
    );

    const barraHonest = biofalsaResponse?.results[0]?.data?.slices?.find(
        (slice) => slice.slice_type === "barra_honest"
    );

    const bioVera = biofalsaResponse?.results[0]?.data?.slices?.find(
        (slice) => slice.slice_type === "bio_vera"
    );

    const cosePiacciono = biofalsaResponse?.results[0]?.data?.slices?.find(
        (slice) => slice.slice_type === "cose_piacciono"
    );

    const coseNonPiacciono = biofalsaResponse?.results[0]?.data?.slices?.find(
        (slice) => slice.slice_type === "cose_non_piacciono"
    );

    return (
        <div className="relative py-20">
            <SezioneBio
                bioSlice={bioSlice}
                bio={bioSlice?.primary?.bio}
                fotofalsabuona={bioSlice?.primary?.fotofalsabuona}
                fotofalsacattiva={bioSlice?.primary?.fotofalsacattiva}
                testoHonest={barraHonest?.primary?.testohonest}
                bioVeraText={bioVera?.primary?.bio}
                fotoBioVera={bioVera?.primary?.foto_buona}
                cosePiacciono={cosePiacciono}
                coseNonPiacciono={coseNonPiacciono}
                id="who" // Puoi mantenere l'id o cambiarlo se necessario
            />
        </div>
    );
}

export async function generateMetadata() {
    const client = createClient();
    const biofalsaResponse = await client.getByType("biofalsa");
    const metaData = biofalsaResponse?.results[0]?.data;

    return {
        title: metaData?.meta_title || 'Bio',
        description: metaData?.meta_description || 'La mia biografia',
        openGraph: {
            title: metaData?.meta_title || undefined,
            description: metaData?.meta_description || undefined,
            images: metaData?.meta_image
                ? [metaData?.meta_image.url]
                : undefined,
        },
    };
}