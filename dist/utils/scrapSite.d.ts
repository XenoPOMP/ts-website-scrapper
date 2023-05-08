import { ScrapResult } from '../types/ScrapResult';
/**
 * Parses sites from given url.
 *
 * Picks element according to selector.
 *
 * @param {string} [url]               parsing site URL.
 * @param {string} [initialSelector]   initial element selector.
 *
 * @returns {Promise<ScrapResult>}     Promise of {@link ScrapResult}.
 */
declare const scrapSite: (url?: string, initialSelector?: string) => Promise<ScrapResult>;
export default scrapSite;
