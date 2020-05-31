import { platforms } from './platforms';
import { PlatformObject } from './interfaces';

export function analyse(link: string): PlatformObject | undefined {
  // if no string is provided just return undefined
  if (typeof link !== 'string') return undefined;

  for (let platformName in platforms) {
    // @ts-ignore
    let platformObj = platforms[platformName];
    // if the link matches the baseURLMatch regex. It will stop at the first match out of all the platforms.
    if (link.match(platformObj.baseURLMatch)) {
      // loop over the keys in the platform's "contentTypeMatches" property
      for (let contentTypeMatch in platformObj.contentTypeMatches) {
        // each regex entry should be ordered so the most simple is LAST in the object
        // the key of the entry into this object should be the content type ("clip" | "stream" | "video" etc)
        let matched = link.match(platformObj.contentTypeMatches[contentTypeMatch]);
        if (matched) {
          // extract key data and inject into platformObj
          platformObj.extractedId = extract(matched);
          platformObj.contentType = contentTypeMatch;

          return platformObj;
        }
      }
      // this shouldn't get hit, in theory
      return undefined;
    }
  }
}
export function extract(matched: RegExpMatchArray) {
  if (!matched) return undefined;
  for (let i = 0; i < matched.length; i++) {
    if (i > 0 && matched[i] !== undefined) return matched[i];
  }
}
