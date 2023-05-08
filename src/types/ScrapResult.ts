import Cheerio = cheerio.Cheerio;
import Root = cheerio.Root;

/**
 * Defines result of scrapSite function.
 */
export interface ScrapResult {
	root: Cheerio;
	loader: Root;
}
