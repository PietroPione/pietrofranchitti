import { createClient } from "@/prismicio";
import "./globals.css";
import StarWarsHero from "./components/heroHome/StarWarsHero";
import ListaHero from "./components/heroHome/ListaHero";

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
      {titoloHero && testoHero && sfondoHero && (
        <StarWarsHero titoloHero={titoloHero} testoHero={testoHero} sfondoHero={sfondoHero} />
      )}

      {testoLista && elencoLista && (
        <ListaHero testoLista={testoLista} elencoLista={elencoLista} />
      )}

      <div className="bg-black h-screen text-white">
        <div className="w-1/2 flex justify-center items-center">
          <ul>
            {elencoLista && elencoLista.map((item, index) => (
              <li
                key={index}
                className="text-xl"
              >
                {item.bullet_point}
              </li>
            ))}
          </ul>
        </div>
      </div>
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