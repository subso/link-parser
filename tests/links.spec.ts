import { helloTest, analyse } from '../lib';
import { expect } from 'chai';
import { describe, it } from 'mocha';

describe('First test', () => {
  it('should return true', () => {
    const result = helloTest();
    expect(result).to.equal(true);
  });
});

function testResult(result: any, extractedId: string, contentType: string) {
  expect(result).to.have.property('extractedId');
  expect(result).to.have.property('contentType');
  expect(result.extractedId).to.be.equal(extractedId);
  expect(result.contentType).to.be.equal(contentType);
}

describe('Twitch link test', () => {
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

describe('YouTube', () => {
  it('should prase youtube channel and video links', () => {
    // Channel
    const channelLink = analyse('https://www.youtube.com/channel/UCSa0hnM2n_yvOnecoQ2fgxA');
    testResult(channelLink, 'UCSa0hnM2n_yvOnecoQ2fgxA', 'channel');

    // Video
    const videoLink = analyse('https://www.youtube.com/watch?v=LgqemiEqJtw');
    testResult(videoLink, 'LgqemiEqJtw', 'video');
  });
});
