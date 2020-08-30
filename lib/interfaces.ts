export type ContentType =
  | 'post'
  | 'video'
  | 'clip'
  | 'stream'
  | 'vod'
  | 'article'
  | 'song'
  | 'album'
  | 'movie'
  | 'fundraiser'
  | 'invitation'
  | 'event'
  | 'channel'
  | 'artist'
  | 'playlist'
  | 'podcast'
  | 'podcastEpisode'
  | 'profile'
  | 'image'
  | 'story'
  | 'repo'
  | 'invite';

export interface PlatformObject {
  key: string;
  name: string;
  url: string;
  hex: string;
  wideThumb: boolean;
  baseURLMatch: RegExp;
  contentTypeMatches: { [K in ContentType]?: RegExp };
  extractedId?: string;
  contentType?: string;
}
