// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type BiofalsaDocumentDataSlicesSlice =
  | CoseNonPiaccionoSlice
  | CosePiaccionoSlice
  | BioVeraSlice
  | BarraHonestSlice
  | BioFalsaSlice;

/**
 * Content for Bio documents
 */
interface BiofalsaDocumentData {
  /**
   * Slice Zone field in *Bio*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: biofalsa.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<BiofalsaDocumentDataSlicesSlice>;
}

/**
 * Bio document from Prismic
 *
 * - **API ID**: `biofalsa`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BiofalsaDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<BiofalsaDocumentData>,
    "biofalsa",
    Lang
  >;

type HomepageDocumentDataSlicesSlice = WorkSchoolSlice | HeroHomeSlice;

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
   * Meta Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

type ImpostazioniDocumentDataSlicesSlice = never;

/**
 * Content for Impostazioni documents
 */
interface ImpostazioniDocumentData {
  /**
   * `slices` field in *Impostazioni*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: impostazioni.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ImpostazioniDocumentDataSlicesSlice>;
}

/**
 * Impostazioni document from Prismic
 *
 * - **API ID**: `impostazioni`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ImpostazioniDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<ImpostazioniDocumentData>,
    "impostazioni",
    Lang
  >;

export type AllDocumentTypes =
  | BiofalsaDocument
  | HomepageDocument
  | ImpostazioniDocument;

/**
 * Primary content in *BarraHonest → Default → Primary*
 */
export interface BarraHonestSliceDefaultPrimary {
  /**
   * TestoHonest field in *BarraHonest → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: barra_honest.default.primary.testohonest
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  testohonest: prismic.KeyTextField;
}

/**
 * Default variation for BarraHonest Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BarraHonestSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<BarraHonestSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *BarraHonest*
 */
type BarraHonestSliceVariation = BarraHonestSliceDefault;

/**
 * BarraHonest Shared Slice
 *
 * - **API ID**: `barra_honest`
 * - **Description**: BarraHonest
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BarraHonestSlice = prismic.SharedSlice<
  "barra_honest",
  BarraHonestSliceVariation
>;

/**
 * Item in *BioFalsa → Default → Primary → Bio*
 */
export interface BioFalsaSliceDefaultPrimaryBioItem {
  /**
   * Frase field in *BioFalsa → Default → Primary → Bio*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: bio_falsa.default.primary.bio[].frase
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  frase: prismic.KeyTextField;

  /**
   * Accento field in *BioFalsa → Default → Primary → Bio*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: bio_falsa.default.primary.bio[].accento
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  accento: prismic.KeyTextField;

  /**
   * Punto dopo field in *BioFalsa → Default → Primary → Bio*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: bio_falsa.default.primary.bio[].punto_dopo
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  punto_dopo: prismic.BooleanField;
}

/**
 * Primary content in *BioFalsa → Default → Primary*
 */
export interface BioFalsaSliceDefaultPrimary {
  /**
   * Bio field in *BioFalsa → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: bio_falsa.default.primary.bio[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  bio: prismic.GroupField<Simplify<BioFalsaSliceDefaultPrimaryBioItem>>;

  /**
   * FotoFalsaBuona field in *BioFalsa → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: bio_falsa.default.primary.fotofalsabuona
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  fotofalsabuona: prismic.ImageField<never>;

  /**
   * FotoFalsaCattiva field in *BioFalsa → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: bio_falsa.default.primary.fotofalsacattiva
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  fotofalsacattiva: prismic.ImageField<never>;
}

/**
 * Default variation for BioFalsa Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BioFalsaSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<BioFalsaSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *BioFalsa*
 */
type BioFalsaSliceVariation = BioFalsaSliceDefault;

/**
 * BioFalsa Shared Slice
 *
 * - **API ID**: `bio_falsa`
 * - **Description**: BioFalsa
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BioFalsaSlice = prismic.SharedSlice<
  "bio_falsa",
  BioFalsaSliceVariation
>;

/**
 * Item in *BioVera → Default → Primary → Bio*
 */
export interface BioVeraSliceDefaultPrimaryBioItem {
  /**
   * Frase field in *BioVera → Default → Primary → Bio*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: bio_vera.default.primary.bio[].frase
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  frase: prismic.KeyTextField;

  /**
   * Accento field in *BioVera → Default → Primary → Bio*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: bio_vera.default.primary.bio[].accento
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  accento: prismic.KeyTextField;

  /**
   * Punto dopo field in *BioVera → Default → Primary → Bio*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: bio_vera.default.primary.bio[].punto_dopo
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  punto_dopo: prismic.BooleanField;
}

/**
 * Primary content in *BioVera → Default → Primary*
 */
export interface BioVeraSliceDefaultPrimary {
  /**
   * Bio field in *BioVera → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: bio_vera.default.primary.bio[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  bio: prismic.GroupField<Simplify<BioVeraSliceDefaultPrimaryBioItem>>;

  /**
   * Foto Buona field in *BioVera → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: bio_vera.default.primary.foto_buona
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  foto_buona: prismic.ImageField<never>;

  /**
   * Foto gatti 1 field in *BioVera → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: bio_vera.default.primary.foto_gatti_1
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  foto_gatti_1: prismic.ImageField<never>;

  /**
   * Foto gatti 2 field in *BioVera → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: bio_vera.default.primary.foto_gatti_2
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  foto_gatti_2: prismic.ImageField<never>;

  /**
   * Foto gatti 3 field in *BioVera → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: bio_vera.default.primary.foto_gatti_3
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  foto_gatti_3: prismic.ImageField<never>;

  /**
   * Foto gatti 4 field in *BioVera → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: bio_vera.default.primary.foto_gatti_4
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  foto_gatti_4: prismic.ImageField<never>;

  /**
   * Testo gatti field in *BioVera → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: bio_vera.default.primary.testo_gatti
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  testo_gatti: prismic.KeyTextField;
}

/**
 * Default variation for BioVera Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BioVeraSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<BioVeraSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *BioVera*
 */
type BioVeraSliceVariation = BioVeraSliceDefault;

/**
 * BioVera Shared Slice
 *
 * - **API ID**: `bio_vera`
 * - **Description**: BioVera
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BioVeraSlice = prismic.SharedSlice<
  "bio_vera",
  BioVeraSliceVariation
>;

/**
 * Item in *CoseNonPiacciono → Default → Primary → Cosa*
 */
export interface CoseNonPiaccionoSliceDefaultPrimaryCosaItem {
  /**
   * Nome cosa field in *CoseNonPiacciono → Default → Primary → Cosa*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: cose_non_piacciono.default.primary.cosa[].nome_cosa
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  nome_cosa: prismic.KeyTextField;

  /**
   * Gif cosa field in *CoseNonPiacciono → Default → Primary → Cosa*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: cose_non_piacciono.default.primary.cosa[].gif_cosa
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  gif_cosa: prismic.ImageField<never>;
}

/**
 * Primary content in *CoseNonPiacciono → Default → Primary*
 */
export interface CoseNonPiaccionoSliceDefaultPrimary {
  /**
   * Titolo cose non piacciono field in *CoseNonPiacciono → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: cose_non_piacciono.default.primary.titolo_cose_non_piacciono
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  titolo_cose_non_piacciono: prismic.KeyTextField;

  /**
   * Cosa field in *CoseNonPiacciono → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: cose_non_piacciono.default.primary.cosa[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  cosa: prismic.GroupField<
    Simplify<CoseNonPiaccionoSliceDefaultPrimaryCosaItem>
  >;
}

/**
 * Default variation for CoseNonPiacciono Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CoseNonPiaccionoSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CoseNonPiaccionoSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *CoseNonPiacciono*
 */
type CoseNonPiaccionoSliceVariation = CoseNonPiaccionoSliceDefault;

/**
 * CoseNonPiacciono Shared Slice
 *
 * - **API ID**: `cose_non_piacciono`
 * - **Description**: CoseNonPiacciono
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CoseNonPiaccionoSlice = prismic.SharedSlice<
  "cose_non_piacciono",
  CoseNonPiaccionoSliceVariation
>;

/**
 * Item in *CosePiacciono → Default → Primary → Cosa*
 */
export interface CosePiaccionoSliceDefaultPrimaryCosaItem {
  /**
   * Nome cosa field in *CosePiacciono → Default → Primary → Cosa*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: cose_piacciono.default.primary.cosa[].nome_cosa
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  nome_cosa: prismic.KeyTextField;

  /**
   * Gif cosa field in *CosePiacciono → Default → Primary → Cosa*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: cose_piacciono.default.primary.cosa[].gif_cosa
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  gif_cosa: prismic.ImageField<never>;
}

/**
 * Primary content in *CosePiacciono → Default → Primary*
 */
export interface CosePiaccionoSliceDefaultPrimary {
  /**
   * Titolo cose piacciono field in *CosePiacciono → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: cose_piacciono.default.primary.titolo_cose_piacciono
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  titolo_cose_piacciono: prismic.KeyTextField;

  /**
   * Cosa field in *CosePiacciono → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: cose_piacciono.default.primary.cosa[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  cosa: prismic.GroupField<Simplify<CosePiaccionoSliceDefaultPrimaryCosaItem>>;
}

/**
 * Default variation for CosePiacciono Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CosePiaccionoSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CosePiaccionoSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *CosePiacciono*
 */
type CosePiaccionoSliceVariation = CosePiaccionoSliceDefault;

/**
 * CosePiacciono Shared Slice
 *
 * - **API ID**: `cose_piacciono`
 * - **Description**: CosePiacciono
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CosePiaccionoSlice = prismic.SharedSlice<
  "cose_piacciono",
  CosePiaccionoSliceVariation
>;

/**
 * Item in *HeroHome → Default → Primary → Elenco lista*
 */
export interface HeroHomeSliceDefaultPrimaryElencoListaItem {
  /**
   * Bullet point field in *HeroHome → Default → Primary → Elenco lista*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_home.default.primary.elenco_lista[].bullet_point
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  bullet_point: prismic.KeyTextField;
}

/**
 * Primary content in *HeroHome → Default → Primary*
 */
export interface HeroHomeSliceDefaultPrimary {
  /**
   * Titolo Hero field in *HeroHome → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_home.default.primary.titolo_hero
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  titolo_hero: prismic.RichTextField;

  /**
   * Testo hero field in *HeroHome → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_home.default.primary.testo_hero
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  testo_hero: prismic.RichTextField;

  /**
   * Sfondo Hero field in *HeroHome → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_home.default.primary.sfondo_hero
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  sfondo_hero: prismic.ImageField<never>;

  /**
   * Gfi stella field in *HeroHome → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_home.default.primary.gfi_stella
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  gfi_stella: prismic.ImageField<never>;

  /**
   * Testo lista field in *HeroHome → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_home.default.primary.testo_lista
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  testo_lista: prismic.KeyTextField;

  /**
   * Elenco lista field in *HeroHome → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_home.default.primary.elenco_lista[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  elenco_lista: prismic.GroupField<
    Simplify<HeroHomeSliceDefaultPrimaryElencoListaItem>
  >;
}

/**
 * Default variation for HeroHome Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroHomeSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroHomeSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *HeroHome*
 */
type HeroHomeSliceVariation = HeroHomeSliceDefault;

/**
 * HeroHome Shared Slice
 *
 * - **API ID**: `hero_home`
 * - **Description**: HeroHome
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroHomeSlice = prismic.SharedSlice<
  "hero_home",
  HeroHomeSliceVariation
>;

/**
 * Item in *WorkSchool → Default → Primary → Works*
 */
export interface WorkSchoolSliceDefaultPrimaryWorksItem {
  /**
   * Work position field in *WorkSchool → Default → Primary → Works*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: work_school.default.primary.works[].work_position
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  work_position: prismic.KeyTextField;

  /**
   * Dove field in *WorkSchool → Default → Primary → Works*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: work_school.default.primary.works[].dove
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  dove: prismic.KeyTextField;

  /**
   * Periodo field in *WorkSchool → Default → Primary → Works*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: work_school.default.primary.works[].periodo
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  periodo: prismic.KeyTextField;

  /**
   * Attuale field in *WorkSchool → Default → Primary → Works*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: work_school.default.primary.works[].attuale
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  attuale: prismic.BooleanField;
}

/**
 * Item in *WorkSchool → Default → Primary → Studies*
 */
export interface WorkSchoolSliceDefaultPrimaryStudiesItem {
  /**
   * Nome corso field in *WorkSchool → Default → Primary → Studies*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: work_school.default.primary.studies[].nome_corso
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  nome_corso: prismic.KeyTextField;

  /**
   * Dove field in *WorkSchool → Default → Primary → Studies*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: work_school.default.primary.studies[].dove
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  dove: prismic.KeyTextField;

  /**
   * Periodo field in *WorkSchool → Default → Primary → Studies*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: work_school.default.primary.studies[].periodo
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  periodo: prismic.KeyTextField;
}

/**
 * Item in *WorkSchool → Default → Primary → Certificazioni*
 */
export interface WorkSchoolSliceDefaultPrimaryCertificazioniItem {
  /**
   * Nome certificazione field in *WorkSchool → Default → Primary → Certificazioni*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: work_school.default.primary.certificazioni[].nome_certificazione
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  nome_certificazione: prismic.KeyTextField;

  /**
   * Dove field in *WorkSchool → Default → Primary → Certificazioni*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: work_school.default.primary.certificazioni[].dove
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  dove: prismic.KeyTextField;

  /**
   * Quando field in *WorkSchool → Default → Primary → Certificazioni*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: work_school.default.primary.certificazioni[].quando
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  quando: prismic.KeyTextField;
}

/**
 * Primary content in *WorkSchool → Default → Primary*
 */
export interface WorkSchoolSliceDefaultPrimary {
  /**
   * Title field in *WorkSchool → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: work_school.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Work title field in *WorkSchool → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: work_school.default.primary.work_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  work_title: prismic.KeyTextField;

  /**
   * Work copy field in *WorkSchool → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: work_school.default.primary.work_copy
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  work_copy: prismic.KeyTextField;

  /**
   * Works field in *WorkSchool → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: work_school.default.primary.works[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  works: prismic.GroupField<Simplify<WorkSchoolSliceDefaultPrimaryWorksItem>>;

  /**
   * Study title field in *WorkSchool → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: work_school.default.primary.study_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  study_title: prismic.KeyTextField;

  /**
   * Study copy field in *WorkSchool → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: work_school.default.primary.study_copy
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  study_copy: prismic.KeyTextField;

  /**
   * Studies field in *WorkSchool → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: work_school.default.primary.studies[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  studies: prismic.GroupField<
    Simplify<WorkSchoolSliceDefaultPrimaryStudiesItem>
  >;

  /**
   * Titolo Certificazioni field in *WorkSchool → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: work_school.default.primary.titolo_certificazioni
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  titolo_certificazioni: prismic.KeyTextField;

  /**
   * Copy certificazioni field in *WorkSchool → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: work_school.default.primary.copy_certificazioni
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  copy_certificazioni: prismic.KeyTextField;

  /**
   * Certificazioni field in *WorkSchool → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: work_school.default.primary.certificazioni[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  certificazioni: prismic.GroupField<
    Simplify<WorkSchoolSliceDefaultPrimaryCertificazioniItem>
  >;
}

/**
 * Default variation for WorkSchool Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type WorkSchoolSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<WorkSchoolSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *WorkSchool*
 */
type WorkSchoolSliceVariation = WorkSchoolSliceDefault;

/**
 * WorkSchool Shared Slice
 *
 * - **API ID**: `work_school`
 * - **Description**: WorkSchool
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type WorkSchoolSlice = prismic.SharedSlice<
  "work_school",
  WorkSchoolSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      BiofalsaDocument,
      BiofalsaDocumentData,
      BiofalsaDocumentDataSlicesSlice,
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      ImpostazioniDocument,
      ImpostazioniDocumentData,
      ImpostazioniDocumentDataSlicesSlice,
      AllDocumentTypes,
      BarraHonestSlice,
      BarraHonestSliceDefaultPrimary,
      BarraHonestSliceVariation,
      BarraHonestSliceDefault,
      BioFalsaSlice,
      BioFalsaSliceDefaultPrimaryBioItem,
      BioFalsaSliceDefaultPrimary,
      BioFalsaSliceVariation,
      BioFalsaSliceDefault,
      BioVeraSlice,
      BioVeraSliceDefaultPrimaryBioItem,
      BioVeraSliceDefaultPrimary,
      BioVeraSliceVariation,
      BioVeraSliceDefault,
      CoseNonPiaccionoSlice,
      CoseNonPiaccionoSliceDefaultPrimaryCosaItem,
      CoseNonPiaccionoSliceDefaultPrimary,
      CoseNonPiaccionoSliceVariation,
      CoseNonPiaccionoSliceDefault,
      CosePiaccionoSlice,
      CosePiaccionoSliceDefaultPrimaryCosaItem,
      CosePiaccionoSliceDefaultPrimary,
      CosePiaccionoSliceVariation,
      CosePiaccionoSliceDefault,
      HeroHomeSlice,
      HeroHomeSliceDefaultPrimaryElencoListaItem,
      HeroHomeSliceDefaultPrimary,
      HeroHomeSliceVariation,
      HeroHomeSliceDefault,
      WorkSchoolSlice,
      WorkSchoolSliceDefaultPrimaryWorksItem,
      WorkSchoolSliceDefaultPrimaryStudiesItem,
      WorkSchoolSliceDefaultPrimaryCertificazioniItem,
      WorkSchoolSliceDefaultPrimary,
      WorkSchoolSliceVariation,
      WorkSchoolSliceDefault,
    };
  }
}
