/// <reference types="cheerio" />
import Cheerio = cheerio.Cheerio;
/**
 * Parses sites from given url.
 *
 * Picks element according to selector.
 *
 * @param {string} [url]               parsing site URL.
 * @param {string} [selector]          initial element selector.
 *
 * @returns {Promise<Cheerio>}     Cheerio object. [Read docs]{@link https://github.com/cheeriojs/cheerio}
 */
declare const scrapSite: (url?: string, selector?: string) => Promise<Cheerio>;
export default scrapSite;
