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
  it('should parse clips, streams and channel links', () => {
    // Clip Link One
    const clipLinkOne = analyse('https://www.twitch.tv/jamiepinelive0/clip/AttractiveRichAntelopeTheThing?filter=clips&range=7d&sort=time');
    testResult(clipLinkOne, 'AttractiveRichAntelopeTheThing', 'clip');

    // Clip Link Two
    const clipLinkTwo = analyse('https://twitch.tv/jamiepinelive/clip/AttractiveRichAntelopeTheThing');
    testResult(clipLinkTwo, 'AttractiveRichAntelopeTheThing', 'clip');

    // Steam Link
    const streamLink = analyse('https://twitch.tv/jackdouglas_');
    testResult(streamLink, 'jackdouglas_', 'stream');

    // Vod Link
    const vodLink = analyse('https://www.twitch.tv/videos/617395794');
    testResult(vodLink, '617395794', 'vod');
  });
});

describe('YouTube link tests', () => {
  it('should prase youtube channel and video links', () => {
    // Channel
    const channelLink = analyse('https://www.youtube.com/channel/UCSa0hnM2n_yvOnecoQ2fgxA');
    testResult(channelLink, 'UCSa0hnM2n_yvOnecoQ2fgxA', 'channel');

    // Video
    const videoLink = analyse('https://www.youtube.com/watch?v=LgqemiEqJtw');
    testResult(videoLink, 'LgqemiEqJtw', 'video');
  });
});

describe('Spotify link tests', () => {
  it('should parse spotify artist, track, album, playlist, podcast, postcast episode & user profile', () => {
    // Artist
    const artistLink = analyse('https://open.spotify.com/artist/0gxyHStUsqpMadRV0Di1Qt');
    testResult(artistLink, '0gxyHStUsqpMadRV0Di1Qt', 'artist');

    // Track
    const trackLink = analyse('https://open.spotify.com/track/4uLU6hMCjMI75M1A2tKUQC?si=w_PjTGuCRsaRiRYga2pZ4g');
    testResult(trackLink, '4uLU6hMCjMI75M1A2tKUQC', 'song');

    // Album
    const albumLink = analyse('https://open.spotify.com/album/09A5ujQAQP0zKYqxvrb1Wn?si=pcWSRL7fQOOCD2Tjcsp93A');
    testResult(albumLink, '09A5ujQAQP0zKYqxvrb1Wn', 'album');

    // Playlist
    const playlistLink = analyse('https://open.spotify.com/playlist/19RcUUR4b9oxhcREqD8Xoq');
    testResult(playlistLink, '19RcUUR4b9oxhcREqD8Xoq', 'playlist');

    // Podcast
    const podcastLink = analyse('https://open.spotify.com/show/6glBiNvUItycoTgwDgGTgL');
    testResult(podcastLink, '6glBiNvUItycoTgwDgGTgL', 'podcast');

    // Podcast Episode
    const podcastEpisodeLink = analyse('https://open.spotify.com/episode/4pEP2gndFLNuDLWgEY2yEa');
    testResult(podcastEpisodeLink, '4pEP2gndFLNuDLWgEY2yEa', 'podcastEpisode');

    // User Profile
    const profileLink = analyse('https://open.spotify.com/user/rickastley');
    testResult(profileLink, 'rickastley', 'profile');
  });
});

describe('Instagram link tests', () => {
  it('should parse instagram posts & user profiles', () => {
    // Post
    const postLink = analyse('https://www.instagram.com/p/CA6CDDrht8R/');
    testResult(postLink, 'CA6CDDrht8R', 'image');

    // Profile
    const profileLink = analyse('https://www.instagram.com/pthehacksmith/');
    testResult(profileLink, 'pthehacksmith', 'profile');

    // Story
    const storyLink = analyse('https://www.instagram.com/stories/milmike/');
    testResult(storyLink, 'milmike', 'story');
  });
});
