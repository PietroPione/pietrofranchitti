import { createClient } from "@/prismicio";
import StarWarsTitle from "./StarWarsTitle";
import StarWarsParagraph from "./StarWarsParagraph";
import ListaRandom from "./ListaRandom";



export default async function Page() {
    const client = createClient();
    const homepageResponse = await client.getSingle("homepage");

    const heroHomeSlice = homepageResponse?.data?.slices?.find(
        (slice) => slice.slice_type === "hero_home"
    );

    const titoloHero = heroHomeSlice?.primary?.titolo_hero;
    const testoHero = heroHomeSlice?.primary?.testo_hero;
    const sfondoHero = heroHomeSlice?.primary?.sfondo_hero?.url;
    const testoLista = heroHomeSlice?.primary?.testo_lista;
    const elencoLista = heroHomeSlice?.primary?.elenco_lista;

    return (
        <div className="relative">

            {testoHero && sfondoHero && titoloHero && (<div
                className="h-screen sticky flex flex-col justify-between items-center"
                style={{
                    backgroundImage: `url(${sfondoHero})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Titolo Hero occupa metà dello spazio */}
                <div className="h-1/2 flex items-end justify-center w-full">
                    {titoloHero && <StarWarsTitle titoloHero={titoloHero} />}
                </div>

                {/* Testo Hero occupa l'altra metà dello spazio */}
                <div className="h-1/2 flex items-start justify-center w-full">
                    {testoHero && <StarWarsParagraph testoHero={testoHero} />}
                </div>

            </div>)}
            {/* {testoLista && elencoLista && (<ListaRandom testoLista={testoLista} elencoLista={elencoLista} />)} */}

        </div>
    );
}

export async function generateMetadata() {
    const client = createClient();
    const homepageResponse = await client.getSingle("homepage");

    return {
        title: homepageResponse?.data?.meta_title,
        description: homepageResponse?.data?.meta_description,
        openGraph: {
            title: homepageResponse?.data?.meta_title || undefined,
            description: homepageResponse?.data?.meta_description || undefined,
            images: homepageResponse?.data?.meta_image
                ? [homepageResponse?.data?.meta_image.url]
                : undefined,
        },
    };
}
