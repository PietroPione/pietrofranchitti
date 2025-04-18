import { createClient } from "@/prismicio";
import "./globals.css";
import StarWarsHero from "./components/heroHome/StarWarsHero";
import SezioneBio from "./components/bio/SezioneBio";
import WorkSchool from "./components/bio/WorkSchool";
import PortfolioHome from "./components/bio/PortfolioHome";
import ContattiHome from "./components/ContattiHome";
import WhoIsPio from "./components/WhoIsPio";

export default async function Page() {
  const client = createClient();
  const homepageResponse = await client.getSingle("homepage");
  const biofalsaResponse = await client.getByType("biofalsa");
  const menuResponse = await client.getByType("menu");
  const portfolioPagesResponse = await client.getAllByType("portfolio"); // Fetch delle pagine portfolio

  const heroHomeSlice = homepageResponse?.data?.slices?.find(
    (slice) => slice.slice_type === "hero_home"
  );

  const whoIsPioSlice = homepageResponse?.data?.slices?.find(
    (slice) => slice.slice_type === "who_is_pio"
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


  return (
    <div className="relative space-y-20 md:space-y-40">
      <StarWarsHero />
      {whoIsPioSlice && <WhoIsPio whoIsPioSlice={whoIsPioSlice} />}
      <PortfolioHome portfolioHome={portfolioHome} portfolioPages={portfolioPagesResponse.results} id="portfolio" />
      <WorkSchool workSchool={workSchool} id="cv" />
      {/* <SezioneBio
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
            /> */}
      <ContattiHome contattiHome={contattiHome} id="contatti" />
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