export enum ContentType {
  'clip',
  'stream',
  'vod',
  'channel',
  'video',
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
