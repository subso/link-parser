import { platforms } from './platforms';

export function analyse(link: string) {
    if (typeof link !== 'string') return undefined;

    for (let platformName in platforms) {
        // @ts-ignore
        let platformObj = platforms[platformName];
        if (link.match(platformObj.baseURLMatch)) {
            for (let contentTypeMatch in platformObj.contentTypeMatches) {
                let matched = link.match(platformObj.contentTypeMatches[contentTypeMatch]);
                if (matched) {
                    platformObj.extractedId = extract(matched);
                    platformObj.contentType = contentTypeMatch;
                    return platformObj;
                }
            }
        }
    }
}
export function extract(matched: RegExpMatchArray) {
    if (!matched) return undefined;
    for (let i = 0; i < matched.length; i++) {
        if (i > 0 && matched[i] !== undefined) return matched[i];
    }
}
