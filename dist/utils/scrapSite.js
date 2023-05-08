"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const cheerio_1 = __importDefault(require("cheerio"));
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
const scrapSite = (url, initialSelector) => {
    return axios_1.default.get(url).then(response => {
        const html = response.data;
        const $ = cheerio_1.default.load(html);
        return {
            root: $(initialSelector),
            loader: $,
        };
    });
};
exports.default = scrapSite;
//# sourceMappingURL=scrapSite.js.map