'use strict';

const axios = require('axios');

const requestConfig = () => {
  return {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.81 Safari/537.36',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
      'Referer': 'https://www.google.pl',
    }
  };
}

const instance = axios.create(requestConfig());

const getHTML = async (url) => {
  const { data } = await instance.get(url);
  return data;
};

module.exports = { getHTML };
