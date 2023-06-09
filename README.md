# TypeScript-based Website scrapper

## What is it?

This library allows you to parse websites.

## How to use?

Here I show you example ``scrapSite`` usage:

```ts
import scrapSite from 'ts-website-scrapper';

scrapSite('https://en.wikipedia.org/wiki/Lorem_ipsum', 'h1').then(scrapper => {
  const header = scrapper.root.text();

  console.log(header);
});
```

### ScrapResult
scrapper in previous example is typeof ``ScrapResult``.

```ts
export interface ScrapResult {
  root: Cheerio;
  loader: Root;
}
```

``loader`` is the same as JQuery`s ``$`` function, but for Node server side.

See docs for Cheerio [here](https://github.com/cheeriojs/cheerio#readme).