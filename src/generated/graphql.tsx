import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AdminUser = {
  __typename?: 'AdminUser';
  firstname: Scalars['String'];
  id: Scalars['ID'];
  lastname: Scalars['String'];
  username?: Maybe<Scalars['String']>;
};

export type ComponentUncategorisedFlag = {
  __typename?: 'ComponentUncategorisedFlag';
  details: Scalars['String'];
  id: Scalars['ID'];
  type: Enum_Componentuncategorisedflag_Type;
};

export type ComponentUncategorisedFlagInput = {
  details: Scalars['String'];
  type: Enum_Componentuncategorisedflag_Type;
};

export type ComponentUncategorisedLink = {
  __typename?: 'ComponentUncategorisedLink';
  id: Scalars['ID'];
  label: Scalars['String'];
  url: Scalars['String'];
};

export type ComponentUncategorisedLinkInput = {
  label: Scalars['String'];
  url: Scalars['String'];
};

export type ComponentUncategorisedMetadata = {
  __typename?: 'ComponentUncategorisedMetadata';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type ComponentUncategorisedMetadatumInput = {
  title?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export enum Enum_Componentuncategorisedflag_Type {
  Danger = 'danger',
  Info = 'info',
  Warning = 'warning'
}

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  ext?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: InputMaybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: InputMaybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  related?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  size: Scalars['Float'];
  updated_by?: InputMaybe<Scalars['ID']>;
  url: Scalars['String'];
  width?: InputMaybe<Scalars['Int']>;
};

export type Format = {
  __typename?: 'Format';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  resources?: Maybe<Array<Maybe<Resource>>>;
  updated_at: Scalars['DateTime'];
};


export type FormatResourcesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type FormatAggregator = {
  __typename?: 'FormatAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type FormatConnection = {
  __typename?: 'FormatConnection';
  aggregate?: Maybe<FormatAggregator>;
  groupBy?: Maybe<FormatGroupBy>;
  values?: Maybe<Array<Maybe<Format>>>;
};

export type FormatConnectionCreated_At = {
  __typename?: 'FormatConnectionCreated_at';
  connection?: Maybe<FormatConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type FormatConnectionId = {
  __typename?: 'FormatConnectionId';
  connection?: Maybe<FormatConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type FormatConnectionName = {
  __typename?: 'FormatConnectionName';
  connection?: Maybe<FormatConnection>;
  key?: Maybe<Scalars['String']>;
};

export type FormatConnectionPublished_At = {
  __typename?: 'FormatConnectionPublished_at';
  connection?: Maybe<FormatConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type FormatConnectionUpdated_At = {
  __typename?: 'FormatConnectionUpdated_at';
  connection?: Maybe<FormatConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type FormatGroupBy = {
  __typename?: 'FormatGroupBy';
  created_at?: Maybe<Array<Maybe<FormatConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<FormatConnectionId>>>;
  name?: Maybe<Array<Maybe<FormatConnectionName>>>;
  published_at?: Maybe<Array<Maybe<FormatConnectionPublished_At>>>;
  updated_at?: Maybe<Array<Maybe<FormatConnectionUpdated_At>>>;
};

export type FormatInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  resources?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
};

export type InputId = {
  id: Scalars['ID'];
};

export type LocaleInput = {
  code?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type Morph = ComponentUncategorisedFlag | ComponentUncategorisedLink | ComponentUncategorisedMetadata | Format | FormatAggregator | FormatConnection | FormatConnectionCreated_At | FormatConnectionId | FormatConnectionName | FormatConnectionPublished_At | FormatConnectionUpdated_At | FormatGroupBy | I18NLocale | Resource | ResourceAggregator | ResourceConnection | ResourceConnectionCreated_At | ResourceConnectionDescription | ResourceConnectionFlag | ResourceConnectionId | ResourceConnectionImage | ResourceConnectionPublished_At | ResourceConnectionResourceFormat | ResourceConnectionTitle | ResourceConnectionUpdated_At | ResourceGroupBy | Suggestion | SuggestionAggregator | SuggestionConnection | SuggestionConnectionCreated_At | SuggestionConnectionDetails | SuggestionConnectionEmail | SuggestionConnectionId | SuggestionConnectionName | SuggestionConnectionPublished_At | SuggestionConnectionTitle | SuggestionConnectionUpdated_At | SuggestionGroupBy | Tag | TagAggregator | TagConnection | TagConnectionCreated_At | TagConnectionDescription | TagConnectionId | TagConnectionName | TagConnectionPublished_At | TagConnectionUpdated_At | TagGroupBy | UploadFile | UploadFileAggregator | UploadFileAggregatorAvg | UploadFileAggregatorMax | UploadFileAggregatorMin | UploadFileAggregatorSum | UploadFileConnection | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionCreated_At | UploadFileConnectionExt | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionHeight | UploadFileConnectionId | UploadFileConnectionMime | UploadFileConnectionName | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | UploadFileConnectionSize | UploadFileConnectionUpdated_At | UploadFileConnectionUrl | UploadFileConnectionWidth | UploadFileGroupBy | UserPermissionsPasswordPayload | UsersPermissionsLoginPayload | UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleAggregator | UsersPermissionsRoleConnection | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionType | UsersPermissionsRoleGroupBy | UsersPermissionsUser | UsersPermissionsUserAggregator | UsersPermissionsUserConnection | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionCreated_At | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionRole | UsersPermissionsUserConnectionUpdated_At | UsersPermissionsUserConnectionUsername | UsersPermissionsUserGroupBy | CreateFormatPayload | CreateResourcePayload | CreateRolePayload | CreateSuggestionPayload | CreateTagPayload | CreateUserPayload | DeleteFilePayload | DeleteFormatPayload | DeleteResourcePayload | DeleteRolePayload | DeleteSuggestionPayload | DeleteTagPayload | DeleteUserPayload | UpdateFormatPayload | UpdateResourcePayload | UpdateRolePayload | UpdateSuggestionPayload | UpdateTagPayload | UpdateUserPayload;

export type Mutation = {
  __typename?: 'Mutation';
  createFormat?: Maybe<CreateFormatPayload>;
  createResource?: Maybe<CreateResourcePayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  createSuggestion?: Maybe<CreateSuggestionPayload>;
  createTag?: Maybe<CreateTagPayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>;
  deleteFormat?: Maybe<DeleteFormatPayload>;
  deleteResource?: Maybe<DeleteResourcePayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  deleteSuggestion?: Maybe<DeleteSuggestionPayload>;
  deleteTag?: Maybe<DeleteTagPayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFile>>;
  register: UsersPermissionsLoginPayload;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateFileInfo: UploadFile;
  updateFormat?: Maybe<UpdateFormatPayload>;
  updateResource?: Maybe<UpdateResourcePayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  updateSuggestion?: Maybe<UpdateSuggestionPayload>;
  updateTag?: Maybe<UpdateTagPayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  upload: UploadFile;
};


export type MutationCreateFormatArgs = {
  input?: InputMaybe<CreateFormatInput>;
};


export type MutationCreateResourceArgs = {
  input?: InputMaybe<CreateResourceInput>;
};


export type MutationCreateRoleArgs = {
  input?: InputMaybe<CreateRoleInput>;
};


export type MutationCreateSuggestionArgs = {
  input?: InputMaybe<CreateSuggestionInput>;
};


export type MutationCreateTagArgs = {
  input?: InputMaybe<CreateTagInput>;
};


export type MutationCreateUserArgs = {
  input?: InputMaybe<CreateUserInput>;
};


export type MutationDeleteFileArgs = {
  input?: InputMaybe<DeleteFileInput>;
};


export type MutationDeleteFormatArgs = {
  input?: InputMaybe<DeleteFormatInput>;
};


export type MutationDeleteResourceArgs = {
  input?: InputMaybe<DeleteResourceInput>;
};


export type MutationDeleteRoleArgs = {
  input?: InputMaybe<DeleteRoleInput>;
};


export type MutationDeleteSuggestionArgs = {
  input?: InputMaybe<DeleteSuggestionInput>;
};


export type MutationDeleteTagArgs = {
  input?: InputMaybe<DeleteTagInput>;
};


export type MutationDeleteUserArgs = {
  input?: InputMaybe<DeleteUserInput>;
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
  source?: InputMaybe<Scalars['String']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};


export type MutationUpdateFormatArgs = {
  input?: InputMaybe<UpdateFormatInput>;
};


export type MutationUpdateResourceArgs = {
  input?: InputMaybe<UpdateResourceInput>;
};


export type MutationUpdateRoleArgs = {
  input?: InputMaybe<UpdateRoleInput>;
};


export type MutationUpdateSuggestionArgs = {
  input?: InputMaybe<UpdateSuggestionInput>;
};


export type MutationUpdateTagArgs = {
  input?: InputMaybe<UpdateTagInput>;
};


export type MutationUpdateUserArgs = {
  input?: InputMaybe<UpdateUserInput>;
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
  source?: InputMaybe<Scalars['String']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  format?: Maybe<Format>;
  formats?: Maybe<Array<Maybe<Format>>>;
  formatsConnection?: Maybe<FormatConnection>;
  me?: Maybe<UsersPermissionsMe>;
  resource?: Maybe<Resource>;
  resources?: Maybe<Array<Maybe<Resource>>>;
  resourcesConnection?: Maybe<ResourceConnection>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  suggestion?: Maybe<Suggestion>;
  suggestions?: Maybe<Array<Maybe<Suggestion>>>;
  suggestionsConnection?: Maybe<SuggestionConnection>;
  tag?: Maybe<Tag>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  tagsConnection?: Maybe<TagConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
};


export type QueryFilesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryFilesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryFormatArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryFormatsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryFormatsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryResourceArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryResourcesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryResourcesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryRolesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryRolesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QuerySuggestionArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QuerySuggestionsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QuerySuggestionsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryTagArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryTagsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryTagsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryUsersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryUsersConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type Resource = {
  __typename?: 'Resource';
  created_at: Scalars['DateTime'];
  description: Scalars['String'];
  flag?: Maybe<ComponentUncategorisedFlag>;
  id: Scalars['ID'];
  image?: Maybe<UploadFile>;
  links?: Maybe<Array<Maybe<ComponentUncategorisedLink>>>;
  metadata?: Maybe<Array<Maybe<ComponentUncategorisedMetadata>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  resourceFormat?: Maybe<Format>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
};


export type ResourceTagsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type ResourceAggregator = {
  __typename?: 'ResourceAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ResourceConnection = {
  __typename?: 'ResourceConnection';
  aggregate?: Maybe<ResourceAggregator>;
  groupBy?: Maybe<ResourceGroupBy>;
  values?: Maybe<Array<Maybe<Resource>>>;
};

export type ResourceConnectionCreated_At = {
  __typename?: 'ResourceConnectionCreated_at';
  connection?: Maybe<ResourceConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ResourceConnectionDescription = {
  __typename?: 'ResourceConnectionDescription';
  connection?: Maybe<ResourceConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ResourceConnectionFlag = {
  __typename?: 'ResourceConnectionFlag';
  connection?: Maybe<ResourceConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ResourceConnectionId = {
  __typename?: 'ResourceConnectionId';
  connection?: Maybe<ResourceConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ResourceConnectionImage = {
  __typename?: 'ResourceConnectionImage';
  connection?: Maybe<ResourceConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ResourceConnectionPublished_At = {
  __typename?: 'ResourceConnectionPublished_at';
  connection?: Maybe<ResourceConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ResourceConnectionResourceFormat = {
  __typename?: 'ResourceConnectionResourceFormat';
  connection?: Maybe<ResourceConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ResourceConnectionTitle = {
  __typename?: 'ResourceConnectionTitle';
  connection?: Maybe<ResourceConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ResourceConnectionUpdated_At = {
  __typename?: 'ResourceConnectionUpdated_at';
  connection?: Maybe<ResourceConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ResourceGroupBy = {
  __typename?: 'ResourceGroupBy';
  created_at?: Maybe<Array<Maybe<ResourceConnectionCreated_At>>>;
  description?: Maybe<Array<Maybe<ResourceConnectionDescription>>>;
  flag?: Maybe<Array<Maybe<ResourceConnectionFlag>>>;
  id?: Maybe<Array<Maybe<ResourceConnectionId>>>;
  image?: Maybe<Array<Maybe<ResourceConnectionImage>>>;
  published_at?: Maybe<Array<Maybe<ResourceConnectionPublished_At>>>;
  resourceFormat?: Maybe<Array<Maybe<ResourceConnectionResourceFormat>>>;
  title?: Maybe<Array<Maybe<ResourceConnectionTitle>>>;
  updated_at?: Maybe<Array<Maybe<ResourceConnectionUpdated_At>>>;
};

export type ResourceInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  description: Scalars['String'];
  flag?: InputMaybe<ComponentUncategorisedFlagInput>;
  image?: InputMaybe<Scalars['ID']>;
  links?: InputMaybe<Array<InputMaybe<ComponentUncategorisedLinkInput>>>;
  metadata?: InputMaybe<Array<InputMaybe<ComponentUncategorisedMetadatumInput>>>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  resourceFormat?: InputMaybe<Scalars['ID']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  title: Scalars['String'];
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type RoleInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type Suggestion = {
  __typename?: 'Suggestion';
  created_at: Scalars['DateTime'];
  details: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type SuggestionAggregator = {
  __typename?: 'SuggestionAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type SuggestionConnection = {
  __typename?: 'SuggestionConnection';
  aggregate?: Maybe<SuggestionAggregator>;
  groupBy?: Maybe<SuggestionGroupBy>;
  values?: Maybe<Array<Maybe<Suggestion>>>;
};

export type SuggestionConnectionCreated_At = {
  __typename?: 'SuggestionConnectionCreated_at';
  connection?: Maybe<SuggestionConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type SuggestionConnectionDetails = {
  __typename?: 'SuggestionConnectionDetails';
  connection?: Maybe<SuggestionConnection>;
  key?: Maybe<Scalars['String']>;
};

export type SuggestionConnectionEmail = {
  __typename?: 'SuggestionConnectionEmail';
  connection?: Maybe<SuggestionConnection>;
  key?: Maybe<Scalars['String']>;
};

export type SuggestionConnectionId = {
  __typename?: 'SuggestionConnectionId';
  connection?: Maybe<SuggestionConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type SuggestionConnectionName = {
  __typename?: 'SuggestionConnectionName';
  connection?: Maybe<SuggestionConnection>;
  key?: Maybe<Scalars['String']>;
};

export type SuggestionConnectionPublished_At = {
  __typename?: 'SuggestionConnectionPublished_at';
  connection?: Maybe<SuggestionConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type SuggestionConnectionTitle = {
  __typename?: 'SuggestionConnectionTitle';
  connection?: Maybe<SuggestionConnection>;
  key?: Maybe<Scalars['String']>;
};

export type SuggestionConnectionUpdated_At = {
  __typename?: 'SuggestionConnectionUpdated_at';
  connection?: Maybe<SuggestionConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type SuggestionGroupBy = {
  __typename?: 'SuggestionGroupBy';
  created_at?: Maybe<Array<Maybe<SuggestionConnectionCreated_At>>>;
  details?: Maybe<Array<Maybe<SuggestionConnectionDetails>>>;
  email?: Maybe<Array<Maybe<SuggestionConnectionEmail>>>;
  id?: Maybe<Array<Maybe<SuggestionConnectionId>>>;
  name?: Maybe<Array<Maybe<SuggestionConnectionName>>>;
  published_at?: Maybe<Array<Maybe<SuggestionConnectionPublished_At>>>;
  title?: Maybe<Array<Maybe<SuggestionConnectionTitle>>>;
  updated_at?: Maybe<Array<Maybe<SuggestionConnectionUpdated_At>>>;
};

export type SuggestionInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  details: Scalars['String'];
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type Tag = {
  __typename?: 'Tag';
  created_at: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  published_at?: Maybe<Scalars['DateTime']>;
  resources?: Maybe<Array<Maybe<Resource>>>;
  updated_at: Scalars['DateTime'];
};


export type TagResourcesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type TagAggregator = {
  __typename?: 'TagAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type TagConnection = {
  __typename?: 'TagConnection';
  aggregate?: Maybe<TagAggregator>;
  groupBy?: Maybe<TagGroupBy>;
  values?: Maybe<Array<Maybe<Tag>>>;
};

export type TagConnectionCreated_At = {
  __typename?: 'TagConnectionCreated_at';
  connection?: Maybe<TagConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TagConnectionDescription = {
  __typename?: 'TagConnectionDescription';
  connection?: Maybe<TagConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TagConnectionId = {
  __typename?: 'TagConnectionId';
  connection?: Maybe<TagConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type TagConnectionName = {
  __typename?: 'TagConnectionName';
  connection?: Maybe<TagConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TagConnectionPublished_At = {
  __typename?: 'TagConnectionPublished_at';
  connection?: Maybe<TagConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TagConnectionUpdated_At = {
  __typename?: 'TagConnectionUpdated_at';
  connection?: Maybe<TagConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TagGroupBy = {
  __typename?: 'TagGroupBy';
  created_at?: Maybe<Array<Maybe<TagConnectionCreated_At>>>;
  description?: Maybe<Array<Maybe<TagConnectionDescription>>>;
  id?: Maybe<Array<Maybe<TagConnectionId>>>;
  name?: Maybe<Array<Maybe<TagConnectionName>>>;
  published_at?: Maybe<Array<Maybe<TagConnectionPublished_At>>>;
  updated_at?: Maybe<Array<Maybe<TagConnectionUpdated_At>>>;
};

export type TagInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  description: Scalars['String'];
  name: Scalars['String'];
  published_at?: InputMaybe<Scalars['DateTime']>;
  resources?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Morph>>>;
  size: Scalars['Float'];
  updated_at: Scalars['DateTime'];
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};


export type UploadFileRelatedArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  avg?: Maybe<UploadFileAggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<UploadFileAggregatorMax>;
  min?: Maybe<UploadFileAggregatorMin>;
  sum?: Maybe<UploadFileAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  aggregate?: Maybe<UploadFileAggregator>;
  groupBy?: Maybe<UploadFileGroupBy>;
  values?: Maybe<Array<Maybe<UploadFile>>>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionCreated_At = {
  __typename?: 'UploadFileConnectionCreated_at';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['JSON']>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['JSON']>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Float']>;
};

export type UploadFileConnectionUpdated_At = {
  __typename?: 'UploadFileConnectionUpdated_at';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
};

export type UserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  created_by?: InputMaybe<Scalars['ID']>;
  email: Scalars['String'];
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  username: Scalars['String'];
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email: Scalars['String'];
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  controller: Scalars['String'];
  enabled: Scalars['Boolean'];
  id: Scalars['ID'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
  type: Scalars['String'];
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  type?: Maybe<Scalars['String']>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type UsersPermissionsRolePermissionsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type UsersPermissionsRoleUsersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  created_at: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
  updated_at: Scalars['DateTime'];
  username: Scalars['String'];
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: 'UsersPermissionsUserConnectionCreated_at';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
  updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
};

export type CreateFormatInput = {
  data?: InputMaybe<FormatInput>;
};

export type CreateFormatPayload = {
  __typename?: 'createFormatPayload';
  format?: Maybe<Format>;
};

export type CreateResourceInput = {
  data?: InputMaybe<ResourceInput>;
};

export type CreateResourcePayload = {
  __typename?: 'createResourcePayload';
  resource?: Maybe<Resource>;
};

export type CreateRoleInput = {
  data?: InputMaybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type CreateSuggestionInput = {
  data?: InputMaybe<SuggestionInput>;
};

export type CreateSuggestionPayload = {
  __typename?: 'createSuggestionPayload';
  suggestion?: Maybe<Suggestion>;
};

export type CreateTagInput = {
  data?: InputMaybe<TagInput>;
};

export type CreateTagPayload = {
  __typename?: 'createTagPayload';
  tag?: Maybe<Tag>;
};

export type CreateUserInput = {
  data?: InputMaybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteFileInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload';
  file?: Maybe<UploadFile>;
};

export type DeleteFormatInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteFormatPayload = {
  __typename?: 'deleteFormatPayload';
  format?: Maybe<Format>;
};

export type DeleteResourceInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteResourcePayload = {
  __typename?: 'deleteResourcePayload';
  resource?: Maybe<Resource>;
};

export type DeleteRoleInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteSuggestionInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteSuggestionPayload = {
  __typename?: 'deleteSuggestionPayload';
  suggestion?: Maybe<Suggestion>;
};

export type DeleteTagInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteTagPayload = {
  __typename?: 'deleteTagPayload';
  tag?: Maybe<Tag>;
};

export type DeleteUserInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type EditComponentUncategorisedFlagInput = {
  details?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  type?: InputMaybe<Enum_Componentuncategorisedflag_Type>;
};

export type EditComponentUncategorisedLinkInput = {
  id?: InputMaybe<Scalars['ID']>;
  label?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type EditComponentUncategorisedMetadatumInput = {
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type EditFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  ext?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  related?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  size?: InputMaybe<Scalars['Float']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type EditFormatInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  resources?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditLocaleInput = {
  code?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditResourceInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  flag?: InputMaybe<EditComponentUncategorisedFlagInput>;
  image?: InputMaybe<Scalars['ID']>;
  links?: InputMaybe<Array<InputMaybe<EditComponentUncategorisedLinkInput>>>;
  metadata?: InputMaybe<Array<InputMaybe<EditComponentUncategorisedMetadatumInput>>>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  resourceFormat?: InputMaybe<Scalars['ID']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  title?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditRoleInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type EditSuggestionInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  details?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditTagInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  resources?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  created_by?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UpdateFormatInput = {
  data?: InputMaybe<EditFormatInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateFormatPayload = {
  __typename?: 'updateFormatPayload';
  format?: Maybe<Format>;
};

export type UpdateResourceInput = {
  data?: InputMaybe<EditResourceInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateResourcePayload = {
  __typename?: 'updateResourcePayload';
  resource?: Maybe<Resource>;
};

export type UpdateRoleInput = {
  data?: InputMaybe<EditRoleInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateSuggestionInput = {
  data?: InputMaybe<EditSuggestionInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateSuggestionPayload = {
  __typename?: 'updateSuggestionPayload';
  suggestion?: Maybe<Suggestion>;
};

export type UpdateTagInput = {
  data?: InputMaybe<EditTagInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateTagPayload = {
  __typename?: 'updateTagPayload';
  tag?: Maybe<Tag>;
};

export type UpdateUserInput = {
  data?: InputMaybe<EditUserInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type GetResourceQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetResourceQuery = { __typename?: 'Query', resource?: { __typename?: 'Resource', id: string, title: string, description: string, image?: { __typename?: 'UploadFile', url: string } | null | undefined, metadata?: Array<{ __typename?: 'ComponentUncategorisedMetadata', title?: string | null | undefined, value?: string | null | undefined } | null | undefined> | null | undefined, links?: Array<{ __typename?: 'ComponentUncategorisedLink', label: string, url: string } | null | undefined> | null | undefined, tags?: Array<{ __typename?: 'Tag', id: string, name: string } | null | undefined> | null | undefined, flag?: { __typename?: 'ComponentUncategorisedFlag', type: Enum_Componentuncategorisedflag_Type, details: string } | null | undefined } | null | undefined };

export type GetResourcesQueryVariables = Exact<{
  search?: Maybe<Scalars['String']>;
}>;


export type GetResourcesQuery = { __typename?: 'Query', resources?: Array<{ __typename?: 'Resource', id: string, title: string, description: string, resourceFormat?: { __typename?: 'Format', name?: string | null | undefined } | null | undefined, image?: { __typename?: 'UploadFile', url: string } | null | undefined, metadata?: Array<{ __typename?: 'ComponentUncategorisedMetadata', title?: string | null | undefined, value?: string | null | undefined } | null | undefined> | null | undefined, links?: Array<{ __typename?: 'ComponentUncategorisedLink', label: string, url: string } | null | undefined> | null | undefined, tags?: Array<{ __typename?: 'Tag', id: string, name: string } | null | undefined> | null | undefined } | null | undefined> | null | undefined };

export type GetTagQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetTagQuery = { __typename?: 'Query', tag?: { __typename?: 'Tag', name: string, description: string, resources?: Array<{ __typename?: 'Resource', id: string, title: string, description: string, resourceFormat?: { __typename?: 'Format', name?: string | null | undefined } | null | undefined, image?: { __typename?: 'UploadFile', url: string } | null | undefined } | null | undefined> | null | undefined } | null | undefined };


export const GetResourceDocument = gql`
    query getResource($id: ID!) {
  resource(id: $id) {
    id
    title
    description
    image {
      url
    }
    metadata {
      title
      value
    }
    links {
      label
      url
    }
    tags {
      id
      name
    }
    flag {
      type
      details
    }
  }
}
    `;

/**
 * __useGetResourceQuery__
 *
 * To run a query within a React component, call `useGetResourceQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetResourceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetResourceQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetResourceQuery(baseOptions: Apollo.QueryHookOptions<GetResourceQuery, GetResourceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetResourceQuery, GetResourceQueryVariables>(GetResourceDocument, options);
      }
export function useGetResourceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetResourceQuery, GetResourceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetResourceQuery, GetResourceQueryVariables>(GetResourceDocument, options);
        }
export type GetResourceQueryHookResult = ReturnType<typeof useGetResourceQuery>;
export type GetResourceLazyQueryHookResult = ReturnType<typeof useGetResourceLazyQuery>;
export type GetResourceQueryResult = Apollo.QueryResult<GetResourceQuery, GetResourceQueryVariables>;
export const GetResourcesDocument = gql`
    query getResources($search: String) {
  resources(
    where: {_or: [{title_contains: $search}, {description_contains: $search}, {tags: {name_contains: $search}}]}
  ) {
    id
    title
    description
    resourceFormat {
      name
    }
    image {
      url
    }
    metadata {
      title
      value
    }
    links {
      label
      url
    }
    tags {
      id
      name
    }
  }
}
    `;

/**
 * __useGetResourcesQuery__
 *
 * To run a query within a React component, call `useGetResourcesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetResourcesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetResourcesQuery({
 *   variables: {
 *      search: // value for 'search'
 *   },
 * });
 */
export function useGetResourcesQuery(baseOptions?: Apollo.QueryHookOptions<GetResourcesQuery, GetResourcesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetResourcesQuery, GetResourcesQueryVariables>(GetResourcesDocument, options);
      }
export function useGetResourcesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetResourcesQuery, GetResourcesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetResourcesQuery, GetResourcesQueryVariables>(GetResourcesDocument, options);
        }
export type GetResourcesQueryHookResult = ReturnType<typeof useGetResourcesQuery>;
export type GetResourcesLazyQueryHookResult = ReturnType<typeof useGetResourcesLazyQuery>;
export type GetResourcesQueryResult = Apollo.QueryResult<GetResourcesQuery, GetResourcesQueryVariables>;
export const GetTagDocument = gql`
    query getTag($id: ID!) {
  tag(id: $id) {
    name
    description
    resources {
      id
      title
      description
      resourceFormat {
        name
      }
      image {
        url
      }
    }
  }
}
    `;

/**
 * __useGetTagQuery__
 *
 * To run a query within a React component, call `useGetTagQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTagQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTagQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetTagQuery(baseOptions: Apollo.QueryHookOptions<GetTagQuery, GetTagQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTagQuery, GetTagQueryVariables>(GetTagDocument, options);
      }
export function useGetTagLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTagQuery, GetTagQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTagQuery, GetTagQueryVariables>(GetTagDocument, options);
        }
export type GetTagQueryHookResult = ReturnType<typeof useGetTagQuery>;
export type GetTagLazyQueryHookResult = ReturnType<typeof useGetTagLazyQuery>;
export type GetTagQueryResult = Apollo.QueryResult<GetTagQuery, GetTagQueryVariables>;