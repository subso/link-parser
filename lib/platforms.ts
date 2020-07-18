import { PlatformObject } from './interfaces';

export const platforms: { [key: string]: PlatformObject } = {
  twitch: {
    id: 'twch',
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
    id: 'yt',
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
    id: 'spfy',
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
    id: 'ig',
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

  github: {
    id: 'gh',
    key: 'github',
    name: 'Github',
    url: 'github.com',
    hex: '#181717',
    wideThumb: false,
    baseURLMatch: /http(?:s)?:\/\/(?:www\.)?github\.com\//,
    contentTypeMatches: {
      repo: /http(?:s)?:\/\/(?:www\.)?github\.com\/[A-z0-9_-]+\/([A-z0-9_-]+)\/?/,
      profile: /http(?:s)?:\/\/(?:www\.)?github\.com\/([A-z0-9_-]{1,})/,
    },
  },

  snapchat: {
    id: 'snap',
    key: 'snapchat',
    name: 'Snapchat',
    url: 'snapchat.com',
    hex: '#FFFC00',
    wideThumb: false,
    baseURLMatch: /http(?:s)?:\/\/(?:www\.)?snapchat\.com\//,
    contentTypeMatches: {
      profile: /http(?:s)?:\/\/(?:www\.)?snapchat\.com\/add\/([A-z0-9\.\_\-]+)/,
    },
  },

  discord: {
    id: 'dg',
    key: 'discord',
    name: 'Discord',
    url: 'discordapp.com',
    hex: '#7289da',
    wideThumb: false,
    baseURLMatch: /http(?:s)?:\/\/(?:www\.)?(discordapp\.com|discord\.com|discord\.gg)\//,
    contentTypeMatches: {
      invite: /http(?:s)?:\/\/(?:www\.)?(?:discord\.gg|discordapp\.com\/invite|discord\.com\/invite)\/([a-zA-Z0-9_-]{1,})/,
    },
  },

  dlive: {
    id: 'dlv',
    key: 'dlive',
    name: 'DLive',
    url: 'dlive.com',
    hex: '#ffd300',
    wideThumb: false,
    baseURLMatch: /http(?:s)?:\/\/(?:www\.)?dlive\.tv\//,
    contentTypeMatches: {
      channel: /http(?:s)?:\/\/dlive\.tv\/([a-zA-Z0-9_-]{1,})/,
    },
  },

  mixer: {
    id: 'mixr',
    key: 'mixer',
    name: 'Mixer',
    url: 'mixer.com',
    hex: '#29bbed',
    wideThumb: true,
    baseURLMatch: /http(?:s)?:\/\/(?:www\.)?mixer\.com\//,
    contentTypeMatches: {
      channel: /http(?:s)?:\/\/(?:www\.)?mixer\.com\/([a-zA-Z0-9_-]{1,})/,
    },
  },

  patreon: {
    id: 'ptrn',
    key: 'patreon',
    name: 'Patreon',
    url: 'patreon.com',
    hex: '#f96854',
    wideThumb: false,
    baseURLMatch: /http(?:s)?:\/\/(?:www\.)?patreon\.com\//,
    contentTypeMatches: {
      channel: /http(?:s)?:\/\/(?:www\.)?patreon\.com\/([^posts\/][a-zA-Z0-9-_]{1,})/,
      post: /http(?:s)?:\/\/(?:www\.)?patreon\.com\/posts\/([0-9]{1,})/,
    },
  },

  soundcloud: {
    id: 'scld',
    key: 'soundcloud',
    name: 'SoundCloud',
    url: 'soundcloud.com',
    hex: '#ff8800',
    wideThumb: false,
    baseURLMatch: /http(?:s)?:\/\/(?:www\.)?soundcloud\.com\//,
    contentTypeMatches: {
      song: /http(?:s)?:\/\/(?:www\.)?soundcloud\.com\/[a-zA-Z0-9-_]{1,}\/([^sets][a-zA-Z0-9-_]{1,})/,
      album: /http(?:s)?:\/\/(?:www\.)?soundcloud\.com\/[a-zA-Z0-9-_]{1,}\/sets\/([a-zA-Z0-9-_]{1,})/,
      artist: /http(?:s)?:\/\/(?:www\.)?soundcloud\.com\/([a-zA-Z0-9-_]{1,})/,
    },
  },

  tiktok: {
    id: 'tktk',
    key: 'tiktok',
    name: 'TikTok',
    url: 'tiktok.com',
    hex: '#40A4C4',
    wideThumb: true,
    baseURLMatch: /http(?:s)?:\/\/(?:www\.)?tiktok\.com\//,
    contentTypeMatches: {
      post: /http(?:s)?:\/\/(?:www\.)?tiktok\.com\/@[a-zA-Z0-9-_]{1,}\/video\/([0-9]+)/,
      channel: /http(?:s)?:\/\/(?:www\.)?tiktok\.com\/(@[a-zA-Z0-9_-]{1,})/,
    },
  },

  twitter: {
    id: 'twtr',
    key: 'twitter',
    name: 'Twitter',
    url: 'twitter.com',
    hex: '#00aced',
    wideThumb: false,
    baseURLMatch: /http(?:s)?:\/\/(?:www\.)?twitter\.com\//,
    contentTypeMatches: {
      post: /http(?:s)?:\/\/(?:www\.)?twitter\.com\/[a-zA-Z0-9-_]{1,}\/status\/([0-9]+)/,
      profile: /http(?:s)?:\/\/(?:www\.)?twitter\.com\/([a-zA-Z0-9-_]{1,})/,
    },
  },

  timcoleme: {
    id: 'timc',
    key: 'timcoleme',
    name: 'Timothy Cole',
    url: 'timcole.me',
    hex: '#1b7fe6',
    wideThumb: true,
    baseURLMatch: /http(?:s)?:\/\/(?:www\.)?timcole\.me\//,
    contentTypeMatches: {
      stream: /http(?:s)?:\/\/timcole\.me\/(nda)/,
    },
  },
};

// Statically render an object that maps platform keys to their respective platform ids
export const idToKey = (() => {
  const obj: { [key: string]: string } = {};
  Object.keys(platforms).map((platformName) => (obj[platforms[platformName].id] = platformName));
  return obj;
})();
