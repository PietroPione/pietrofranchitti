import { createClient } from "@/prismicio";
import "./globals.css";
import StarWarsHero from "./components/heroHome/StarWarsHero";
import ListaHero from "./components/heroHome/ListaHero";
import FalsaBio from "./components/FalsaBio";
import BarraHonest from "./components/BarraHonest";
import VeraBio from "./components/VeraBio";
import PanziDori from "./components/PanziDori";

export default async function Page() {
  const client = createClient();
  const homepageResponse = await client.getSingle("homepage");
  const biofalsaResponse = await client.getByType("biofalsa");

  const heroHomeSlice = homepageResponse?.data?.slices?.find(
    (slice) => slice.slice_type === "hero_home"
  );

  const bioSlice = biofalsaResponse?.results[0]?.data?.slices?.find(
    (slice) => slice.slice_type === "bio_falsa"
  );

  const barraHonest = biofalsaResponse?.results[0]?.data?.slices?.find(
    (slice) => slice.slice_type === "barra_honest"
  );

  const bioVera = biofalsaResponse?.results[0]?.data?.slices?.find(
    (slice) => slice.slice_type === "bio_vera"
  );


  const titoloHero = heroHomeSlice?.primary?.titolo_hero;
  const testoHero = heroHomeSlice?.primary?.testo_hero;
  const sfondoHero = heroHomeSlice?.primary?.sfondo_hero?.url;
  const testoLista = heroHomeSlice?.primary?.testo_lista;
  const elencoLista = heroHomeSlice?.primary?.elenco_lista;
  const bio = bioSlice?.primary?.bio;
  const fotofalsabuona = bioSlice?.primary?.fotofalsabuona;
  const fotofalsacattiva = bioSlice?.primary?.fotofalsacattiva;
  const testoHonest = barraHonest?.primary?.testohonest;
  const bioVeraText = bioVera?.primary?.bio;
  const fotoBioVera = bioVera?.primary?.foto_buona;
  const testoGatti = bioVera?.primary?.testo_gatti;


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

      {testoHonest && <BarraHonest testoHonest={testoHonest} />}
      {bioVera && (<VeraBio bioVeraText={bioVeraText} fotoBioVera={fotoBioVera} testoGatti={testoGatti} bioVera={bioVera} />)}
      {/* {testoGatti && (<PanziDori testoGatti={testoGatti} bioVera={bioVera} />)} */}
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