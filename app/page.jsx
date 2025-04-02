import { createClient } from "@/prismicio";
import "./globals.css";
import StarWarsHero from "./components/heroHome/StarWarsHero";
import SezioneBio from "./components/bio/SezioneBio"; // Importa SezioneBio

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

  const cosePiacciono = biofalsaResponse?.results[0]?.data?.slices?.find(
    (slice) => slice.slice_type === "cose_piacciono"
  );

  const coseNonPiacciono = biofalsaResponse?.results[0]?.data?.slices?.find(
    (slice) => slice.slice_type === "cose_non_piacciono"
  );

  const titoloHero = heroHomeSlice?.primary?.titolo_hero;
  const testoHero = heroHomeSlice?.primary?.testo_hero;
  const sfondoHero = heroHomeSlice?.primary?.sfondo_hero?.url;
  const bio = bioSlice?.primary?.bio;
  const fotofalsabuona = bioSlice?.primary?.fotofalsabuona;
  const fotofalsacattiva = bioSlice?.primary?.fotofalsacattiva;
  const testoHonest = barraHonest?.primary?.testohonest;
  const bioVeraText = bioVera?.primary?.bio;
  const fotoBioVera = bioVera?.primary?.foto_buona;

  return (
    <div className="relative">
      {titoloHero && testoHero && sfondoHero && (
        <StarWarsHero titoloHero={titoloHero} testoHero={testoHero} sfondoHero={sfondoHero} />
      )}

      <SezioneBio // Usa il componente SezioneBio
        bioSlice={bioSlice}
        bio={bio}
        fotofalsabuona={fotofalsabuona}
        fotofalsacattiva={fotofalsacattiva}
        testoHonest={testoHonest}
        bioVeraText={bioVeraText}
        fotoBioVera={fotoBioVera}
        cosePiacciono={cosePiacciono}
        coseNonPiacciono={coseNonPiacciono}
      />

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