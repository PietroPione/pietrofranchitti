import { createClient } from "@/prismicio";

export default async function Page() {
  const client = createClient();
  const homepageResponse = await client.getSingle("homepage");

  if (homepageResponse && homepageResponse.data && homepageResponse.data.slices) {
    const testoProvaSlice = homepageResponse.data.slices.find(
      (slice) => slice.slice_type === "testo_prova"
    );

    if (testoProvaSlice && testoProvaSlice.primary && testoProvaSlice.primary.testo_prova) {
      const testoProva = testoProvaSlice.primary.testo_prova;
      return <div>{testoProva}</div>;
    } else {
      return <div>Testo prova non trovato.</div>;
    }
  } else {
    return <div>Dati homepage non validi.</div>;
  }
}

export async function generateMetadata() {
  const client = createClient();
  const homepageResponse = await client.getSingle("homepage");

  if (homepageResponse && homepageResponse.data) {
    return {
      title: homepageResponse.data.meta_title,
      description: homepageResponse.data.meta_description,
      openGraph: {
        title: homepageResponse.data.meta_title || undefined,
        description: homepageResponse.data.meta_description || undefined,
        images: homepageResponse.data.meta_image ? [homepageResponse.data.meta_image.url] : undefined,
      },
    };
  } else {
    return {
      title: "Pagina non trovata",
      description: "Pagina non trovata",
    };
  }
}