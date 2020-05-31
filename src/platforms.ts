import { PlatformObject } from './interfaces';

export const platforms: { [key: string]: PlatformObject } = {
  twitch: {
    key: 'twitch',
    name: 'Twitch',
    url: 'twitch.tv',
    hex: '#6441A4',
    wideThumb: true,
    baseURLMatch: /http(?:s)?:\/\/(?:www\.)?twitch\.tv\//,
    contentTypeMatches: {
      clip: /(?:http(?:s)?:\/\/(?:www\.)?clips\.twitch\.tv\/([a-zA-Z0-9_]+))|(?:http(?:s)?:\/\/(?:www\.)?twitch\.tv\/[a-zA-Z0-9_]+\/clip\/([a-zA-Z0-9_]+))/,
      vod: /http(?:s)?:\/\/(?:www\.)?twitch\.tv\/([a-zA-Z0-9_]+)/,
      stream: /http(?:s)?:\/\/(?:www\.)?twitch\.tv\/([a-zA-Z0-9_]+)/,
    },
  },
};
