import { createClient } from "@/prismicio";
import "./globals.css";
import StarWarsHero from "./components/heroHome/StarWarsHero";
import SezioneBio from "./components/bio/SezioneBio";
import WorkSchool from "./components/bio/WorkSchool";
import PortfolioHome from "./components/bio/PortfolioHome";
import ContattiHome from "./components/ContattiHome";

export default async function Page() {
  const client = createClient();
  const homepageResponse = await client.getSingle("homepage");
  const biofalsaResponse = await client.getByType("biofalsa");
  const menuResponse = await client.getByType("menu");
  const portfolioPagesResponse = await client.getAllByType("portfolio"); // Fetch delle pagine portfolio

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

  const portfolioHome = homepageResponse?.data?.slices?.find(
    (slice) => slice.slice_type === "portfolio_home"
  );

  const contattiHome = homepageResponse?.data?.slices?.find(
    (slice) => slice.slice_type === "contatti_h"
  );

  const menuData = menuResponse?.results[0]?.data?.slices?.find(
    (slice) => slice.slice_type === "link_menu"
  );

  // Passa i dati delle pagine portfolio al componente PortfolioHome
  return (
    <div className="relative space-y-20">
      <StarWarsHero />
      {/* <Menu menu={menuData} /> */}
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
        id="who"
      />

      <WorkSchool workSchool={workSchool} id="cv" />

      <PortfolioHome portfolioHome={portfolioHome} portfolioPages={portfolioPagesResponse.results} id="portfolio" />
      <ContattiHome contattiHome={contattiHome} id="contatti" />

      {contattiHome?.primary?.info_sito && <p className="container text-10 text-gray-500 pb-4">{contattiHome?.primary?.info_sito}</p>}
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