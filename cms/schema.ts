import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Post
 *
 *
 */
export interface Post extends SanityDocument {
  _type: "post";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * SEO Meta Description — `string`
   *
   *
   */
  meta_description?: string;

  /**
   * SEO Meta Keywords — `string`
   *
   *
   */
  meta_keywords?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Author — `reference`
   *
   *
   */
  author?: SanityReference<Author>;

  /**
   * Main image — `image`
   *
   *
   */
  mainImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Categories — `array`
   *
   *
   */
  categories?: Array<SanityKeyedReference<Category>>;

  /**
   * Published at — `datetime`
   *
   *
   */
  publishedAt?: string;

  /**
   * Body — `markdown`
   *
   *
   */
  body?: Markdown;
}

/**
 * Author
 *
 *
 */
export interface Author extends SanityDocument {
  _type: "author";

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Bio — `array`
   *
   *
   */
  bio?: Array<SanityKeyed<SanityBlock>>;
}

/**
 * Category
 *
 *
 */
export interface Category extends SanityDocument {
  _type: "category";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Description — `text`
   *
   *
   */
  description?: string;
}

/**
 * Course
 *
 *
 */
export interface Course extends SanityDocument {
  _type: "course";

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Blurb — `string`
   *
   *
   */
  blurb?: string;

  /**
   * Level — `string`
   *
   *
   */
  level?: string;

  /**
   * Thumbnail URL — `string`
   *
   *
   */
  thumbnail_url?: string;

  /**
   * Description — `markdown`
   *
   *
   */
  description?: Markdown;

  /**
   * Price — `number`
   *
   *
   */
  price?: number;

  /**
   * Stripe Test SKU — `string`
   *
   *
   */
  stripe_test_sku?: string;

  /**
   * Stripe Prod SKU — `string`
   *
   *
   */
  stripe_prod_sku?: string;

  /**
   * Theme Color — `string`
   *
   *
   */
  theme_color?: string;

  /**
   * Theme Accent Color — `string`
   *
   *
   */
  theme_accent_color?: string;

  /**
   * Lessons — `array`
   *
   *
   */
  lessons?: Array<SanityKeyed<Lesson>>;

  /**
   * Modules — `array`
   *
   *
   */
  modules?: Array<SanityKeyed<Module>>;

  /**
   * Sequence Number — `number`
   *
   *
   */
  seq_number?: number;

  /**
   * Published at — `datetime`
   *
   *
   */
  publishedAt?: string;
}

/**
 * Module
 *
 *
 */
export interface Module extends SanityDocument {
  _type: "module";

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Subtitle — `string`
   *
   *
   */
  subtitle?: string;

  /**
   * Thumbnail URL — `string`
   *
   *
   */
  thumbnail_url?: string;

  /**
   * Description — `block`
   *
   *
   */
  description?: SanityBlock;

  /**
   * Sequence Number — `number`
   *
   *
   */
  seq_number?: number;

  /**
   * Published at — `datetime`
   *
   *
   */
  publishedAt?: string;

  /**
   * Lessons — `array`
   *
   *
   */
  lessons?: Array<SanityKeyed<Lesson>>;
}

/**
 * Lesson
 *
 *
 */
export interface Lesson extends SanityDocument {
  _type: "lesson";

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Subtitle — `string`
   *
   *
   */
  subtitle?: string;

  /**
   * Video ID — `string`
   *
   *
   */
  video_id?: string;

  /**
   * Show Notes — `markdown`
   *
   *
   */
  show_notes?: Markdown;

  /**
   * Is Public — `boolean`
   *
   *
   */
  public?: boolean;

  /**
   * Duration (Minutes part) — `number`
   *
   *
   */
  duration_mins?: number;

  /**
   * Duration (Seconds part) — `number`
   *
   *
   */
  duration_secs?: number;

  /**
   * Thumbnail URL — `string`
   *
   *
   */
  thumbnail_url?: string;

  /**
   * Sequence Number — `number`
   *
   *
   */
  seq_number?: number;

  /**
   * Published at — `datetime`
   *
   *
   */
  publishedAt?: string;
}

/**
 * Page
 *
 *
 */
export interface Page extends SanityDocument {
  _type: "page";

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Body — `blockContent`
   *
   *
   */
  body?: BlockContent;

  /**
   * Order — `number`
   *
   *
   */
  order?: number;
}

export type BlockContent = Array<
  | SanityKeyed<SanityBlock>
  | SanityKeyed<{
      _type: "image";
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    }>
  | SanityKeyed<Code>
>;

export type Documents =
  | Post
  | Author
  | Category
  | Course
  | Module
  | Lesson
  | Page;

/**
 * This interface is a stub. It was referenced in your sanity schema but
 * the definition was not actually found. Future versions of
 * sanity-codegen will let you type this explicity.
 */
type Markdown = any;

/**
 * This interface is a stub. It was referenced in your sanity schema but
 * the definition was not actually found. Future versions of
 * sanity-codegen will let you type this explicity.
 */
type Code = any;
