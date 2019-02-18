[![Build Status](https://travis-ci.org/tradziej/allegro-notifier.svg?branch=master)](https://travis-ci.org/tradziej/allegro-notifier)

Allegro Notifier
================

> Application scrapes auctions for given URL and notifies changes in every given time (minutes).


Installation
------------

Ensure you have Node.js installed and then run:

```
$ npm install --global allegro-notifier
```


Usage
-----

```
$ allegro-notifier --help

  Usage
    $ allegro-notifier <url>

  Example
    $ allegro-notifier "https://allegro.pl/kategoria/laptopy-apple-77915?order=n" -t 10
```

Auctions parsing
----------------
```
const getAuctions = require('allegro-notifier);

const url = "https://allegro.pl/kategoria/laptopy-apple-77915?startingTime=5&price_from=2000&price_to=4000&bmatch=baseline-n-ele-1-1-1130&order=n";
const auctions = await getAuctions(url);
```


License
-------

MIT © [Tomasz Radziejewski](https://tomasz.xyz)
