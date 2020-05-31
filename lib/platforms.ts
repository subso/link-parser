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
      vod: /http(?:s)?:\/\/(?:www\.)?twitch\.tv\/videos\/([a-zA-Z0-9_]+)/,
      stream: /http(?:s)?:\/\/(?:www\.)?twitch\.tv\/([a-zA-Z0-9_]+)/,
    },
  },
  youtube: {
    key: 'youtube',
    name: 'YouTube',
    url: 'youtube.com',
    hex: '#6441A4',
    wideThumb: true,
    baseURLMatch: /http(?:s)?:\/\/(?:www\.)?youtube\.com\//,
    contentTypeMatches: {
      channel: /(?:https|http)\:\/\/(?:[\w]+\.)?youtube\.com\/(?:c\/|channel\/|user\/)([a-zA-Z0-9\-_]{1,})/,
      video: /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)[\w\=]*)?/,
    },
  },
};
