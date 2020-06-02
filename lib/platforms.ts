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
    hex: '#FF0000',
    wideThumb: true,
    baseURLMatch: /http(?:s)?:\/\/(?:www\.)?youtube\.com\//,
    contentTypeMatches: {
      channel: /(?:https|http)\:\/\/(?:[\w]+\.)?youtube\.com\/(?:c\/|channel\/|user\/)([a-zA-Z0-9\-_]{1,})/,
      video: /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)[\w\=]*)?/,
    },
  },
  spotify: {
    key: 'spotify',
    name: 'Spotify',
    url: 'spotify.com',
    hex: '#1ED760',
    wideThumb: false,
    baseURLMatch: /http(?:s)?:\/\/(?:open\.)?spotify\.com\//,
    contentTypeMatches: {
      artist: /http(?:s)?:\/\/(?:open\.)?spotify\.com\/artist\/([a-zA-Z0-9]{1,})/,
      song: /http(?:s)?:\/\/(?:open\.)?spotify\.com\/track\/([a-zA-Z0-9]{1,})/,
      album: /http(?:s)?:\/\/(?:open\.)?spotify\.com\/album\/([a-zA-Z0-9]{1,})/,
      playlist: /http(?:s)?:\/\/(?:open\.)?spotify\.com\/playlist\/([a-zA-Z0-9]{1,})/,
      podcast: /http(?:s)?:\/\/(?:open\.)?spotify\.com\/show\/([a-zA-Z0-9]{1,})/,
      podcastEpisode: /http(?:s)?:\/\/(?:open\.)?spotify\.com\/episode\/([a-zA-Z0-9]{1,})/,
      profile: /http(?:s)?:\/\/(?:open\.)?spotify\.com\/user\/([a-zA-Z0-9]{1,})/,
    },
  },
  instagram: {
    key: 'instagram',
    name: 'Instagram',
    url: 'instagram.com',
    hex: '#E4405F',
    wideThumb: true,
    baseURLMatch: /http(?:s)?:\/\/(?:www\.)?instagram\.com\//,
    contentTypeMatches: {
      image: /http(?:s)?:\/\/(?:www\.)?instagram\.com\/p\/([a-zA-Z0-9]{1,})/,
      profile: /http(?:s)?:\/\/(?:www\.)?instagram\.com\/(?!p\/)(?!stories\/)([a-zA-Z0-9]{1,})/,
      story: /http(?:s)?:\/\/(?:www\.)?instagram\.com\/stories\/([a-zA-Z0-9]{1,})/,
    },
  },
};
