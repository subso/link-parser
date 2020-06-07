// DO NOT CHANGE ORDER OF THIS ENUM
export enum ContentType {
  'post',
  'video',
  'clip',
  'stream',
  'vod',
  'article',
  'song',
  'album',
  'movie',
  'fundraiser',
  'invitation',
  'event',
  'channel',
  'artist',
  'playlist',
  'podcast',
  'podcastEpisode',
  'profile',
  'image',
  'story',
  'repo',
}

export interface PlatformObject {
  key: string;
  name: string;
  url: string;
  hex: string;
  wideThumb: boolean;
  baseURLMatch: RegExp;
  contentTypeMatches: { [key in keyof typeof ContentType]?: RegExp };
  extractedId?: string;
  contentType?: string;
}
