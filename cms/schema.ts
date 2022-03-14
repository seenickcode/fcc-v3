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
   * Body — `block`
   *
   *
   */
  body?: SanityBlock;
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
   * Description — `block`
   *
   *
   */
  description?: SanityBlock;

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
   * Show Notes — `block`
   *
   *
   */
  show_notes?: SanityBlock;

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
   * Text — `array`
   *
   *
   */
  text?: Array<SanityKeyed<SanityBlock>>;
}

export type BlockContent = Array<
  | SanityKeyed<SanityBlock>
  | SanityKeyed<{
      _type: "image";
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    }>
>;

export type Documents =
  | Post
  | Author
  | Category
  | Course
  | Module
  | Lesson
  | Page;
