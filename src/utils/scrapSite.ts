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
 * @param {string} [initialSelector]   initial element selector.
 *
 * @returns {Promise<ScrapResult>}     Promise of {@link ScrapResult}.
 */
const scrapSite = (
	url?: string,
	initialSelector?: string
): Promise<ScrapResult> => {
	return axios.get(url).then(response => {
		const html = response.data;
		const $ = cheerio.load(html);

		return {
			root: $(initialSelector),
			loader: $,
		};
	});
};

export default scrapSite;
