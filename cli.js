#!/usr/bin/env node

'use strict';

const program = require('commander');
const notifier = require('node-notifier');
const Scraper = require('./lib/scraper');
const Parser = require('./lib/parser');

const handleAuctions = async (url, options) => {
  let auctions = [];
  verboseInfo(options.verbose, `Started observing: ${url}`);
  verboseInfo(
    options.verbose,
    `Automatically refresh on every ${options.time} minute(s).`
  );

  do {
    if (auctions.length == 0) {
      auctions = await Scraper.getHTML(url).then(html => {
        return Parser.getAllAuctions(html);
      });
      verboseInfo(options.verbose, auctions);
    }

    verboseInfo(options.verbose, `Sleeping for ${options.time} minute(s).`);
    await sleep(options.time);
    verboseInfo(options.verbose, `Waking up.`);

    const updatedAuctions = await Scraper.getHTML(url).then(html => {
      return Parser.getAllAuctions(html);
    });
    verboseInfo(options.verbose, updatedAuctions);

    const diff = updatedAuctions.filter(comparer(auctions));
    diff.forEach(auction => notify(auction));
    verboseInfo(options.verbose, `Found ${diff.length} new auctions.`);
    verboseInfo(options.verbose, diff);

    auctions = updatedAuctions;
  } while (true);
};

function comparer(otherAuctions) {
  return function (current) {
    return otherAuctions.filter(function (other) {
      return other.url == current.url;
    }).length == 0;
  }
};

const sleep = (minutes = 15) => {
  const ms = 1000 * 60 * minutes;
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
};

const notify = auction => {
  notifier.notify({
    title: "New Allegro auction",
    message: auction.title,
    contentImage: auction.img,
    open: auction.url,
    sound: true,
    wait: true,
  });
};

const verboseInfo = (verbose, data) => {
  if (!verbose) {
    return;
  }

  if (Array.isArray(data)) {
    console.table(data);
  }

  if (typeof data === 'string' || data instanceof String) {
    console.log(data)
  }
}

program
  .version('0.0.1')
  .arguments('<url>')
  .description('Get notifications about new auctions')
  .option('-t, --time <n>', 'Refresh time', parseInt)
  .option('-v, --verbose', 'Extended information')
  .action(handleAuctions)

program.parse(process.argv);

if (program.args.length === 0) program.help();
