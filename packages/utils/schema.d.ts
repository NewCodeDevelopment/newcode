export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    Date: any;
    DateTime: any;
};

export type Block = {
    __typename?: "Block";
    _key?: Maybe<Scalars["String"]>;
    _type?: Maybe<Scalars["String"]>;
    children?: Maybe<Array<Maybe<Span>>>;
    list?: Maybe<Scalars["String"]>;
    style?: Maybe<Scalars["String"]>;
};

export type BlockOrImage = Block | Image;

export type BooleanFilter = {
    /** Checks if the value is equal to the given input. */
    eq?: InputMaybe<Scalars["Boolean"]>;
    /** Checks if the value is not equal to the given input. */
    neq?: InputMaybe<Scalars["Boolean"]>;
};

export type Case = Document & {
    __typename?: "Case";
    /** Date the document was created */
    _createdAt?: Maybe<Scalars["DateTime"]>;
    /** Document ID */
    _id?: Maybe<Scalars["ID"]>;
    _key?: Maybe<Scalars["String"]>;
    /** Current document revision */
    _rev?: Maybe<Scalars["String"]>;
    /** Document type */
    _type?: Maybe<Scalars["String"]>;
    /** Date the document was last modified */
    _updatedAt?: Maybe<Scalars["DateTime"]>;
    bannerImage?: Maybe<Image>;
    bannerImageAlt?: Maybe<Scalars["String"]>;
    client?: Maybe<Scalars["String"]>;
    images?: Maybe<Array<Maybe<Image>>>;
    main?: Maybe<Scalars["String"]>;
    problem?: Maybe<Scalars["String"]>;
    productUrl?: Maybe<Scalars["String"]>;
    sector?: Maybe<Sector>;
    service?: Maybe<Service>;
    short?: Maybe<Scalars["String"]>;
    slug?: Maybe<Slug>;
    solution?: Maybe<Scalars["String"]>;
    title?: Maybe<Scalars["String"]>;
    type?: Maybe<Scalars["String"]>;
    year?: Maybe<Scalars["Float"]>;
};

export type CaseFilter = {
    /** Apply filters on document level */
    _?: InputMaybe<Sanity_DocumentFilter>;
    _createdAt?: InputMaybe<DatetimeFilter>;
    _id?: InputMaybe<IdFilter>;
    _key?: InputMaybe<StringFilter>;
    _rev?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    _updatedAt?: InputMaybe<DatetimeFilter>;
    bannerImage?: InputMaybe<ImageFilter>;
    bannerImageAlt?: InputMaybe<StringFilter>;
    client?: InputMaybe<StringFilter>;
    main?: InputMaybe<StringFilter>;
    problem?: InputMaybe<StringFilter>;
    productUrl?: InputMaybe<StringFilter>;
    sector?: InputMaybe<SectorFilter>;
    service?: InputMaybe<ServiceFilter>;
    short?: InputMaybe<StringFilter>;
    slug?: InputMaybe<SlugFilter>;
    solution?: InputMaybe<StringFilter>;
    title?: InputMaybe<StringFilter>;
    type?: InputMaybe<StringFilter>;
    year?: InputMaybe<FloatFilter>;
};

export type CaseSorting = {
    _createdAt?: InputMaybe<SortOrder>;
    _id?: InputMaybe<SortOrder>;
    _key?: InputMaybe<SortOrder>;
    _rev?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
    _updatedAt?: InputMaybe<SortOrder>;
    bannerImage?: InputMaybe<ImageSorting>;
    bannerImageAlt?: InputMaybe<SortOrder>;
    client?: InputMaybe<SortOrder>;
    main?: InputMaybe<SortOrder>;
    problem?: InputMaybe<SortOrder>;
    productUrl?: InputMaybe<SortOrder>;
    short?: InputMaybe<SortOrder>;
    slug?: InputMaybe<SlugSorting>;
    solution?: InputMaybe<SortOrder>;
    title?: InputMaybe<SortOrder>;
    type?: InputMaybe<SortOrder>;
    year?: InputMaybe<SortOrder>;
};

export type CrossDatasetReference = {
    __typename?: "CrossDatasetReference";
    _dataset?: Maybe<Scalars["String"]>;
    _key?: Maybe<Scalars["String"]>;
    _projectId?: Maybe<Scalars["String"]>;
    _ref?: Maybe<Scalars["String"]>;
    _type?: Maybe<Scalars["String"]>;
    _weak?: Maybe<Scalars["Boolean"]>;
};

export type CrossDatasetReferenceFilter = {
    _dataset?: InputMaybe<StringFilter>;
    _key?: InputMaybe<StringFilter>;
    _projectId?: InputMaybe<StringFilter>;
    _ref?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    _weak?: InputMaybe<BooleanFilter>;
};

export type CrossDatasetReferenceSorting = {
    _dataset?: InputMaybe<SortOrder>;
    _key?: InputMaybe<SortOrder>;
    _projectId?: InputMaybe<SortOrder>;
    _ref?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
    _weak?: InputMaybe<SortOrder>;
};

export type DateFilter = {
    /** Checks if the value is equal to the given input. */
    eq?: InputMaybe<Scalars["Date"]>;
    /** Checks if the value is greater than the given input. */
    gt?: InputMaybe<Scalars["Date"]>;
    /** Checks if the value is greater than or equal to the given input. */
    gte?: InputMaybe<Scalars["Date"]>;
    /** Checks if the value is lesser than the given input. */
    lt?: InputMaybe<Scalars["Date"]>;
    /** Checks if the value is lesser than or equal to the given input. */
    lte?: InputMaybe<Scalars["Date"]>;
    /** Checks if the value is not equal to the given input. */
    neq?: InputMaybe<Scalars["Date"]>;
};

export type DatetimeFilter = {
    /** Checks if the value is equal to the given input. */
    eq?: InputMaybe<Scalars["DateTime"]>;
    /** Checks if the value is greater than the given input. */
    gt?: InputMaybe<Scalars["DateTime"]>;
    /** Checks if the value is greater than or equal to the given input. */
    gte?: InputMaybe<Scalars["DateTime"]>;
    /** Checks if the value is lesser than the given input. */
    lt?: InputMaybe<Scalars["DateTime"]>;
    /** Checks if the value is lesser than or equal to the given input. */
    lte?: InputMaybe<Scalars["DateTime"]>;
    /** Checks if the value is not equal to the given input. */
    neq?: InputMaybe<Scalars["DateTime"]>;
};

/** A Sanity document */
export type Document = {
    /** Date the document was created */
    _createdAt?: Maybe<Scalars["DateTime"]>;
    /** Document ID */
    _id?: Maybe<Scalars["ID"]>;
    /** Current document revision */
    _rev?: Maybe<Scalars["String"]>;
    /** Document type */
    _type?: Maybe<Scalars["String"]>;
    /** Date the document was last modified */
    _updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type DocumentFilter = {
    /** Apply filters on document level */
    _?: InputMaybe<Sanity_DocumentFilter>;
    _createdAt?: InputMaybe<DatetimeFilter>;
    _id?: InputMaybe<IdFilter>;
    _rev?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    _updatedAt?: InputMaybe<DatetimeFilter>;
};

export type DocumentSorting = {
    _createdAt?: InputMaybe<SortOrder>;
    _id?: InputMaybe<SortOrder>;
    _rev?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
    _updatedAt?: InputMaybe<SortOrder>;
};

export type File = {
    __typename?: "File";
    _key?: Maybe<Scalars["String"]>;
    _type?: Maybe<Scalars["String"]>;
    asset?: Maybe<SanityFileAsset>;
};

export type FileFilter = {
    _key?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    asset?: InputMaybe<SanityFileAssetFilter>;
};

export type FileSorting = {
    _key?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
};

export type FloatFilter = {
    /** Checks if the value is equal to the given input. */
    eq?: InputMaybe<Scalars["Float"]>;
    /** Checks if the value is greater than the given input. */
    gt?: InputMaybe<Scalars["Float"]>;
    /** Checks if the value is greater than or equal to the given input. */
    gte?: InputMaybe<Scalars["Float"]>;
    /** Checks if the value is lesser than the given input. */
    lt?: InputMaybe<Scalars["Float"]>;
    /** Checks if the value is lesser than or equal to the given input. */
    lte?: InputMaybe<Scalars["Float"]>;
    /** Checks if the value is not equal to the given input. */
    neq?: InputMaybe<Scalars["Float"]>;
};

export type Geopoint = {
    __typename?: "Geopoint";
    _key?: Maybe<Scalars["String"]>;
    _type?: Maybe<Scalars["String"]>;
    alt?: Maybe<Scalars["Float"]>;
    lat?: Maybe<Scalars["Float"]>;
    lng?: Maybe<Scalars["Float"]>;
};

export type GeopointFilter = {
    _key?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    alt?: InputMaybe<FloatFilter>;
    lat?: InputMaybe<FloatFilter>;
    lng?: InputMaybe<FloatFilter>;
};

export type GeopointSorting = {
    _key?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
    alt?: InputMaybe<SortOrder>;
    lat?: InputMaybe<SortOrder>;
    lng?: InputMaybe<SortOrder>;
};

export type IdFilter = {
    /** Checks if the value is equal to the given input. */
    eq?: InputMaybe<Scalars["ID"]>;
    in?: InputMaybe<Array<Scalars["ID"]>>;
    /** Checks if the value matches the given word/words. */
    matches?: InputMaybe<Scalars["ID"]>;
    /** Checks if the value is not equal to the given input. */
    neq?: InputMaybe<Scalars["ID"]>;
    nin?: InputMaybe<Array<Scalars["ID"]>>;
};

export type Image = {
    __typename?: "Image";
    _key?: Maybe<Scalars["String"]>;
    _type?: Maybe<Scalars["String"]>;
    asset?: Maybe<SanityImageAsset>;
    crop?: Maybe<SanityImageCrop>;
    hotspot?: Maybe<SanityImageHotspot>;
};

export type ImageFilter = {
    _key?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    asset?: InputMaybe<SanityImageAssetFilter>;
    crop?: InputMaybe<SanityImageCropFilter>;
    hotspot?: InputMaybe<SanityImageHotspotFilter>;
};

export type ImageSorting = {
    _key?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
    crop?: InputMaybe<SanityImageCropSorting>;
    hotspot?: InputMaybe<SanityImageHotspotSorting>;
};

export type IntFilter = {
    /** Checks if the value is equal to the given input. */
    eq?: InputMaybe<Scalars["Int"]>;
    /** Checks if the value is greater than the given input. */
    gt?: InputMaybe<Scalars["Int"]>;
    /** Checks if the value is greater than or equal to the given input. */
    gte?: InputMaybe<Scalars["Int"]>;
    /** Checks if the value is lesser than the given input. */
    lt?: InputMaybe<Scalars["Int"]>;
    /** Checks if the value is lesser than or equal to the given input. */
    lte?: InputMaybe<Scalars["Int"]>;
    /** Checks if the value is not equal to the given input. */
    neq?: InputMaybe<Scalars["Int"]>;
};

export type RootQuery = {
    __typename?: "RootQuery";
    Case?: Maybe<Case>;
    Document?: Maybe<Document>;
    SanityFileAsset?: Maybe<SanityFileAsset>;
    SanityImageAsset?: Maybe<SanityImageAsset>;
    Sector?: Maybe<Sector>;
    Service?: Maybe<Service>;
    ServiceGroup?: Maybe<ServiceGroup>;
    Testimonial?: Maybe<Testimonial>;
    allCase: Array<Case>;
    allDocument: Array<Document>;
    allSanityFileAsset: Array<SanityFileAsset>;
    allSanityImageAsset: Array<SanityImageAsset>;
    allSector: Array<Sector>;
    allService: Array<Service>;
    allServiceGroup: Array<ServiceGroup>;
    allTestimonial: Array<Testimonial>;
};

export type RootQueryCaseArgs = {
    id: Scalars["ID"];
};

export type RootQueryDocumentArgs = {
    id: Scalars["ID"];
};

export type RootQuerySanityFileAssetArgs = {
    id: Scalars["ID"];
};

export type RootQuerySanityImageAssetArgs = {
    id: Scalars["ID"];
};

export type RootQuerySectorArgs = {
    id: Scalars["ID"];
};

export type RootQueryServiceArgs = {
    id: Scalars["ID"];
};

export type RootQueryServiceGroupArgs = {
    id: Scalars["ID"];
};

export type RootQueryTestimonialArgs = {
    id: Scalars["ID"];
};

export type RootQueryAllCaseArgs = {
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    sort?: InputMaybe<Array<CaseSorting>>;
    where?: InputMaybe<CaseFilter>;
};

export type RootQueryAllDocumentArgs = {
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    sort?: InputMaybe<Array<DocumentSorting>>;
    where?: InputMaybe<DocumentFilter>;
};

export type RootQueryAllSanityFileAssetArgs = {
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    sort?: InputMaybe<Array<SanityFileAssetSorting>>;
    where?: InputMaybe<SanityFileAssetFilter>;
};

export type RootQueryAllSanityImageAssetArgs = {
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    sort?: InputMaybe<Array<SanityImageAssetSorting>>;
    where?: InputMaybe<SanityImageAssetFilter>;
};

export type RootQueryAllSectorArgs = {
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    sort?: InputMaybe<Array<SectorSorting>>;
    where?: InputMaybe<SectorFilter>;
};

export type RootQueryAllServiceArgs = {
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    sort?: InputMaybe<Array<ServiceSorting>>;
    where?: InputMaybe<ServiceFilter>;
};

export type RootQueryAllServiceGroupArgs = {
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    sort?: InputMaybe<Array<ServiceGroupSorting>>;
    where?: InputMaybe<ServiceGroupFilter>;
};

export type RootQueryAllTestimonialArgs = {
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    sort?: InputMaybe<Array<TestimonialSorting>>;
    where?: InputMaybe<TestimonialFilter>;
};

export type SanityAssetSourceData = {
    __typename?: "SanityAssetSourceData";
    _key?: Maybe<Scalars["String"]>;
    _type?: Maybe<Scalars["String"]>;
    /** The unique ID for the asset within the originating source so you can programatically find back to it */
    id?: Maybe<Scalars["String"]>;
    /** A canonical name for the source this asset is originating from */
    name?: Maybe<Scalars["String"]>;
    /** A URL to find more information about this asset in the originating source */
    url?: Maybe<Scalars["String"]>;
};

export type SanityAssetSourceDataFilter = {
    _key?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    id?: InputMaybe<StringFilter>;
    name?: InputMaybe<StringFilter>;
    url?: InputMaybe<StringFilter>;
};

export type SanityAssetSourceDataSorting = {
    _key?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    name?: InputMaybe<SortOrder>;
    url?: InputMaybe<SortOrder>;
};

export type SanityFileAsset = Document & {
    __typename?: "SanityFileAsset";
    /** Date the document was created */
    _createdAt?: Maybe<Scalars["DateTime"]>;
    /** Document ID */
    _id?: Maybe<Scalars["ID"]>;
    _key?: Maybe<Scalars["String"]>;
    /** Current document revision */
    _rev?: Maybe<Scalars["String"]>;
    /** Document type */
    _type?: Maybe<Scalars["String"]>;
    /** Date the document was last modified */
    _updatedAt?: Maybe<Scalars["DateTime"]>;
    altText?: Maybe<Scalars["String"]>;
    assetId?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
    extension?: Maybe<Scalars["String"]>;
    label?: Maybe<Scalars["String"]>;
    mimeType?: Maybe<Scalars["String"]>;
    originalFilename?: Maybe<Scalars["String"]>;
    path?: Maybe<Scalars["String"]>;
    sha1hash?: Maybe<Scalars["String"]>;
    size?: Maybe<Scalars["Float"]>;
    source?: Maybe<SanityAssetSourceData>;
    title?: Maybe<Scalars["String"]>;
    url?: Maybe<Scalars["String"]>;
};

export type SanityFileAssetFilter = {
    /** Apply filters on document level */
    _?: InputMaybe<Sanity_DocumentFilter>;
    _createdAt?: InputMaybe<DatetimeFilter>;
    _id?: InputMaybe<IdFilter>;
    _key?: InputMaybe<StringFilter>;
    _rev?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    _updatedAt?: InputMaybe<DatetimeFilter>;
    altText?: InputMaybe<StringFilter>;
    assetId?: InputMaybe<StringFilter>;
    description?: InputMaybe<StringFilter>;
    extension?: InputMaybe<StringFilter>;
    label?: InputMaybe<StringFilter>;
    mimeType?: InputMaybe<StringFilter>;
    originalFilename?: InputMaybe<StringFilter>;
    path?: InputMaybe<StringFilter>;
    sha1hash?: InputMaybe<StringFilter>;
    size?: InputMaybe<FloatFilter>;
    source?: InputMaybe<SanityAssetSourceDataFilter>;
    title?: InputMaybe<StringFilter>;
    url?: InputMaybe<StringFilter>;
};

export type SanityFileAssetSorting = {
    _createdAt?: InputMaybe<SortOrder>;
    _id?: InputMaybe<SortOrder>;
    _key?: InputMaybe<SortOrder>;
    _rev?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
    _updatedAt?: InputMaybe<SortOrder>;
    altText?: InputMaybe<SortOrder>;
    assetId?: InputMaybe<SortOrder>;
    description?: InputMaybe<SortOrder>;
    extension?: InputMaybe<SortOrder>;
    label?: InputMaybe<SortOrder>;
    mimeType?: InputMaybe<SortOrder>;
    originalFilename?: InputMaybe<SortOrder>;
    path?: InputMaybe<SortOrder>;
    sha1hash?: InputMaybe<SortOrder>;
    size?: InputMaybe<SortOrder>;
    source?: InputMaybe<SanityAssetSourceDataSorting>;
    title?: InputMaybe<SortOrder>;
    url?: InputMaybe<SortOrder>;
};

export type SanityImageAsset = Document & {
    __typename?: "SanityImageAsset";
    /** Date the document was created */
    _createdAt?: Maybe<Scalars["DateTime"]>;
    /** Document ID */
    _id?: Maybe<Scalars["ID"]>;
    _key?: Maybe<Scalars["String"]>;
    /** Current document revision */
    _rev?: Maybe<Scalars["String"]>;
    /** Document type */
    _type?: Maybe<Scalars["String"]>;
    /** Date the document was last modified */
    _updatedAt?: Maybe<Scalars["DateTime"]>;
    altText?: Maybe<Scalars["String"]>;
    assetId?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
    extension?: Maybe<Scalars["String"]>;
    label?: Maybe<Scalars["String"]>;
    metadata?: Maybe<SanityImageMetadata>;
    mimeType?: Maybe<Scalars["String"]>;
    originalFilename?: Maybe<Scalars["String"]>;
    path?: Maybe<Scalars["String"]>;
    sha1hash?: Maybe<Scalars["String"]>;
    size?: Maybe<Scalars["Float"]>;
    source?: Maybe<SanityAssetSourceData>;
    title?: Maybe<Scalars["String"]>;
    uploadId?: Maybe<Scalars["String"]>;
    url?: Maybe<Scalars["String"]>;
};

export type SanityImageAssetFilter = {
    /** Apply filters on document level */
    _?: InputMaybe<Sanity_DocumentFilter>;
    _createdAt?: InputMaybe<DatetimeFilter>;
    _id?: InputMaybe<IdFilter>;
    _key?: InputMaybe<StringFilter>;
    _rev?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    _updatedAt?: InputMaybe<DatetimeFilter>;
    altText?: InputMaybe<StringFilter>;
    assetId?: InputMaybe<StringFilter>;
    description?: InputMaybe<StringFilter>;
    extension?: InputMaybe<StringFilter>;
    label?: InputMaybe<StringFilter>;
    metadata?: InputMaybe<SanityImageMetadataFilter>;
    mimeType?: InputMaybe<StringFilter>;
    originalFilename?: InputMaybe<StringFilter>;
    path?: InputMaybe<StringFilter>;
    sha1hash?: InputMaybe<StringFilter>;
    size?: InputMaybe<FloatFilter>;
    source?: InputMaybe<SanityAssetSourceDataFilter>;
    title?: InputMaybe<StringFilter>;
    uploadId?: InputMaybe<StringFilter>;
    url?: InputMaybe<StringFilter>;
};

export type SanityImageAssetSorting = {
    _createdAt?: InputMaybe<SortOrder>;
    _id?: InputMaybe<SortOrder>;
    _key?: InputMaybe<SortOrder>;
    _rev?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
    _updatedAt?: InputMaybe<SortOrder>;
    altText?: InputMaybe<SortOrder>;
    assetId?: InputMaybe<SortOrder>;
    description?: InputMaybe<SortOrder>;
    extension?: InputMaybe<SortOrder>;
    label?: InputMaybe<SortOrder>;
    metadata?: InputMaybe<SanityImageMetadataSorting>;
    mimeType?: InputMaybe<SortOrder>;
    originalFilename?: InputMaybe<SortOrder>;
    path?: InputMaybe<SortOrder>;
    sha1hash?: InputMaybe<SortOrder>;
    size?: InputMaybe<SortOrder>;
    source?: InputMaybe<SanityAssetSourceDataSorting>;
    title?: InputMaybe<SortOrder>;
    uploadId?: InputMaybe<SortOrder>;
    url?: InputMaybe<SortOrder>;
};

export type SanityImageCrop = {
    __typename?: "SanityImageCrop";
    _key?: Maybe<Scalars["String"]>;
    _type?: Maybe<Scalars["String"]>;
    bottom?: Maybe<Scalars["Float"]>;
    left?: Maybe<Scalars["Float"]>;
    right?: Maybe<Scalars["Float"]>;
    top?: Maybe<Scalars["Float"]>;
};

export type SanityImageCropFilter = {
    _key?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    bottom?: InputMaybe<FloatFilter>;
    left?: InputMaybe<FloatFilter>;
    right?: InputMaybe<FloatFilter>;
    top?: InputMaybe<FloatFilter>;
};

export type SanityImageCropSorting = {
    _key?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
    bottom?: InputMaybe<SortOrder>;
    left?: InputMaybe<SortOrder>;
    right?: InputMaybe<SortOrder>;
    top?: InputMaybe<SortOrder>;
};

export type SanityImageDimensions = {
    __typename?: "SanityImageDimensions";
    _key?: Maybe<Scalars["String"]>;
    _type?: Maybe<Scalars["String"]>;
    aspectRatio?: Maybe<Scalars["Float"]>;
    height?: Maybe<Scalars["Float"]>;
    width?: Maybe<Scalars["Float"]>;
};

export type SanityImageDimensionsFilter = {
    _key?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    aspectRatio?: InputMaybe<FloatFilter>;
    height?: InputMaybe<FloatFilter>;
    width?: InputMaybe<FloatFilter>;
};

export type SanityImageDimensionsSorting = {
    _key?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
    aspectRatio?: InputMaybe<SortOrder>;
    height?: InputMaybe<SortOrder>;
    width?: InputMaybe<SortOrder>;
};

export type SanityImageHotspot = {
    __typename?: "SanityImageHotspot";
    _key?: Maybe<Scalars["String"]>;
    _type?: Maybe<Scalars["String"]>;
    height?: Maybe<Scalars["Float"]>;
    width?: Maybe<Scalars["Float"]>;
    x?: Maybe<Scalars["Float"]>;
    y?: Maybe<Scalars["Float"]>;
};

export type SanityImageHotspotFilter = {
    _key?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    height?: InputMaybe<FloatFilter>;
    width?: InputMaybe<FloatFilter>;
    x?: InputMaybe<FloatFilter>;
    y?: InputMaybe<FloatFilter>;
};

export type SanityImageHotspotSorting = {
    _key?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
    height?: InputMaybe<SortOrder>;
    width?: InputMaybe<SortOrder>;
    x?: InputMaybe<SortOrder>;
    y?: InputMaybe<SortOrder>;
};

export type SanityImageMetadata = {
    __typename?: "SanityImageMetadata";
    _key?: Maybe<Scalars["String"]>;
    _type?: Maybe<Scalars["String"]>;
    blurHash?: Maybe<Scalars["String"]>;
    dimensions?: Maybe<SanityImageDimensions>;
    hasAlpha?: Maybe<Scalars["Boolean"]>;
    isOpaque?: Maybe<Scalars["Boolean"]>;
    location?: Maybe<Geopoint>;
    lqip?: Maybe<Scalars["String"]>;
    palette?: Maybe<SanityImagePalette>;
};

export type SanityImageMetadataFilter = {
    _key?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    blurHash?: InputMaybe<StringFilter>;
    dimensions?: InputMaybe<SanityImageDimensionsFilter>;
    hasAlpha?: InputMaybe<BooleanFilter>;
    isOpaque?: InputMaybe<BooleanFilter>;
    location?: InputMaybe<GeopointFilter>;
    lqip?: InputMaybe<StringFilter>;
    palette?: InputMaybe<SanityImagePaletteFilter>;
};

export type SanityImageMetadataSorting = {
    _key?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
    blurHash?: InputMaybe<SortOrder>;
    dimensions?: InputMaybe<SanityImageDimensionsSorting>;
    hasAlpha?: InputMaybe<SortOrder>;
    isOpaque?: InputMaybe<SortOrder>;
    location?: InputMaybe<GeopointSorting>;
    lqip?: InputMaybe<SortOrder>;
    palette?: InputMaybe<SanityImagePaletteSorting>;
};

export type SanityImagePalette = {
    __typename?: "SanityImagePalette";
    _key?: Maybe<Scalars["String"]>;
    _type?: Maybe<Scalars["String"]>;
    darkMuted?: Maybe<SanityImagePaletteSwatch>;
    darkVibrant?: Maybe<SanityImagePaletteSwatch>;
    dominant?: Maybe<SanityImagePaletteSwatch>;
    lightMuted?: Maybe<SanityImagePaletteSwatch>;
    lightVibrant?: Maybe<SanityImagePaletteSwatch>;
    muted?: Maybe<SanityImagePaletteSwatch>;
    vibrant?: Maybe<SanityImagePaletteSwatch>;
};

export type SanityImagePaletteFilter = {
    _key?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    darkMuted?: InputMaybe<SanityImagePaletteSwatchFilter>;
    darkVibrant?: InputMaybe<SanityImagePaletteSwatchFilter>;
    dominant?: InputMaybe<SanityImagePaletteSwatchFilter>;
    lightMuted?: InputMaybe<SanityImagePaletteSwatchFilter>;
    lightVibrant?: InputMaybe<SanityImagePaletteSwatchFilter>;
    muted?: InputMaybe<SanityImagePaletteSwatchFilter>;
    vibrant?: InputMaybe<SanityImagePaletteSwatchFilter>;
};

export type SanityImagePaletteSorting = {
    _key?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
    darkMuted?: InputMaybe<SanityImagePaletteSwatchSorting>;
    darkVibrant?: InputMaybe<SanityImagePaletteSwatchSorting>;
    dominant?: InputMaybe<SanityImagePaletteSwatchSorting>;
    lightMuted?: InputMaybe<SanityImagePaletteSwatchSorting>;
    lightVibrant?: InputMaybe<SanityImagePaletteSwatchSorting>;
    muted?: InputMaybe<SanityImagePaletteSwatchSorting>;
    vibrant?: InputMaybe<SanityImagePaletteSwatchSorting>;
};

export type SanityImagePaletteSwatch = {
    __typename?: "SanityImagePaletteSwatch";
    _key?: Maybe<Scalars["String"]>;
    _type?: Maybe<Scalars["String"]>;
    background?: Maybe<Scalars["String"]>;
    foreground?: Maybe<Scalars["String"]>;
    population?: Maybe<Scalars["Float"]>;
    title?: Maybe<Scalars["String"]>;
};

export type SanityImagePaletteSwatchFilter = {
    _key?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    background?: InputMaybe<StringFilter>;
    foreground?: InputMaybe<StringFilter>;
    population?: InputMaybe<FloatFilter>;
    title?: InputMaybe<StringFilter>;
};

export type SanityImagePaletteSwatchSorting = {
    _key?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
    background?: InputMaybe<SortOrder>;
    foreground?: InputMaybe<SortOrder>;
    population?: InputMaybe<SortOrder>;
    title?: InputMaybe<SortOrder>;
};

export type Sanity_DocumentFilter = {
    /** All documents that are drafts. */
    is_draft?: InputMaybe<Scalars["Boolean"]>;
    /** All documents referencing the given document ID. */
    references?: InputMaybe<Scalars["ID"]>;
};

export type Sector = Document & {
    __typename?: "Sector";
    /** Date the document was created */
    _createdAt?: Maybe<Scalars["DateTime"]>;
    /** Document ID */
    _id?: Maybe<Scalars["ID"]>;
    _key?: Maybe<Scalars["String"]>;
    /** Current document revision */
    _rev?: Maybe<Scalars["String"]>;
    /** Document type */
    _type?: Maybe<Scalars["String"]>;
    /** Date the document was last modified */
    _updatedAt?: Maybe<Scalars["DateTime"]>;
    title?: Maybe<Scalars["String"]>;
};

export type SectorFilter = {
    /** Apply filters on document level */
    _?: InputMaybe<Sanity_DocumentFilter>;
    _createdAt?: InputMaybe<DatetimeFilter>;
    _id?: InputMaybe<IdFilter>;
    _key?: InputMaybe<StringFilter>;
    _rev?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    _updatedAt?: InputMaybe<DatetimeFilter>;
    title?: InputMaybe<StringFilter>;
};

export type SectorSorting = {
    _createdAt?: InputMaybe<SortOrder>;
    _id?: InputMaybe<SortOrder>;
    _key?: InputMaybe<SortOrder>;
    _rev?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
    _updatedAt?: InputMaybe<SortOrder>;
    title?: InputMaybe<SortOrder>;
};

export type Service = Document & {
    __typename?: "Service";
    /** Date the document was created */
    _createdAt?: Maybe<Scalars["DateTime"]>;
    /** Document ID */
    _id?: Maybe<Scalars["ID"]>;
    _key?: Maybe<Scalars["String"]>;
    /** Current document revision */
    _rev?: Maybe<Scalars["String"]>;
    /** Document type */
    _type?: Maybe<Scalars["String"]>;
    /** Date the document was last modified */
    _updatedAt?: Maybe<Scalars["DateTime"]>;
    description?: Maybe<Scalars["String"]>;
    serviceGroup?: Maybe<ServiceGroup>;
    title?: Maybe<Scalars["String"]>;
};

export type ServiceFilter = {
    /** Apply filters on document level */
    _?: InputMaybe<Sanity_DocumentFilter>;
    _createdAt?: InputMaybe<DatetimeFilter>;
    _id?: InputMaybe<IdFilter>;
    _key?: InputMaybe<StringFilter>;
    _rev?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    _updatedAt?: InputMaybe<DatetimeFilter>;
    description?: InputMaybe<StringFilter>;
    serviceGroup?: InputMaybe<ServiceGroupFilter>;
    title?: InputMaybe<StringFilter>;
};

export type ServiceGroup = Document & {
    __typename?: "ServiceGroup";
    /** Date the document was created */
    _createdAt?: Maybe<Scalars["DateTime"]>;
    /** Document ID */
    _id?: Maybe<Scalars["ID"]>;
    _key?: Maybe<Scalars["String"]>;
    /** Current document revision */
    _rev?: Maybe<Scalars["String"]>;
    /** Document type */
    _type?: Maybe<Scalars["String"]>;
    /** Date the document was last modified */
    _updatedAt?: Maybe<Scalars["DateTime"]>;
    services?: Maybe<Array<Maybe<Service>>>;
    title?: Maybe<Scalars["String"]>;
};

export type ServiceGroupFilter = {
    /** Apply filters on document level */
    _?: InputMaybe<Sanity_DocumentFilter>;
    _createdAt?: InputMaybe<DatetimeFilter>;
    _id?: InputMaybe<IdFilter>;
    _key?: InputMaybe<StringFilter>;
    _rev?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    _updatedAt?: InputMaybe<DatetimeFilter>;
    title?: InputMaybe<StringFilter>;
};

export type ServiceGroupSorting = {
    _createdAt?: InputMaybe<SortOrder>;
    _id?: InputMaybe<SortOrder>;
    _key?: InputMaybe<SortOrder>;
    _rev?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
    _updatedAt?: InputMaybe<SortOrder>;
    title?: InputMaybe<SortOrder>;
};

export type ServiceSorting = {
    _createdAt?: InputMaybe<SortOrder>;
    _id?: InputMaybe<SortOrder>;
    _key?: InputMaybe<SortOrder>;
    _rev?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
    _updatedAt?: InputMaybe<SortOrder>;
    description?: InputMaybe<SortOrder>;
    title?: InputMaybe<SortOrder>;
};

export type Slug = {
    __typename?: "Slug";
    _key?: Maybe<Scalars["String"]>;
    _type?: Maybe<Scalars["String"]>;
    current?: Maybe<Scalars["String"]>;
    source?: Maybe<Scalars["String"]>;
};

export type SlugFilter = {
    _key?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    current?: InputMaybe<StringFilter>;
    source?: InputMaybe<StringFilter>;
};

export type SlugSorting = {
    _key?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
    current?: InputMaybe<SortOrder>;
    source?: InputMaybe<SortOrder>;
};

export enum SortOrder {
    /** Sorts on the value in ascending order. */
    Asc = "ASC",
    /** Sorts on the value in descending order. */
    Desc = "DESC",
}

export type Span = {
    __typename?: "Span";
    _key?: Maybe<Scalars["String"]>;
    _type?: Maybe<Scalars["String"]>;
    marks?: Maybe<Array<Maybe<Scalars["String"]>>>;
    text?: Maybe<Scalars["String"]>;
};

export type StringFilter = {
    /** Checks if the value is equal to the given input. */
    eq?: InputMaybe<Scalars["String"]>;
    in?: InputMaybe<Array<Scalars["String"]>>;
    /** Checks if the value matches the given word/words. */
    matches?: InputMaybe<Scalars["String"]>;
    /** Checks if the value is not equal to the given input. */
    neq?: InputMaybe<Scalars["String"]>;
    nin?: InputMaybe<Array<Scalars["String"]>>;
};

export type Testimonial = Document & {
    __typename?: "Testimonial";
    /** Date the document was created */
    _createdAt?: Maybe<Scalars["DateTime"]>;
    /** Document ID */
    _id?: Maybe<Scalars["ID"]>;
    _key?: Maybe<Scalars["String"]>;
    /** Current document revision */
    _rev?: Maybe<Scalars["String"]>;
    /** Document type */
    _type?: Maybe<Scalars["String"]>;
    /** Date the document was last modified */
    _updatedAt?: Maybe<Scalars["DateTime"]>;
    body?: Maybe<Scalars["String"]>;
    company?: Maybe<Scalars["String"]>;
    name?: Maybe<Scalars["String"]>;
};

export type TestimonialFilter = {
    /** Apply filters on document level */
    _?: InputMaybe<Sanity_DocumentFilter>;
    _createdAt?: InputMaybe<DatetimeFilter>;
    _id?: InputMaybe<IdFilter>;
    _key?: InputMaybe<StringFilter>;
    _rev?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    _updatedAt?: InputMaybe<DatetimeFilter>;
    body?: InputMaybe<StringFilter>;
    company?: InputMaybe<StringFilter>;
    name?: InputMaybe<StringFilter>;
};

export type TestimonialSorting = {
    _createdAt?: InputMaybe<SortOrder>;
    _id?: InputMaybe<SortOrder>;
    _key?: InputMaybe<SortOrder>;
    _rev?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
    _updatedAt?: InputMaybe<SortOrder>;
    body?: InputMaybe<SortOrder>;
    company?: InputMaybe<SortOrder>;
    name?: InputMaybe<SortOrder>;
};

export type CaseQueryVariables = Exact<{
    handle: Scalars["String"];
}>;

export type CaseQuery = {
    __typename?: "RootQuery";
    allCase: Array<{
        __typename?: "Case";
        _id?: string | null;
        title?: string | null;
        short?: string | null;
        main?: string | null;
        problem?: string | null;
        solution?: string | null;
        client?: string | null;
        type?: string | null;
        year?: number | null;
        productUrl?: string | null;
        slug?: { __typename?: "Slug"; current?: string | null } | null;
        service?: { __typename?: "Service"; title?: string | null } | null;
        sector?: { __typename?: "Sector"; title?: string | null } | null;
        bannerImage?: {
            __typename?: "Image";
            asset?: {
                __typename?: "SanityImageAsset";
                url?: string | null;
                altText?: string | null;
            } | null;
        } | null;
        images?: Array<{
            __typename?: "Image";
            asset?: {
                __typename?: "SanityImageAsset";
                url?: string | null;
                altText?: string | null;
            } | null;
        } | null> | null;
    }>;
};

export type CasesQueryVariables = Exact<{
    limit?: InputMaybe<Scalars["Int"]>;
}>;

export type CasesQuery = {
    __typename?: "RootQuery";
    allCase: Array<{
        __typename?: "Case";
        _id?: string | null;
        title?: string | null;
        short?: string | null;
        slug?: { __typename?: "Slug"; current?: string | null } | null;
        bannerImage?: {
            __typename?: "Image";
            asset?: {
                __typename?: "SanityImageAsset";
                url?: string | null;
                altText?: string | null;
            } | null;
        } | null;
    }>;
};

export type ServicesQueryVariables = Exact<{ [key: string]: never }>;

export type ServicesQuery = {
    __typename?: "RootQuery";
    allServiceGroup: Array<{
        __typename?: "ServiceGroup";
        title?: string | null;
        services?: Array<{
            __typename?: "Service";
            _id?: string | null;
            title?: string | null;
            description?: string | null;
        } | null> | null;
    }>;
};

export type TestimonialsQueryVariables = Exact<{ [key: string]: never }>;

export type TestimonialsQuery = {
    __typename?: "RootQuery";
    allTestimonial: Array<{
        __typename?: "Testimonial";
        body?: string | null;
        name?: string | null;
        company?: string | null;
    }>;
};
