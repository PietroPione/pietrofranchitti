import { createClient } from "@/prismicio";
import "./globals.css";
import StarWarsHero from "./components/heroHome/StarWarsHero";
import SezioneBio from "./components/bio/SezioneBio"; // Importa SezioneBio
import WorkSchool from "./components/WorkSchool";


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

  const workSchool = homepageResponse?.data?.slices?.find(
    (slice) => slice.slice_type === "work_school"
  );


  const bio = bioSlice?.primary?.bio;
  const fotofalsabuona = bioSlice?.primary?.fotofalsabuona;
  const fotofalsacattiva = bioSlice?.primary?.fotofalsacattiva;
  const testoHonest = barraHonest?.primary?.testohonest;
  const bioVeraText = bioVera?.primary?.bio;
  const fotoBioVera = bioVera?.primary?.foto_buona;


  return (
    <div className="relative">

      <StarWarsHero />


      <SezioneBio
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

      <WorkSchool workSchool={workSchool} />

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