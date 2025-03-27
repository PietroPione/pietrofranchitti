import { createClient } from "@/prismicio";

export default async function Page() {
  const client = createClient();
  const homepageResponse = await client.getSingle("homepage");

  const testoProvaSlice = homepageResponse?.data?.slices?.find(
    (slice) => slice.slice_type === "testo_prova"
  );

  const testoProva = testoProvaSlice?.primary?.testo_prova;

  return (
    <div>
      {testoProva && <div>{testoProva}</div>}
      <div>Prova</div>
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