import { createClient } from "@/prismicio";
import "./globals.css";
import StarWarsHero from "./components/heroHome/StarWarsHero";
import WorkSchool from "./components/bio/WorkSchool";
import PortfolioHome from "./components/bio/PortfolioHome";
import ContattiHome from "./components/ContattiHome";
import WhoIsPio from "./components/WhoIsPio";

export default async function Page() {
  const client = createClient();
  const homepageResponse = await client.getSingle("homepage");
  const biofalsaResponse = await client.getByType("biofalsa");
  const portfolioPagesResponse = await client.getAllByType("portfolio");

  const whoIsPioSlice = homepageResponse?.data?.slices?.find(
    (slice) => slice.slice_type === "who_is_pio"
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
      {portfolioHome && <PortfolioHome portfolioHome={portfolioHome} portfolioPages={portfolioPagesResponse.results} id="portfolio" />}
      {workSchool && <WorkSchool workSchool={workSchool} id="cv" />}
      {contattiHome && <ContattiHome contattiHome={contattiHome} id="contatti" />}
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