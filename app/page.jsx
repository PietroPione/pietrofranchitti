import { createClient } from "@/prismicio";
import "./globals.css";
import StarWarsHero from "./components/heroHome/StarWarsHero";
import ListaHero from "./components/heroHome/ListaHero";
import FalsaBio from "./components/FalsaBio";

export default async function Page() {
  const client = createClient();
  const homepageResponse = await client.getSingle("homepage");
  const biofalsaResponse = await client.getByType("biofalsa"); // Recupera i dati da "biofalsa"

  const heroHomeSlice = homepageResponse?.data?.slices?.find(
    (slice) => slice.slice_type === "hero_home"
  );

  const bioSlice = biofalsaResponse?.results[0]?.data?.slices?.find( // Modifica per accedere ai dati di biofalsa
    (slice) => slice.slice_type === "bio_falsa"
  );

  const titoloHero = heroHomeSlice?.primary?.titolo_hero;
  const testoHero = heroHomeSlice?.primary?.testo_hero;
  const sfondoHero = heroHomeSlice?.primary?.sfondo_hero?.url;
  const testoLista = heroHomeSlice?.primary?.testo_lista;
  const elencoLista = heroHomeSlice?.primary?.elenco_lista;
  const bio = bioSlice?.primary?.bio;
  const fotofalsabuona = bioSlice?.primary?.fotofalsabuona;
  const fotofalsacattiva = bioSlice?.primary?.fotofalsacattiva;

  return (
    <div className="relative">
      {titoloHero && testoHero && sfondoHero && (
        <StarWarsHero titoloHero={titoloHero} testoHero={testoHero} sfondoHero={sfondoHero} />
      )}

      {/* {testoLista && elencoLista && (
        <ListaHero testoLista={testoLista} elencoLista={elencoLista} />
      )} */}

      {bioSlice && bio && fotofalsabuona && (
        <FalsaBio bio={bio} fotofalsabuona={fotofalsabuona} fotofalsacattiva={fotofalsacattiva} />
      )}

      <div className="bg-black h-[25vh] text-center text-75 font-bold text-white">
        Let's be honest
      </div>
      <div className="h-screen"></div>
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