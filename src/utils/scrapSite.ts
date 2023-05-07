import axios from 'axios';
import cheerio from 'cheerio';

import { ScrapResult } from '../types/ScrapResult';

import Cheerio = cheerio.Cheerio;

/**
 * Parses sites from given url.
 *
 * Picks element according to selector.
 *
 * @param {string} [url]               parsing site URL.
 * @param {string} [selector]          initial element selector.
 *
 * @returns {Promise<ScrapResult>}     Cheerio object. [Read docs]{@link https://github.com/cheeriojs/cheerio}
 */
const scrapSite = (url?: string, selector?: string): Promise<ScrapResult> => {
	return axios.get(url).then(response => {
		const html = response.data;
		const $ = cheerio.load(html);

		return $(selector);
	});
};

export default scrapSite;
