import { helloTest, analyse } from '../src';
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
    // Link One
    const clipLinkOne = analyse('https://www.twitch.tv/jamiepinelive0/clip/AttractiveRichAntelopeTheThing?filter=clips&range=7d&sort=time');
    testResult(clipLinkOne, 'AttractiveRichAntelopeTheThing', 'clip');

    // Link Two
    const clipLinkTwo = analyse('https://twitch.tv/jamiepinelive/clip/AttractiveRichAntelopeTheThing');
    testResult(clipLinkTwo, 'AttractiveRichAntelopeTheThing', 'clip');
  });
});
