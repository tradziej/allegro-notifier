'use strict';

const cheerio = require('cheerio');
const Auction = require('./auction');

const getAllAuctions = (html) => {
  const $ = cheerio.load(html);

  return $('._8c8b9d3:not(.ef0c899) .cb528e8')
    .find('article')
    .toArray()
    .map(a => getAuction($(a).html()));
}

const getAuction = (html) => {
  const $ = cheerio.load(html);

  const title = $('.a3ad614 h2 a').text();
  const url = $('.a3ad614 h2 a').attr('href');
  const price = $('._611a83b').eq(0).text();
  const isBuyItNow = ($('._3ffbbd8').length ? true : false);
  const img = $('.af753af img').attr('src');

  return new Auction(title, price, isBuyItNow, img, url);
}

module.exports = { getAllAuctions };
