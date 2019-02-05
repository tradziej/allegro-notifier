'use strict';

class Auction {
  constructor(title = "", price = "", isBuyItNow = false, img = "", url="") {
    this.title = title;
    this.price = price;
    this.isBuyItNow = isBuyItNow;
    this.img = img;
    this.url = url;
  }
}

module.exports = Auction;
