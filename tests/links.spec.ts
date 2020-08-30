import { analyse } from '../lib';
import { expect } from 'chai';
import { describe, it } from 'mocha';

function testResult(result: any, extractedId: string, contentType: string) {
  expect(result).to.have.property('extractedId');
  expect(result).to.have.property('contentType');
  expect(result.extractedId).to.be.equal(extractedId);
  expect(result.contentType).to.be.equal(contentType);
}

describe('Twitch link tests', () => {
  it('should parse clip links', () => {
    // Clip Link One
    const clipLinkOne = analyse('https://www.twitch.tv/jamiepinelive0/clip/AttractiveRichAntelopeTheThing?filter=clips&range=7d&sort=time');
    testResult(clipLinkOne, 'AttractiveRichAntelopeTheThing', 'clip');

    // Clip Link Two
    const clipLinkTwo = analyse('https://twitch.tv/jamiepinelive/clip/AttractiveRichAntelopeTheThing');
    testResult(clipLinkTwo, 'AttractiveRichAntelopeTheThing', 'clip');
  });
  it('should parse stream links', () => {
    // Steam Link
    const streamLink = analyse('https://twitch.tv/jackdouglas_');
    testResult(streamLink, 'jackdouglas_', 'stream');
  });
  it('should parse vod links', () => {
    // Vod Link
    const vodLink = analyse('https://www.twitch.tv/videos/617395794');
    testResult(vodLink, '617395794', 'vod');
  });
});

describe('YouTube link tests', () => {
  it('should parse youtube channel links', () => {
    // Channel
    const channelLink = analyse('https://www.youtube.com/channel/UCSa0hnM2n_yvOnecoQ2fgxA');
    testResult(channelLink, 'UCSa0hnM2n_yvOnecoQ2fgxA', 'channel');
  });
  it('should parse youtube video links', () => {
    // Video
    const videoLink = analyse('https://www.youtube.com/watch?v=LgqemiEqJtw');
    testResult(videoLink, 'LgqemiEqJtw', 'video');
  });
});

describe('Spotify link tests', () => {
  it('should parse spotify artist links', () => {
    // Artist
    const artistLink = analyse('https://open.spotify.com/artist/0gxyHStUsqpMadRV0Di1Qt');
    testResult(artistLink, '0gxyHStUsqpMadRV0Di1Qt', 'artist');
  });
  it('should parse spotify track links', () => {
    // Track
    const trackLink = analyse('https://open.spotify.com/track/4uLU6hMCjMI75M1A2tKUQC?si=w_PjTGuCRsaRiRYga2pZ4g');
    testResult(trackLink, '4uLU6hMCjMI75M1A2tKUQC', 'song');
  });
  it('should parse spotify album links', () => {
    // Album
    const albumLink = analyse('https://open.spotify.com/album/09A5ujQAQP0zKYqxvrb1Wn?si=pcWSRL7fQOOCD2Tjcsp93A');
    testResult(albumLink, '09A5ujQAQP0zKYqxvrb1Wn', 'album');
  });
  it('should parse spotify playlist links', () => {
    // Playlist
    const playlistLink = analyse('https://open.spotify.com/playlist/19RcUUR4b9oxhcREqD8Xoq');
    testResult(playlistLink, '19RcUUR4b9oxhcREqD8Xoq', 'playlist');
  });
  it('should parse spotify podcast links', () => {
    // Podcast
    const podcastLink = analyse('https://open.spotify.com/show/6glBiNvUItycoTgwDgGTgL');
    testResult(podcastLink, '6glBiNvUItycoTgwDgGTgL', 'podcast');
  });
  it('should parse spotify podcast episode links', () => {
    // Podcast Episode
    const podcastEpisodeLink = analyse('https://open.spotify.com/episode/4pEP2gndFLNuDLWgEY2yEa');
    testResult(podcastEpisodeLink, '4pEP2gndFLNuDLWgEY2yEa', 'podcastEpisode');
  });
  it('should parse spotify profile links', () => {
    // User Profile
    const profileLink = analyse('https://open.spotify.com/user/rickastley');
    testResult(profileLink, 'rickastley', 'profile');
  });
});

describe('Instagram link tests', () => {
  it('should parse instagram posts links', () => {
    // Post
    const postLink = analyse('https://www.instagram.com/p/CA6CDDrht8R/');
    testResult(postLink, 'CA6CDDrht8R', 'image');
  });
  it('should parse instagram profile links', () => {
    // Profile
    const profileLink = analyse('https://www.instagram.com/pthehacksmith/');
    testResult(profileLink, 'pthehacksmith', 'profile');
  });
  it('should parse instagram story links', () => {
    // Story
    const storyLink = analyse('https://www.instagram.com/stories/milmike/');
    testResult(storyLink, 'milmike', 'story');
  });
});

describe('Github link tests', () => {
  it('should parse github profile links', () => {
    // Profile
    const profileLink = analyse('https://github.com/NotifyTeam');
    testResult(profileLink, 'NotifyTeam', 'profile');
  });
  it('should parse github repo links', () => {
    // Repo
    const repoLink = analyse('https://github.com/NotifyTeam/link-parser');
    testResult(repoLink, 'link-parser', 'repo');
  });
});

describe('Snapchat link test', () => {
  it('should parse snapchat profile', () => {
    // Profile
    const profileLink = analyse('http://www.snapchat.com/add/qwerty');
    testResult(profileLink, 'qwerty', 'profile');
  });
});

describe('Discord link tests', () => {
  it('should parse discord invite links', () => {
    // Discord.gg invite
    const discordGGLink = analyse('https://www.discord.gg/notify');
    testResult(discordGGLink, 'notify', 'invite');

    // Discordapp.com
    const discordappComLink = analyse('https://www.discordapp.com/invite/notify');
    testResult(discordappComLink, 'notify', 'invite');

    // Discord.com
    const discordComLink = analyse('https://www.discord.com/invite/notify');
    testResult(discordComLink, 'notify', 'invite');
  });
});

describe('DLive link test', () => {
  it('should parse dlive channel link', () => {
    // Channel
    const channelLink = analyse('https://dlive.tv/dlive');
    testResult(channelLink, 'dlive', 'channel');
  });
});

describe('Patreon link tests', () => {
  it('should parse patreon channel links', () => {
    // Channel
    const channelLink = analyse('https://www.patreon.com/Barnacules');
    testResult(channelLink, 'Barnacules', 'channel');
  });
  it('should parse patreon post links', () => {
    // Post
    const postLink = analyse('https://www.patreon.com/posts/38049983');
    testResult(postLink, '38049983', 'post');
  });
});

describe('SoundCloud link test', () => {
  it('should parse soundcloud song links', () => {
    // Song
    const songLink = analyse('https://soundcloud.com/rick-astley-official/never-gonna-give-you-up-1');
    testResult(songLink, 'never-gonna-give-you-up-1', 'song');
  });
  it('should parse soundcloud artist links', () => {
    // Artist
    const artistLink = analyse('https://soundcloud.com/rick-astley-official');
    testResult(artistLink, 'rick-astley-official', 'artist');
  });
  it('should parse soundcloud album links', () => {
    // Album
    const albumLink = analyse('https://soundcloud.com/rick-astley-official/sets/the-best-of-25');
    testResult(albumLink, 'the-best-of-25', 'album');
  });
});

describe('TikTok link test', () => {
  it('should parse tiktok post & channel links', () => {
    // Post
    const postLink = analyse('https://www.tiktok.com/@yaboyjam/video/6834740248380017926');
    testResult(postLink, '6834740248380017926', 'post');

    // Channel
    const channelLink = analyse('https://www.tiktok.com/@yaboyjam');
    testResult(channelLink, '@yaboyjam', 'channel');
  });
});

describe('Twitter link test', () => {
  it('should parse twitter post links', () => {
    // Post
    const postLink = analyse('https://twitter.com/jamiepine/status/1136056546922848257');
    testResult(postLink, '1136056546922848257', 'post');
  });
  it('should parse twitter profile links', () => {
    // Profile
    const profileLink = analyse('https://twitter.com/jamiepine');
    testResult(profileLink, 'jamiepine', 'profile');
  });
});

describe('Unfound/Invalid link test', () => {
  it('should return undefined to a valid url but not registered', () => {
    const unfoundLink = analyse('https://test.test/test');
    expect(unfoundLink).to.be.equal(undefined);
  });
  it('should return undefined to an invalid url', () => {
    const invalidUrl = analyse('test');
    expect(invalidUrl).to.be.equal(undefined);
  });
});
