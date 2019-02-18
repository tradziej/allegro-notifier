'use strict';

const Scraper = require('./lib/scraper');
const Parser = require('./lib/parser');

async function getAuctions(url) {
  if (!url) throw new Error('url is required');

  try {
    const auctions = await Scraper.getHTML(url).then(html => {
      return Parser.getAllAuctions(html);
    });

    return auctions;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = getAuctions;
